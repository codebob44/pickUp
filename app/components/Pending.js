// Include React as a dependency
var React = require("react");

// Include the Helper (for the saved recall)
var helpers = require("../utils/helpers");

// Create the Driver component
class Pending extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron my-4">
            <h1>Welcome Driver!</h1>
            <form>
                <table className="table table-bordered table-inverse">
                    <thead>
                        <tr>
                            <h1> Passengers to be picked</h1>
                            <th>#</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Flight</th>
                            <th>Confirm Pickup</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody id="displayTravelersInfo">
                    </tbody>
                </table>
            </form>
          </div>
        </div>    
    );
  }
}

// Export the module back to the route
module.exports = Pending;
