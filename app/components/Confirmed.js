// Include React as a dependency
var React = require("react");

// Include the Helper (for the saved recall)
var helpers = require("../utils/helpers");

// Create the Driver component
class Confirmed extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="jumbotron my-4">
          <form>
              <table class="table table-bordered table-inverse">
                  <thead>
                      <tr>
                          <h1> Passengers confirmed by you </h1>
                          <th>#</th>
                          <th>Name</th>
                          <th>Gender</th>
                          <th>Date</th>
                          <th>Time</th>
                          <th>Flight</th>
                          <th>Cancel Pickup</th>
                          <th>Notes</th>
                      </tr>
                  </thead>
                  <tbody id="displayPickedTravelersInfo">
                  </tbody>
              </table>                   
          </form>
        </div>
      </div>
    );
  }
}
// Export the module back to the route
module.exports = Confirmed;
