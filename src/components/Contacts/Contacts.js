import React, {Component} from 'react';
import './Contacts.css';

class Contacts extends Component {
  render() {
    return (
      <div className="w3-container w3-padding-32" id="contact">
        <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Contact</h3>
        <p>Lets get in touch and talk about your next project.</p>
        <div className="w3-large w3-margin-bottom">
          <div><i className="fa fa-map-marker fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Bishkek, KR</div>
          <div><i className="fa fa-phone fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Phone: +00 5555555</div>
          <div><i className="fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Email:
            mail@mail.com</div>
        </div>
        <p>Swing by for a cup of <i className="fa fa-coffee"></i>, or leave me an email!</p>
      </div>
    );
  }
}

export default Contacts;