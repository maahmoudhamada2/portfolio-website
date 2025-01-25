# Personal Portfolio Website

Welcome to the repository for my **Personal Portfolio Website**! This project is a single-page application (SPA) developed to showcase my skills, experience, and projects. It is designed to provide a clean, responsive, and user-friendly interface while integrating dynamic project data using **MockAPI.io**.

## Features

### 1. **Single-Page Application (SPA)**
- Smooth navigation across sections without page reloads.
- Organized sections: About Me, Skills, Projects, and Contact.

### 2. **Responsive Design**
- Fully adaptable for desktop, tablet, and mobile devices.
- Clean layout ensuring compatibility across screen sizes.

### 3. **Dynamic Project Data**
- Projects are fetched dynamically from **MockAPI.io**, simulating real-world data integration.

### 4. **Modern Styling**
- Styled using **CSS-in-JS** with **Aphrodite** for modular and scoped styling.

### 5. **Testing**
- Unit and integration tests implemented using **Jest** and **React Testing Library**.

### 6. **Tooling**
- Built using **npm** and **Webpack** for efficient dependency management and optimized builds.

---

## Technologies Used

| **Technology**       | **Purpose**                                               |
|-----------------------|-----------------------------------------------------------|
| React.js             | Frontend framework for building dynamic UI components.    |
| Aphrodite            | CSS-in-JS library for scoped and modular component styles.|
| MockAPI.io           | API service to simulate backend data for project details. |
| Jest                 | Testing framework for unit and integration tests.         |
| React Testing Library| Testing library for verifying React components.           |
| npm & Webpack        | Dependency management and project bundling.               |

---

## Installation and Setup

To run this project locally, follow these steps:

### 1. **Clone the Repository**
```bash
https://github.com/maahmoudhamada2/portfolio-website.git
```

### 2. **Navigate to the Project Directory**
```bash
cd portfolio-website
```

### 3. **Install Dependencies**
Ensure you have **Node.js** installed on your system. Then, install the necessary packages using npm:
```bash
npm install
```

### 4. **Run the Application Locally**
Start the development server:
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.

---

## How to Use

1. **Homepage**
   - The homepage provides an overview of your skills and experience.
   - Use the navigation bar to jump between sections.

2. **Projects Section**
   - Dynamic project cards display data fetched from **MockAPI.io**.
   - Each card contains information about individual projects.

3. **Responsive Testing**
   - Resize the browser window to see the design adapt for various devices (desktop, tablet, mobile).

---

## Testing

To run the test suite, use the following command:
```bash
npm test
```
This will execute all tests written with **Jest** and **React Testing Library** to ensure the functionality of components.

---

## Folder Structure

```
portfolio-website/
├── config/
    ├── mockingCSS.js       # Mocking css import styles
├── src/setupTest.js        # Jest test setup file
│   ├── AboutMe/            # AboutMe component and related tests
│   ├── App/                # App component and related configurations
│   ├── ContactMe/          # ContactMe component and related tests
│   ├── Footer/             # Footer component
│   ├── Header/             # Header component and navigation items
│   ├── HeroSection/        # HeroSection component
│   ├── Projects/           # Projects component and related tests
│   ├── ScrollTop/          # ScrollTop component
│   ├── SectionHoc/         # Higher-order component for sections
│   ├── Socials/            # Social media links component
│   ├── assets/             # Static assets like images and icons
│   ├── index.css           # Global CSS styles
│   ├── index.js            # Entry point of the application
│   └── reset.css           # CSS reset styles
├── .babelrc                # Babel configuration
├── .eslintrc.json          # ESLint configuration
├── .gitignore              # Git ignore file
├── README.md               # Project documentation
├── package-lock.json       # npm lock file
├── package.json            # npm dependencies and scripts
└── webpack.config.js       # Webpack configuration

```

---

## Future Enhancements

1. **Deployment:**
   - Host the application using platforms like Netlify or Vercel.

2. **Features:**
   - Add a blog section to display articles and tutorials.
   - Implement a contact form with backend integration.
   - Introduce animations for a more dynamic user experience.

3. **Accessibility:**
   - Improve accessibility features, such as keyboard navigation and screen reader support.

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Contact

For questions or feedback, feel free to reach out:
- **Name:** Mahmoud Hamada
- **Email:** maahmoud.hamada@hotmail.com
- **GitHub:** [https://github.com/maahmoudhamada2](https://github.com/maahmoudhamada2)

Thank you for exploring my project!
