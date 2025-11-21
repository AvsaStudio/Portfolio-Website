# Salome Avsa Miller - Interactive Portfolio

A sophisticated, interactive personal portfolio built with React, TypeScript, and Tailwind CSS. This application merges high-end aesthetic design with functional micro-applications to demonstrate technical versatility.

## Key Features

### 1. Interactive 3D Hero Section
*   **Mechanism**: Custom CSS 3D transforms and keyframe animations.
*   **Interaction**: Mouse-responsive camera model that "explodes" into component parts (lens, body, sensor) to reveal internal details.
*   **Design**: Built entirely with DOM elements (divs) and CSS gradients—no external 3D libraries or models used.

### 2. Functional Terminal Simulator
*   **Interface**: A CLI-style environment integrated directly into the web page.
*   **Capabilities**: Runs simulated Python scripts including:
    *   `sals_shipping.py`: Logic-based shipping cost calculator.
    *   `magic_8_ball.py`: Randomized fortune generator.
    *   `coffee_bot.py`: Multi-step conversational state machine.
    *   `physics_calc.py`: Mathematical utility functions.

### 3. "Bring to Life" Generative Engine
*   **Functionality**: Allows users to drag and drop images (sketches, diagrams, screenshots).
*   **Backend**: Utilizes AI to analyze visual inputs and generate functional, self-contained HTML/CSS/JS micro-apps in real-time.
*   **Preview**: Includes a split-view live previewer with artifact export capabilities.

### 4. Digital Darkroom
*   **Simulation**: Drag-and-drop interface for image files.
*   **Animation**: Simulates the chemical development process of film photography with CSS filters and time-delayed state transitions.

## Technical Stack

*   **Frontend**: React 18, TypeScript, Vite
*   **Styling**: Tailwind CSS, Custom CSS Modules
*   **Typography**: Adobe Fonts (The Seasons, Gemola), Google Fonts (Inter, JetBrains Mono, Bodoni Moda)
*   **AI Integration**: Google GenAI SDK

## Setup & Installation

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Configure Environment**:
    Create a `.env` file in the root directory and add your API key for the generative features:
    ```env
    API_KEY=your_api_key_here
    ```

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```

## License

Private Portfolio - All Rights Reserved.
