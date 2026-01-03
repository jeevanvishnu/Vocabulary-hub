# Vocabulary Hub

Vocabulary Hub is a full-stack web application designed to help users learn and manage vocabulary efficiently. It combines a modern React frontend with a robust Node.js/Bun backend to deliver a seamless learning experience, featuring AI-powered capabilities and secure data management.

## Tech Stack

### Frontend (`my-app`)
- **Framework:** [React 19](https://react.dev/) (built with [Vite](https://vitejs.dev/))
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/)
- **HTTP Client:** [Axios](https://axios-http.com/)
- **Authentication:** [Firebase](https://firebase.google.com/)
- **Integrations:** Bytez.js

### Backend (`backend`)
- **Runtime:** [Bun](https://bun.sh/)
- **Framework:** [Express.js](https://expressjs.com/)
- **Database:** [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **AI Integration:** [OpenRouter SDK](https://openrouter.ai/)
- **Utilities:** Chalk, Dotenv

## Project Structure

```
vocabulary-hub/
├── my-app/         # Frontend application
│   ├── src/        # Source code
│   └── ...
├── backend/        # Backend server
│   ├── src/        # Server logic (Routes, Config, etc.)
│   └── ...
└── README.md       # Project documentation
```

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [Bun](https://bun.sh/) (Required for backend scripts as configured)
- [MongoDB](https://www.mongodb.com/) (Local instance or Atlas URI)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <your-repo-url>
    cd "Vocabulary Hub"
    ```

2.  **Setup the Backend:**

    Navigate to the `backend` directory:
    ```bash
    cd backend
    ```

    Install dependencies:
    ```bash
    bun install
    # or
    npm install
    ```

    **Environment Variables:**
    Create a `.env` file in the `backend` directory and add the necessary variables:
    ```env
    PORT=3000
    MONGO_URI=your_mongodb_connection_string
    # Add other keys as required (e.g., OPENROUTER_API_KEY)
    ```

    Start the server:
    ```bash
    bun start
    # or for development mode
    bun run dev
    ```

3.  **Setup the Frontend:**

    Open a new terminal and navigate to the `my-app` directory:
    ```bash
    cd my-app
    ```

    Install dependencies:
    ```bash
    npm install
    ```

    Start the development server:
    ```bash
    npm run dev
    ```

    The frontend will essentially run on `http://localhost:5173` (default Vite port).

## Scripts

### Frontend (`my-app`)
- `npm run dev`: Starts the Vite development server.
- `npm run build`: Compiles TypeScript and builds the app for production.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Previews the production build locally.

### Backend (`backend`)
- `bun start`: Runs the server using `bun run server.ts`.
- `bun run dev`: Runs the server in development mode using `nodemon`.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
