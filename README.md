# VCS System Information
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Create .env file that contains your database setting such as hostname, username, password, database name, and secret key for authentication purpose.

.env.development

```
API_SERVER = http://localhost:8000/api/
SOCKET_SERVER = http://localhost:3001
SECRET_KEY = vocs-si-secret-key
```

.env.production

```
API_SERVER = http://172.16.6.117:8000/api/
SOCKET_SERVER = http://172.16.6.117:3001
SECRET_KEY = vocs-si-secret-key
```

### Installing

Make sure you have Node.js and NPM installed on your computer before proceeding.

1. Clone this repository by opening a terminal/command prompt and running the following command:

   ```bash
   https://github.com/aazzizzz1/vcs-system-information.git
   
2. Enter the project directory::

   ```bash
   cd vcs-system-information

3. Install the project dependencies by running the following command:

   ```bash
   npm install

After all packages installed, place the .env files on this app folder. The directory should be like this

```
├── .env
├── package-lock.json
├── package.json
├── tailwind.config.js
├── gitignore
└── public
    ├── flowbite.css
    ├── flowbite.js
    ├── index.html
    ├── manifest.json
    └── robots.txt
└── src
    ├── __test__
    ├── assets
    ├── components
    ├── layouts
    ├── pages
    ├── routes
    ├── statemanagement
    ├── style
    ├── App.jsx
    ├── index.js
    ├── main.jsx
    └── index.scss

```

## Running the application
### `npm start`

```
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Running test
### `npm test`

```
npm test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Running build
### `npm run build`

```
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Built with

- [React](https://react.dev/) - The library for web and native user interfaces
- [React documentation](https://reactjs.org/) - To learn React
- [Tailwind](https://tailwindcss.com/) - CSS framework
- [Redux](https://redux.js.org/) - State management library
- [JWT](https://jwt.io/) - JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.
- [Socket.IO](https://socket.io//) - Socket.IO is a library that enables low-latency, bidirectional and event-based communication between a client and a server.
- [React JS](https://react.dev/)
* [Version Control](https://en.wikipedia.org/wiki/Version_control)
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Pro Git](https://git-scm.com/book/en/v2)
* [Dev Docs](https://devdocs.io/)
<!-- - [Formik](https://formik.org/) - Library for creating Form elements
- [Yup](https://github.com/jquense/yup) - a schema builder for runtime value parsing and validation -->

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

- - -
© 2023 Abdul Aziz, a 2U, Inc. brand. All Rights Reserved.
