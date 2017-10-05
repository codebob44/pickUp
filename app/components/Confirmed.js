// Include React as a dependency
var React = require("react");
var axios = require("axios");
// Include the Helper (for the saved recall)
var helpers = require("../utils/helpers");

// Create the Driver component
class Confirmed extends React.Component {
   constructor(props) {
    super(props);

    const passengerData = [{"name": "Marco", "flightNumber": "22" }, {"name": "Marco", "flightNumber": "22" }];

    // for (let i = 0; i < passengerData.lenght; i++) {
    //     passengerData.push({
    //       id : response.data._id,
    //       name : response.data.name,
    //       gender : response.data.gender,
    //       arrivalDate : response.data.arrivalDate,
    //       arrivalTime : response.data.arrivalTime,
    //       flightNumber : response.data.flightNumber,
    //       note : response.data.note
    //     });
    //}

    this.state = { passengerData };
}

// render() {
//     return (<div>
//     {this.state.passengerData.map((passengerData, index) => (
//         <p key={index}>Hello, {passengerData.name} from {passengerData.country}!</p>
//     ))}
//     </div>);
// }

//    constructor(props) {

//     super(props);

//     this.state = {
//       visible: true,
//       passengerData : {},
//       //isPassenger : false
//     };
//   } 

  // componentDidMount(){
  //   axios.get('/passengerData').then((response) => {
  //     console.log(response);
  //     this.setState({
  //       id : response.data._id,

  //       name : response.data.name,
  //       gender : response.data.gender,
  //       arrivalDate = response.data.arrivalDate,
  //       arrivalTime = response.data.arrivalTime,
  //       flightNumber = response.data.flightNumber,
  //       note = response.data.note,

  //       passenger
  //       travelerId = data[i]._id;
  //       travelerOrder = i + 1;
  //       travelerName = data[i].name
  //       travelerGender = data[i].gender;
  //       travelerDate = data[i].arrivalDate;
  //       travelerTime = data[i].arrivalTime;
  //       travelerFlight = data[i].flightNumber;
  //       travelerNote = data[i].note;
  //       name: response.data,
  //       isPassenger : (response.data.userType === "traveler")
  //     })
  //   })
  // }

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
                    {this.state.passengerData.map(function(object, i){
                        return <tr>                    
                          <td>{object.flightNumber}</td>
                          <td>{object.name}</td>
                          <td>Gender</td>
                          <td>Date</td>
                          <td>Time</td>
                          <td>Flight</td>
                          <td>Cancel Pickup</td>
                          <td>Notes</td>
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
