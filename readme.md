## IGame Assignment

### Known Issues: Data Persistence

This project utilizes **Context API** on the frontend and **in-memory storage** on the backend, which currently introduces limitations regarding data persistence.

- **Frontend**: The **Context API** is used for managing state globally across the app. However, because it's kept in memory, any page reload or navigation may cause the application to lose state, resulting in a temporary loss of data. This issue can affect user experience during interactions that rely on consistent state.

- **Backend**: The backend is powered by a **Node.js API**, but it relies on **in-memory storage** to manage data. As a result, data is not persistent beyond the current session or server restart. Once the server is restarted, all data is lost. In a production-ready system, a more robust persistence layer (such as a database) would be required to ensure data retention.

### Project Overview

This project is built using:

- **Frontend**: Next.js (static site generation) and Tailwind CSS for styling.
- **Backend**: Node.js API to handle requests.

The current implementation follows the instructions provided, but for a fully functional, production-ready application, it is recommended to replace in-memory storage with a database and implement proper state persistence mechanisms on the frontend.

### Access the Project

- **Frontend**: [Live Frontend](https://igame-test.onrender.com) https://igame-test.onrender.com
- **Backend**: [Live Backend](https://igame-api.onrender.com) https://igame-api.onrender.com

### Cloning and Running the Project Locally

To clone and run the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/inidaname/igame-test
   cd igame-test
   ```

2. **Install dependencies**:

   - For **frontend**:

     ```bash
     cd frontend
     npm install
     ```

   - For **backend**:

     ```bash
     cd backend
     npm install
     ```

3. **Run the frontend and backend locally**:

   - For **frontend**:

     ```bash
     cd frontend
     npm run dev
     ```

     This will start the frontend server at [http://localhost:3000](http://localhost:3000).

   - For **backend**:

     ```bash
     cd backend
     npm start
     ```

     This will start the backend server at [http://localhost:3001](http://localhost:3001).

4. Visit the local versions of the frontend and backend:

   - **Frontend**: [http://localhost:3000](http://localhost:3000)
   - **Backend**: [http://localhost:3001](http://localhost:3001)
