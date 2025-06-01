# 🖥️ FullStack CPU Monitor Dashboard

A Full Stack monitoring system for visualizing real-time AWS EC2 CPU usage, featuring an interactive Angular frontend, a robust Spring Boot backend, and full Docker packaging for easy deployment.

---

## 📌 Project Overview

This application allows users to monitor the CPU utilization of a specific AWS EC2 instance over time. The user provides the instance's IP address, a time range, and a sampling interval, and the system displays a live graph based on data pulled from AWS CloudWatch.

---

## 🧱 Architecture

- **Frontend**: Built using [Angular](https://angular.io/) and styled with [Tailwind CSS](https://tailwindcss.com/).
- **Backend**: Developed in [Java](https://www.oracle.com/java/) with [Spring Boot](https://spring.io/projects/spring-boot). It includes a Controller, Service layer, and Model.
- **Cloud Integration**: Fetches real-time CPU metrics from [AWS CloudWatch](https://aws.amazon.com/cloudwatch/).
- **API Documentation**: Integrated with Swagger for live API testing and documentation.
- **Containerization**: Entire system is packaged into a single Docker image — no need to run backend and frontend separately.

---

## 🖼️ Tech Flow Diagram

![image](https://github.com/user-attachments/assets/bb916734-7983-4bbd-b1ba-1128cae7ee99)

---

### :hammer_and_wrench: Languages and Tools :
<div>
  <img src="https://github.com/devicons/devicon/blob/master/icons/swagger/swagger-original-wordmark.svg" title="swagger"  alt="swagger" width="60" height="60"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/docker/docker-plain.svg" title="Docker" **alt="Docker" width="60" height="60"/>&nbsp
  <img src="https://github.com/devicons/devicon/blob/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" title="amazonwebservices" **alt="amazonwebservices" width="60" height="60"/>
  <img src="https://github.com/devicons/devicon/blob/master/icons/angular/angular-original.svg" title="angular" alt="angular" width="60" height="60"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/tailwindcss/tailwindcss-plain-wordmark.svg"  title="tailwindcss" alt="tailwindcss" width="60" height="60"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain-wordmark.svg"  title="CSS3" alt="CSS" width="60" height="60"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="60" height="60"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg" title="typescript" **alt="typescript" width="60" height="60"/>  &nbsp
  <img src="https://github.com/devicons/devicon/blob/master/icons/java/java-original-wordmark.svg" title="Java" **alt="Java" width="60" height="60"/>&nbsp
  <img src="https://github.com/devicons/devicon/blob/master/icons/intellij/intellij-original.svg" title="intellij" **alt="intellij" width="60" height="60"/>&nbsp
  <img src="https://github.com/devicons/devicon/blob/master/icons/spring/spring-original-wordmark.svg" title="spring" **alt="spring" width="60" height="60"/>&nbsp
</div>

---

## 🚀 Running the App with Docker

1. Make sure you have an `.env` file with the required AWS credentials.
2. Build the Docker image:

```bash
docker build -t cpu-monitor-app .
