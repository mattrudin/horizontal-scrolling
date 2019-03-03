import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="container">
        <nav>
          <span>Home</span>
          <span>Portfolio</span>
          <span>About</span>
        </nav>
        <div className="slider">
          <section>
          <h1>Section One</h1>
          </section>
          <section>
            <h1>Section Two</h1>
          </section>
          <section>
            <h1>Section Three</h1>
          </section>
        </div>
        <footer>
          <span>Copyright 2019 Matt Rudin</span>
        </footer>
      </div>
    );
  }
}

export default App;
