# Insta-spots

This is the code interface for the **Insta-spots** design, created as a frontend assignment for ALTSCHOOL School of Engineering.

## Overview

**Insta-spots** is a simple web application that mimics a social media platform for sharing and discovering interesting spots. The application allows users to view a profile, browse posts (spots), and interact with a clean, responsive UI.

## Features

- **Profile Section:** View user profile information with avatar, name, and bio. Includes an edit profile modal for updating details.
- **Post Cards:** Browse a grid of spots, each with an image and name. Like interactions are visually represented.
- **Responsive Design:** The UI adapts smoothly across desktop and mobile devices.
- **Accessibility:** Uses ARIA labels and semantic HTML for improved accessibility.
- **Modern Tooling:** Built with React and Vite for fast development and optimized performance.

## Project Structure

```
.
├── public/
│   └── assets/                # Static images and icons (logo, profile, like, edit, etc.)
├── src/
│   ├── components/            # React components (Header, Footer, Profile, Cards, EditProfileModal)
│   ├── json/
│   │   └── posts.json         # Sample posts data
│   ├── App.jsx                # Main app layout
│   ├── App.css                # App-specific styles
│   ├── index.css              # Global styles and font imports
│   └── main.jsx               # React entry point
├── index.html                 # App HTML shell
└── vite.config.js             # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/motuncoded/insta-spots.git
   cd insta-spots
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. **Open the app in your browser:**
   ```
   http://localhost:5173
   ```

## Usage

- Edit your profile by clicking the "Edit Profile" button.
- Add new posts using the "New Post" button (feature can be expanded).
- Browse spots and interact with the UI.

## Technologies Used

- **React** (with functional components and hooks)
- **Vite** (for fast, modern frontend tooling)
- **CSS** (custom styles, responsive design)
- **JavaScript** (ES6+)

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

This project is for educational purposes and does not currently use a license.

---
