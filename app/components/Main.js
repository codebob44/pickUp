// Include React as a dependency
var React = require("react");
var Driver = require("../components/Driver");
var Passenger = require("../components/Passenger");

// We'll create a Greeting component that displays either of these components depending on whether a user is logged in:
class Main extends React.Component {
  constructor(props) {

    super(props);
    this.isPassenger = true;
    this.state = {visible: true};
  } 
  render() {

    if (this.isPassenger) {
    return <Passenger />;
  }
    return <Driver />;



    // return (
    //   <div>
	   //    <h1>Welcome react!</h1>
	   //    <Confirmed />
	   //    <Pending />              
    //   </div> 
    // );
  }
}

// var Main = React.createClass({
// function Main(props) {
//   const isPassenger = props.isPassenger;
//   if (isPassenger) {
//     return <Passenger />;
//   }
//     return <Driver />;
// }

// Export the module back to the route
module.exports = Main;



