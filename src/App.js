//import React
import React from "react";
import axios from "axios";

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

  render() {
    return (
      <>
        City Explorer
        <button onClick={this.handleGetCities}>Explore!</button>
      </>
    );
  }
}

//export
export default App;
