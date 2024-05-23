## Getting Started

### Set Up

1. Clone this project
2. Navigate to the project directory and run `pnpm install`
3. Run docker compose up to provision PostgreSQL database
4. Make sure all the database credentials is correct (see src/config/db.ts)
5. Run DB Migrations `pnpm run-migrations`
6. Run service `pnpm start`

## Architecture Proposal

### Backend Service

Typescript with Node.js and Express.js for REST API.

### Database

PostgreSQL will be used as the database. It's a powerful, open-source object-relational database system with a strong reputation for reliability and performance. It's also ACID-compliant which ensures data integrity, which we really need for appointment scheduling.

### Deployment

Docker for containerization to ensures the application runs the same way in every environment, so we can conveniently scale the service horizontally. It might be a good idea to use tools like Kubernetes to handle that, or uses cloud managed service like AWS ECS, Google Kubernetes Engine, etc.

## Core Featues

### API Endpoints

1. GET /slots: Retrieve available slots based on the selected date, showing time and availability.
2. POST /appointments: Book appointments, including slot availability checks and validations.

### Entities

1. Appointment: id, slotId
2. Slot: id, startTime, endTime, availability

## Architecture Diagram

![image](https://i.postimg.cc/KRZQgHn1/littlelives.png)

![image](https://i.postimg.cc/vc3h7tz3/littlelives2.png)

### Challenges

- The architecture will be designed to support scalability and high availability. This can be achieved by using load balancers, auto-scaling, introducing cache on high read rates but low on update frequency.
- To handle concurrent bookings and maintain data integrity, we can use database transactions and row-level locking.
- Security vulnerabilities can be mitigated by using HTTPS, sanitizing user inputs, using JWT for authentication, and implementing rate limiting (not yet developed)

### Potential Improvement

- To handle concurrent slot bookings that can be open for a long period of time (within minutes or more) using a row-level locking might not the best approach. We can introduce distributed locking using tools like Redis.
