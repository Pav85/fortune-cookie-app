import React from "react";
import axios from "axios";

import "./App.css";

class App extends React.Component {
  state = {
    advice: "",
  };

  componentDidMount() {
    // console.log("Component mounted");
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        console.log(
          "--------------------------------------------------------------------------------------------------------------------"
        );
        console.log(advice);
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return <h1>{this.state.advice}</h1>;
  }
}

export default App;
