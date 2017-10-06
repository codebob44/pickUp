// Include React as a dependency
var React = require("react");
var axios = require("axios");
// Include the Helper (for the saved recall)
var helpers = require("../utils/helpers");

// Create the Driver component
class Confirmed extends React.Component {
   constructor(props) {
    super(props);

//     // const passengerData = [{"name": "Marco", "flightNumber": "22" }, {"name": "Marco", "flightNumber": "22" }];
    const passengerData = [];
    console.log(passengerData);
   
    this.state = { passengerData };
}


  componentWillMount(){
    var _this = this;
    axios.get('/pickedPassenger').then((response) => {
      console.log(response);
      _this.setState ({ passengerData: response.data });
  
    })

  }

  getPickPassengers(){
    var _this = this;
    axios.get('/pickedPassenger').then((response) => {
      console.log(response);
      _this.setState ({ passengerData: response.data });
  
    })
  }

  handleunpickupConfirm(event, id){
    event.preventDefault();
    console.log("insidehandleunpickup");
    helpers.unpickupConfirm({passengerId: id}, (response)=>{
        console.log("insidecallback");
        console.log(response); 
        this.getPickPassengers();
        
    })
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron my-4">
         <h1> Passengers confirmed by you </h1>
          <form>
              <table className="table table-bordered table-inverse">
                  <thead>
                      <tr>                    
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
                    {this.state.passengerData.map((object, i)=>{
                        return <tr key={i.toString()}>                    
                          <td>{i+1}</td>
                          <td>{object.name}</td>
                          <td>{object.gender}</td>
                          <td>{object.arrivalDate}</td>
                          <td>{object.arrivalTime}</td>
                          <td>{object.flightNumber}</td>
                          <td><button onClick={(event)=> {event.preventDefault(); this.handleunpickupConfirm(event, object._id)}} className="btn btn-success btn" id="savePickupRequest"><span className="glyphicon glyphicon-off"></span>Submit Request</button></td>
                          <td>{object.notes}</td>
                      </tr>;
                    })}
                  
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
