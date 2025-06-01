# 🖥️ FullStack CPU Monitor Dashboard

A Full Stack monitoring system for visualizing real-time AWS EC2 CPU usage, featuring an interactive Angular frontend, a robust Spring Boot backend, and full Docker packaging for easy deployment.

---

![Java](https://img.shields.io/badge/Java-17-blue)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.5.0-brightgreen)
![Maven](https://img.shields.io/badge/Maven-3.9.9-red)
![Docker](https://img.shields.io/badge/Docker-Containerized-blue)
![Swagger](https://img.shields.io/badge/Swagger-Enabled-yellowgreen)
![Angular](https://img.shields.io/badge/Angular-17.3.0-red)
![Chart.js](https://img.shields.io/badge/Chart.js-4.4.9-yellowgreen)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38b2ac)

---

## 📌 Project Overview

This application allows users to monitor the CPU utilization of a specific AWS EC2 instance over time. The user provides the instance's IP address, a time range, and a sampling interval, and the system displays a live graph based on data pulled from AWS CloudWatch.

## 🌐 Live Demo

<a href="https://cpu-monitor-app.runmydocker-app.com/" target="_blank">
  <img src="https://img.shields.io/badge/🌐 View Live Demo-blue?style=for-the-badge" alt="Live Demo" />
</a>

You can test the app live — no setup required! Hosted instantly via RunMyDocker with a public URL linked to the containerized app.


<h2>🎥 Technical Walkthrough Video</h2>

<p>
For a full explanation of the system architecture, development process, and a live demonstration of the application in action, you can watch the following video:
</p>

<p>
<a href="https://www.youtube.com/watch?v=-VVB8LT43m4&ab_channel=binnyschriger" target="_blank">
▶️ Watch on YouTube
</a>
</p>

<p>
In this video, I walk through the backend and frontend structure, explain how the integration with AWS CloudWatch works, and demonstrate how data is visualized on the dashboard in real time.
</p>

---

## 🧱 Architecture

- **Frontend**: Built using [Angular](https://angular.io/) and styled with [Tailwind CSS](https://tailwindcss.com/).
- **Backend**: Developed in [Java](https://www.oracle.com/java/) with [Spring Boot](https://spring.io/projects/spring-boot). It includes a Controller, Service layer, and Model.
- **Cloud Integration**: Fetches real-time CPU metrics from [AWS CloudWatch](https://aws.amazon.com/cloudwatch/).
- **API Documentation**: Integrated with Swagger for live API testing and documentation.
- **Containerization**: Entire system is packaged into a single Docker image — no need to run backend and frontend separately.

---

## 🖼️ Tech Flow Diagram

![image](https://github.com/user-attachments/assets/1662ad35-8e70-40ed-a468-f142074f29c2)


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
<h2>🌍 Live Demo</h2>

<p>
You can view and interact with the full live demo of the app here:<br>
👉 <a href="https://cpu-monitor-app.runmydocker-app.com/" target="_blank">
https://cpu-monitor-app.runmydocker-app.com/</a>
</p>

<p>
The application was deployed effortlessly using <strong>RunMyDocker</strong> – a platform that lets you:
</p>
<ul>
  <li>Deploy any public Docker image</li>
  <li>Expose a public URL for your app instantly</li>
  <li>Test and demo full-stack applications without managing servers</li>
</ul>

<p><em>It's a super quick way to get your project online – just push your Docker image and go live in seconds!</em></p>

---

<h2>Swagger UI 📚</h2>
<p>
  Available at: <a href="https://cpu-monitor-app.runmydocker-app.com/swagger-ui/index.html" target="_blank">
  🌐 https://cpu-monitor-app.runmydocker-app.com/swagger-ui/index.html</a>
</p>

<p>This interactive interface lets you test the API in real time:</p>
<ul>
  <li><strong>Try the</strong> <code>/monitoring/getCpuUsage</code> <strong>endpoint</strong>.</li>
  <li>Provide query parameters like:
    <ul>
      <li><code>ip</code> – AWS EC2 instance IP</li>
      <li><code>from</code>, <code>to</code> – date-time range</li>
      <li><code>interval</code> – sample frequency</li>
    </ul>
  </li>
  <li>Instantly see JSON responses from your deployed app.</li>
</ul>
<p><em>Perfect for demos, testing, and exploring the API without writing code.</em></p>

<hr>

<h2>Requirements ⚙️</h2>
<ul>
  <li>Java 17+</li>
  <li>Maven 3.6+</li>
  <li>Node.js 18+</li>
  <li>Docker</li>
</ul>

<hr>

<h2>Getting Started 🚀</h2>

<h3>1. Clone the repository</h3>
<pre><code>git clone https://github.com/binny3213/CPU-Monitor-App.git
cd CPU-Monitor-App
</code></pre>

<h3>2. Build the Docker image</h3>
<pre><code>docker build -t cpu-monitor-app .
</code></pre>

<h3>3. Run the app with your AWS credentials</h3>
<p>
The backend fetches CPU metrics from AWS CloudWatch, so you'll need valid AWS credentials:
</p>
<pre><code>docker run -p 8080:8080 \
-e AWS_ACCESS_KEY_ID=your-access-key \
-e AWS_SECRET_ACCESS_KEY=your-secret-key \
-e AWS_REGION=us-east-1 \
cpu-monitor-app
</code></pre>

<p>
After launch, Swagger UI will be available locally at:<br>
📍 <a href="http://localhost:8080/swagger-ui/index.html">http://localhost:8080/swagger-ui/index.html</a>
</p>


