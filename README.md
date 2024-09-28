# Netsuite React App Boiler Plate

This is a boiler plate for a Netsuite React App. It is a simple example of how to create a React App that can be deployed to Netsuite.

## Configuration
Webpack is used for bundling all the files together to make one HTML file that can be loaded in a Suitelet to display the React App.

### Webpack
- Change the html output file name in the plugins section of the webpack.config.js file. This will be used to search for the html file in the Suitelet.
- Adjust the output path in the webpack.config.js file to match the path of the project that will be stored in the FileCabinet.
