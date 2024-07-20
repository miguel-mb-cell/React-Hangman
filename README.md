# Hangman React Game

#### Video Demo:  [React Hangman](https://youtu.be/-gC7o_qOGGc)
#### Description:

Welcome to the Hangman game created in React! This game was created as a way to explore and study React and web libraries. It offers an interactive and fun experience with various animations and 3D effects. Click [here](https://hangman-react-pi.vercel.app/) to check it out!

## Files
The project is based on the use of React components, organized as follows:

### `node_modules`
This directory includes all the packages, libraries, frameworks, dependencies, and files required for the project.

### `public`
This directory contains essential static files for the application:
- **Graphics Language Transmission Format (GLTF)** files for 3D models.
- TrueType Font (TTF) files for custom fonts.
- Icon files for the application.
- `manifest.json` for app metadata.
- `index.html`: main HTML file serving as the entry point for the React application.

### `src/components`
This folder houses all React components used in the application:

#### `Container`
The `Container` component manages the core logic and state for the Hangman game in React. It orchestrates child components such as `Letters`, `Cues`, `Drawing`, `Option`, and `Result`, each accompanied by their respective CSS file (`container.css`).

#### `Cues`
The `Cues` component is responsible for rendering and managing hints or cues during the Hangman game. It imports styles from `cues.css`. The component displays guessed letters and underscores (`_`) for unknown letters in the word, updates wrong guesses (`props.badguess`), and provides visual feedback for game progress.

#### `Drawing`
The `Drawing` component visualizes the Hangman game's drawing and animations. It utilizes `drawing.css` for styling and includes additional visual effects from an external module (`./eyes`). This component dynamically updates the display based on incorrect guesses and guessed letters, enhancing user engagement.

#### `Fireworks`
The `Fireworks` component renders celebratory animated fireworks using CSS animations, adding visual flair to the game's victory state.

#### `Letters`
The `Letters` component manages user inputs for guessing letters in the game. It renders alphabet buttons using the `Tilt` component for visual effects and disables buttons upon click to prevent repeated guesses. The component tracks mistakes, updates displayed cues (`props.cue`), and integrates smoothly with the game's interactive elements.

#### `Navbar`
The `Navbar` component builds a responsive navigation menu featuring a hamburger menu toggle from `hamburger-react`. It includes animated icons rendered using `three.js` within `Canvas` components (e.g., Hangman, Snake, Pacman, GitHub), each enhanced with dynamic lighting effects (`OrbitControls`). The component adjusts menu visibility based on device orientation and incorporates custom cursor positioning effects for improved user interaction.

#### `Option`
The `Option` component facilitates the selection of game categories (e.g., Animals, Occupations, Countries). It uses `wordLibrary.js` to fetch word lists, dynamically selects a random word upon category selection, and disables further category choices to enable letter guessing. The component enhances user interaction with a tilt effect (`Tilt` library) on category buttons.

#### `Result`
The `Result` component manages the display of game outcomes (victory or defeat) in the word guessing game. Styled with `result.css`, it visually represents the correct word upon game conclusion and provides responsive messages for different device orientations, ensuring a consistent user experience.

#### `Title`
The `Title` component renders a styled title string using characters split into list items (`<li>` tags). It handles spaces in titles by rendering non-breaking spaces (`&nbsp;`) and utilizes unique keys for efficient rendering optimization.

### `src/Icons`
This folder contains components rendering 3D models using `@react-three/fiber` and `@react-three/drei` libraries. Each component showcases integration of GLTF models with animation capabilities using `useFrame` for continuous updates, enhancing visual appeal within the React environment.

### `src/App.css` & `src/App.js`
These files initialize the Hangman game in React. They include components for the game title, navigation bar, game logic container, and celebratory fireworks effect. The cursor's dynamic position is managed using `useEffect` for mouse interaction.

### `src/index.js`
This file initializes the React application by rendering the `App` component into the root HTML element, initiating the game environment.

### `src/Tilt.js`
This external library adds a tilt effect to interactive components within the application, enhancing user engagement and visual appeal.

### `src/wordLibrary.js`
This file provides word lists categorized as Animals, Occupations, and Countries, used for word selection in the game categories.

## Usage

1. **Starting a Game**:
   - Click on one of the categories: Animals, Countries, or Occupations.
2. **Playing the Game**:
   - Guess letters by clicking on alphabet buttons.
   - Correct guesses reveal letters in the word, while incorrect guesses incrementally complete the Hangman drawing.
3. **Resetting the Game**:
   - Use the reset button or lever to start a new game at any time.

