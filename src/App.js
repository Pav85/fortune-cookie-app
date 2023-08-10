import React from "react";
import axios from "axios";

import "./App.css";

class App extends React.Component {
  state = {
    advice: "",
  };

  componentDidMount() {
    console.log("Component mounted");
  }

  fetchAdvice = () => {
    axios.get("https://api.adviceslip.com/advice");
  };

  render() {
    return <h1>Fortune cookie app</h1>;
  }
}

export default App;
