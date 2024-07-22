School Bus Reservation System
The School Bus Reservation System is a web application designed to manage student bus reservations in real-time. The backend is built with NestJS and MongoDB, all running within Docker containers.

Table of Contents
Features
Technologies Used
Architecture
Getting Started
Usage
API Documentation


Features
Real-time bus reservation management for students.
Admin capabilities to manage buses, stations, schedules, and drivers.
Driver interface to view the number of reservations.
Specific working hours for buses with special handling for early morning departures.
Dockerized application for easy deployment and scalability.
Authorization using CASL to manage access control for students, drivers, and admins.
Automated reservation cleanup using node-cron.
Technologies Used
Backend: NestJS
Database: MongoDB
Containerization: Docker, Docker Compose
Authorization: CASL
Scheduling: node-cron
Architecture
The architecture of the School Bus Reservation System is designed to ensure scalability, maintainability, and performance. Below is a high-level overview of the system architecture:


Components
Backend Container: Hosts the NestJS application.
Database Container: Hosts the MongoDB instance.
API Documentation: Implemented using Swagger and available within the backend container.
The Lucidchart diagram provides a visual representation of the interaction between these components.

Getting Started
Prerequisites
Docker
Docker Compose
Installation
Clone the repository:

```bash
git clone https://github.com/yourusername/school-bus-reservation-system.git
cd school-bus-reservation-system
```
Start the application:

Use the provided Makefile to control the Docker containers.

```bash
make up
```
Stop the application:

```bash
make down
```
Stop and remove containers:

```bash
make stop
make remove
```
Check the status of containers:

```bash
make status
```
Clear Docker system:


```bash
make clear
```
Usage
Once the application is running, you can access the API endpoints as per the API documentation. Admins can manage buses, stations, schedules, and drivers, while students can make or cancel reservations. Drivers can view the number of reservations for each bus.

Environment Variables
Ensure you have the necessary environment variables set up in a .env file for your application to work correctly. Typical variables include:

plaintext
```
MONGO_URI=mongodb://mongo:27017/schoolBusDB
PORT=3000
JWT_SECRET=your_jwt_secret
```
API Documentation
The application includes Swagger for API documentation. Once the application is running, you can access the documentation at:

```bash
http://localhost:3000/api
```
Authorization
The application uses CASL for managing access control to resources. Different roles (students, drivers, and admins) have different levels of access to the system's resources.

Scheduling
The application uses node-cron to automatically delete reservations 15 minutes after the departure time to avoid any potential issues.