//import React
import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

let mapKey = process.env.REACT_APP_MAP_API_KEY;
console.log(mapKey);

//create Component
class App extends React.Component {
  handleGetCities = async () => {
    let result = await axios.get(
      `https://us1.locationiq.com/v1/search?key=${mapKey}&q=new%20orleans&format=json`
    );
    console.log(result);
  };

  //render out Component
  render() {
    return (
      <>
        City Explorer
        <Button onClick={this.handleGetCities}>Explore!</Button>
      </>
    );
  }
}

//export
export default App;
