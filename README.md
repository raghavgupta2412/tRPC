# tRPC Example Project

This project is a simple example of using [tRPC](https://trpc.io/) to build type-safe APIs with TypeScript. The goal is to demonstrate how to set up a basic tRPC server and client, providing a clear understanding of its capabilities.

## Features
- Type-safe API calls using tRPC
- Easy integration with React
- Full-stack TypeScript support
- Simple example of CRUD operations

## Technologies Used
- **Backend**: Node.js, Express, tRPC
- **Frontend**: React, TypeScript
- **Database**: [Your choice, e.g., MongoDB, PostgreSQL, etc.](#)

## Getting Started

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (or [Yarn](https://yarnpkg.com/))

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/raghavgupta2412/tRPC.git
    ```
2. Navigate into the project directory:
    ```bash
    cd tRPC
    ```
3. Install dependencies for both the server and client:
    ```bash
    npm install
    cd client
    npm install
    ```

### Running the Application
1. Start the backend server:
    ```bash
    npm run dev
    ```
2. Start the frontend:
    ```bash
    cd client
    npm start
    ```

The application should be running at `http://localhost:3000`.

## Project Structure
```plaintext
tRPC/
├── client/          # React frontend
├── server/          # tRPC server and API routes
├── package.json      # Project metadata and dependencies
├── tsconfig.json     # TypeScript configuration
└── .env             # Environment variables (if any)
