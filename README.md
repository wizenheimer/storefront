# Yet Another Ecommerce Project

Just another attempt to build a fully functional e-commerce platform using Node.js, Express, TypeScript, MongoDB, Zod Jest, Supertest, Prometheus, and Docker.

## Stack

- Node.js: JavaScript runtime environment
- Express: Web application framework for Node.js
- TypeScript: Superset of JavaScript that adds static typing
- MongoDB: NoSQL database
- Zod: Library for type-safe schema validation
- Jest: Testing framework for JavaScript
- Supertest: HTTP testing framework for Node.js
- Prometheus: Monitoring and alerting toolkit
- Docker: Platform for building, running, managing, and distributing applications in containers

## Resources & Endpoints

### User

- **POST /users**: Creates a new user
- **POST /sessions**: Creates a new session for an existing user
- **GET /sessions**: Retrieves all sessions for the current user
- **DELETE /sessions/:sessionId**: Deletes the specified session

### Product

- **POST /products**: Creates a new product
- **GET /products/:productId**: Retrieves the specified product
- **PUT /products/:productId**: Updates the specified product
- **DELETE /products/:productId**: Deletes the specified product

### Metrics

- **GET /metrics**: Retrieves various metrics related to the application, such as the number of users, products, and orders

## Installation

1. Clone the project repository:

```bash
git clone https://github.com/yet-another-ecommerce-project.git
```

2. Install the project dependencies:

```bash
npm install
```

## Running the Application

1. Start the MongoDB database:

```bash
docker-compose up -d mongodb
```

2. Start the application:

```bash
npm start
```

The application will be running on port 3000. You can access the API using the following URLs:

- **Users:** `http://localhost:3000/users`
- **Products:** `http://localhost:3000/products`
- **Metrics:** `http://localhost:3000/metrics`

## Testing

1. Run the unit tests:

```bash
npm test
```

2. Run the end-to-end tests:

```bash
npm run test:e2e
```

## Monitoring

Prometheus is configured to expose metrics on port 9090. You can access the Prometheus dashboard using the following URL:

- **Prometheus Dashboard:** `http://localhost:9090`

## Dockerization

The project is Dockerized using docker-compose. To build and run the docker containers, run the following command:

```bash
docker-compose up -d
```

The application will be running on port 3000 within the container. You can access the API using the following URLs:

- **Users:** `http://localhost:3000/users`
- **Products:** `http://localhost:3000/products`
- **Metrics:** `http://localhost:3000/metrics`