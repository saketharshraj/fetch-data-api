# Fetch Data API

## Introduction

Fetch Data API is a simple HTTP server built with Node.js and Express. It is designed to handle requests for specific lines or entire contents of files stored on the server. This project includes a Docker configuration for easy deployment and resource management.

## Features

- Retrieve specific lines or the entire content of a file.
- Dockerized for easy setup and consistent runtime environment.
- Configured for resource management (memory and CPU limits) using Docker Compose.

## Prerequisites

- Docker
- Docker Compose

## Project Structure

- `server.js`: Main server file which sets up the Express server and routes.
- `fileHandler.js`: Module for handling file reading operations.
- `Dockerfile`: Docker configuration for building the server image.
- `docker-compose.yml`: Docker Compose configuration for running the server with resource limits.
- `package.json`: Node.js project manifest file with metadata and dependencies.

## Running the Server

1. Clone the repository:
   ```bash
   git clone https://github.com/saketharshraj/fetch-data-api.git
   ```

2. Navigate to the project directory:
   ```bash
   cd fetch-data-api
   ```

3. To build and run the server with Docker Compose:
   ```bash
   docker-compose up --build
   ```

## Optimizations in `fileHandler.js`

In the `fileHandler.js` module, several optimizations were implemented to improve the efficiency and performance of file operations:

### 1. Stream-Based Line Reading
Initially, the code loaded the entire file into memory before processing it. This approach could be inefficient and memory-intensive, especially for large files. To address this, the code was optimized to use streams for reading the file line by line. This allows for efficient processing of large files without loading the entire content into memory.

### 2. Stream Piping for Entire File Requests
When handling requests for the entire content of a file, the code now utilizes the `stream.pipe()` method. This method efficiently streams the file's content directly to the response without buffering the entire file in memory. This optimization significantly reduces memory usage and improves response times, especially for large files.

These optimizations ensure that the server can efficiently handle both line-specific requests and requests for the entire file content while minimizing resource consumption.

By implementing these optimizations, the server can handle a high volume of requests while maintaining optimal performance and resource efficiency.
