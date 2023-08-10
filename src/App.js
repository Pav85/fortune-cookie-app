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
        console.log(response.data.slip.advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return <h1>Fortune cookie app</h1>;
  }
}

export default App;
