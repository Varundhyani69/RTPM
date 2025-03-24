# Real-Time Process Monitoring (RTPM)

## Overview

RTPM is a real-time process monitoring system built using **Node.js, Express, React, and Socket.io**. It provides users with live updates on system processes, including CPU and memory usage.

## Features

- **Real-time process tracking**: Monitors CPU and memory usage of running processes.
- **Web-based dashboard**: Displays data dynamically in a React-powered UI.
- **Efficient data retrieval**: Uses `ps-list` for process data collection.
- **Live updates**: Sends process updates every 3 seconds using Socket.io.

## Technologies Used

- **Frontend**: React.js, HTML, CSS
- **Backend**: Node.js, Express.js
- **Real-time Communication**: Socket.io
- **Process Data Retrieval**: ps-list (instead of WMIC)

## Installation & Setup

### Prerequisites

- **Node.js** (>= 14.x)
- **npm** (or **yarn**)

### Steps to Run Locally

1. Clone the repository:
   ```sh
   git clone https://github.com/Varundhyani69/RTPM.git
   cd RTPM
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   node server.js
   ```
4. Start the frontend:
   ```sh
   cd client
   npm start
   ```
5. Open the web browser and visit:
   ```
   http://localhost:8080
   ```

## Folder Structure

```
RTPM
│
├── backend/
│   ├── node_modules/
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── App.css
    │   ├── App.js
    │   ├── App.test.js
    │   ├── index.css
    │   ├── index.js
    │   ├── logo.svg
    │   ├── reportWebVitals.js
    │   └── setupTests.js
    ├── .gitignore
    ├── README.md
    ├── package-lock.json
    └── package.json

```

## Usage

- Start the server and frontend.
- Open the dashboard to view real-time process data.
- Monitor CPU and memory usage of system processes dynamically.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the **MIT License**.

---
