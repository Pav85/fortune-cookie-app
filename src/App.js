import React from "react";

import "./App.css";

class App extends React.Component {
  state = {
    advice: "",
  };

  componentDidMount() {
    console.log("Component mounted");
  }

  render() {
    return <h1>Fortune cookie app</h1>;
  }
}

export default App;
