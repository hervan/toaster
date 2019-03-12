# React+Typescript Toaster Component

## Requirements

A notification component that can be invoked from a single function call (no setup required), showing a message to the user in a corner of the screen.

`addToast(message, position, type)`

`message` is the content of the notification;

`position` specifies which corner of the screen to show the notification
- top left (`tl`)
- top right (`tr`)
- bottom left (`bl`)
- bottom right (`br`)

`type` is one of `alert`, `info` or `warning`, each with its own unique color.

One requirement I set personally for this component was to make it independent of any internally maintained state - it's not "stateless" since it keeps and queries the state to the HTML elements, but apart from the HTML itself, nothing else must be kept by the component.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
