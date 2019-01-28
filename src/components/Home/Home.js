import React, {Component} from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
        <div className="w3-opacity">
        <div className="w3-container w3-padding-32" id="projects">
          <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Home</h3>
        </div>
          <div className="w3-row-padding">
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Summer House</div>
                <img src="https://www.w3schools.com/w3images/house5.jpg" alt="House"/>
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Brick House</div>
                <img src="https://www.w3schools.com/w3images/house2.jpg" alt="House"/>
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Renovated</div>
                <img src="https://www.w3schools.com/w3images/house3.jpg" alt="House"/>
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">Barn House</div>
                <img src="https://www.w3schools.com/w3images/house4.jpg" alt="House"/>
              </div>
            </div>
          </div>


      </div>
    );
  }
}

export default Home;