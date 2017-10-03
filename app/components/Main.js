// Include React as a dependency
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
// var Link = require("react-router").Link

var Driver = require("../components/Driver");
var Passenger = require("../components/Passenger");

// function Driver(props) {
//   return <h1>Welcome Driver!</h1>;
// }

// function Passenger(props) {
//   return <h1>Welcome Passenger.</h1>;
// }
// We'll create a Greeting component that displays either of these components depending on whether a user is logged in:

// var Main = React.createClass({
function Main(props) {
  const isPassenger = props.isPassenger;
  if (isPassenger) {
    return <Passenger />;
  }
    return <Driver />;
}

// Export the module back to the route
module.exports = Main;



// Export the module back to the route
module.exports = Main;
