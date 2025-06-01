FROM node:20 as ng-builder

WORKDIR /app

COPY frontend ./frontend
WORKDIR /app/frontend
RUN npm install --legacy-peer-deps
RUN npm run build -- --configuration production

FROM eclipse-temurin:17-jdk AS backend-builder

WORKDIR /app
COPY backend ./backend
WORKDIR /app/backend/cpu-monitor-backend

RUN chmod +x mvnw
RUN ./mvnw clean package -DskipTests

FROM eclipse-temurin:17-jdk

WORKDIR /app
COPY --from=backend-builder /app/backend/cpu-monitor-backend/target/*.jar app.jar
COPY --from=ng-builder /app/frontend/dist/frontend/ ./static/

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
