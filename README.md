# My Potato App

Welcome to **My Potato App**, an application dedicated to everything about potatoes! This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of Contents
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Running the App](#running-the-app)
- [Running Tests](#running-tests)
- [Building the App](#building-the-app)
- [Deployment](#deployment)
- [Advanced Configuration](#advanced-configuration)
- [Learn More](#learn-more)
- [Code Splitting](#code-splitting)
- [Analyzing the Bundle Size](#analyzing-the-bundle-size)
- [Making a Progressive Web App](#making-a-progressive-web-app)
- [Troubleshooting](#troubleshooting)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you're on your own.

## Project Structure

The project's directory structure is as follows:
my-potato-app/
├── public/
│ ├── images/
│ │ └── potato_cute.jpg
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── CustomButton.js
│ │ ├── NewPage.js
│ │ └── ShoppingList.js
│ ├── App.js
│ ├── App.css
│ └── ...
├── .dockerignore
├── .gitignore
├── Dockerfile
├── package.json
├── README.md
└── ...


## Running the App

To run the app locally:

1. Ensure you are in the project directory.
2. Run `npm start`.
3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Running Tests

To launch the test runner:

1. Run `npm test`.
2. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Building the App

To build the app for production:

1. Run `npm run build`.
2. The production-ready build files will be in the `build` folder.

## Deployment

### GitHub Pages

This project uses `gh-pages` for deployment. To deploy the app:

1. Ensure the `homepage` field in `package.json` is set to `"https://YOUR_USERNAME.github.io/REPOSITORY_NAME"`.
2. Run `npm run deploy`.

Your app should be accessible at `https://YOUR_USERNAME.github.io/REPOSITORY_NAME`.

### Docker

This project includes a Dockerfile for containerization. To build and run the Docker container:

1. Build the Docker image: `docker build -t my-potato-app .`
2. Run the Docker container: `docker run -p 3000:3000 my-potato-app`

## Advanced Configuration

For advanced configuration, refer to the [Create React App documentation](https://facebook.github.io/create-react-app/docs/advanced-configuration).

## Learn More

To learn more about React and Create React App:

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)

### Code Splitting

Learn more about code splitting [here](https://facebook.github.io/create-react-app/docs/code-splitting).

### Analyzing the Bundle Size

Learn more about analyzing the bundle size [here](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size).

### Making a Progressive Web App

Learn more about making a Progressive Web App [here](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app).

### Troubleshooting

For troubleshooting common issues, refer to the [Create React App troubleshooting guide](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify).

