## How this project work
### This is the dark mode before click the toggle css button
https://loquacious-travesseiro-68f5c6.netlify.app
![darkMode](https://user-images.githubusercontent.com/51479761/177051259-b9091d12-8bc6-40de-8217-274de9657569.PNG)

### This is the light mode after click the toggle css button
![LightMode](https://user-images.githubusercontent.com/51479761/177051628-9e99885f-7224-4e83-a4b9-2fc9ef895391.PNG)


# Coding
### This codes can run over Javascript and here.

``` javascript

import React from "react";
import "./App.css";
import smile from './assets/imgs/smile.jpg';


export default class App extends React.Component {
  state = {
    bgcolor: "#696969",
    switchs: true,
    anime:"",
    ctcolor: "#cbd4d9",
    ctborderrd:"20px",
    message:"OFF",
    photoimg: "grayscale(0%)",
  };


  render() {
    return (
      <div className="App" style={{
        backgroundColor: this.state.bgcolor,
        animationName: this.state.anime,
        animationDuration: "5s"
      }}>
        <div className="container" style={{
            backgroundColor:this.state.ctcolor,
            borderRadius:this.state.ctborderrd
        }}>
          
          <img src={smile} alt="" style={{
            filter:this.state.photoimg
          }}/>

          <button onClick={() => {
            if (this.state.switchs) {
              this.setState({
                bgcolor: "white",
                switchs: false,
                anime: "showThis",
                ctcolor: "#001b2b",
                ctborderrd:"50px",
                message:"ON",
                photoimg: "grayscale(100%)"
              });
            }
            else {
              this.setState({
                bgcolor: "#696969",
                switchs: true,
                anime: "showThis",
                ctcolor: "#cbd4d9",
                ctborderrd:"20px",
                message:"OFF",
                photoimg: "grayscale(0%)"
              });
            }
          }}>TOGGLE CSS</button>
          <p style={{
            color:this.state.bgcolor
          }}>{this.state.message}</p>
        </div>
      </div>
    );
  }
}


```


# Getting Started with Create React App

This project was bootstrapped with it's name [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
