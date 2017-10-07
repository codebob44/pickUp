// Include React as a dependency
var React = require("react");

// Include the Helper (for the saved recall)
var helpers = require("../utils/helpers");

// Create the Driver component
class Status extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron my-4">
            <h2> Request Status: Pending <p id = "isPassengerPicked"> </p> </h2>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title"><strong>Your Driver's Information</strong></h3>
                    </div>
                    <div className="panel-body">
                    <form>
                        <table className="table table-bordered table-inverse">
                            <thead>
                                <tr className="status-rows">
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    <th>Gender</th>
                                    <th>Make</th>
                                    <th>Model</th>
                                    <th>Color</th>
                                </tr>
                            </thead>
                            <tbody id="displayDriverInfo">
                            </tbody>
                        </table>
                       </form> 
                    </div>
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
