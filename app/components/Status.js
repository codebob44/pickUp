// Include React as a dependency
var React = require("react");

// Include the Helper (for the saved recall)
var helpers = require("../utils/helpers");

// Create the Driver component
class Status extends React.Component {
  render() {
    return (
      <div>
      <h2> Pickup status: <p id = "isPassengerPicked"> </p> </h2>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title"><strong>Your Driver's Information</strong></h3>
                    </div>
                    <div className="panel-body">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    <th>Gender</th>
                                    <th>Make of Car</th>
                                    <th>Type of Car</th>
                                    <th>Color of Car</th>
                                </tr>
                            </thead>
                            <tbody id="displayDriverInfo">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    );
  }
}


// var Status = React.createClass({
//   render: function() {
//     return (
//             <div>
//               <h1>I'll show you the status of your request if you're nice to me.</h1>
//             </div>          
//     );
//   }
// });

// Export the module back to the route
module.exports = Status;
