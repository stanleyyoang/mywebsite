import React from "react";
import "../css/App.css";
import Header from "./Header";
import Info from "./Info";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Info />
      </div>
    );
  }
}

export default App;
