# Personal Notes App (React)

A simple and clean single-page application built with React to create, search, and manage daily personal notes. I built this project to practice core React concepts like managing state, handling user inputs, and working with reusable components.

## Key Features
* **Create Notes:** Easily add new notes with a title and content body.
* **Real-time Search:** Filter and find specific notes instantly using the search bar.
* **Delete Functionality:** Remove notes that are no longer needed.
* **Component-driven Architecture:** Split into small, reusable components like `NoteItem`, `NotesList`, and `NoteSearch` for better code structure.

## Folder Structure
Inside the `src` folder, the project is organized into clear components:
* `src/components/NoteInput.jsx` - Handles the form and input validation for creating new notes.
* `src/components/NoteItem.jsx` & `NoteActionButton.jsx` - Renders individual note cards and their delete actions.
* `src/components/NotesList.jsx` - Manages the layout and rendering of multiple notes.
* `src/components/NoteSearch.jsx` - Controls the search filter logic.
* `src/App.jsx` - The main component where all the global state and logic live.

## Tech Stack
* **Framework:** React.js (Vite environment)
* **Language:** JavaScript (JSX)
* **Styling:** Custom CSS (`src/styles/style.css`)

## How to Setup and Run this Project Locally

1. Make sure you have Node.js installed on your computer.
2. Clone this repository:
   ```bash
   git clone https://github.com
   ```
3. Open your terminal inside the project folder and install the dependencies:
   ```bash
   npm install
   ```
4. Start the local development server:
   ```bash
   npm run dev
   ```
5. Open your browser and go to the local URL provided by Vite (usually `http://localhost:5173`).
