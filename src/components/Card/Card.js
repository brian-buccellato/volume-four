import React from "react";
import "./Card.scss";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        <div className="col s12 m12 l12">
          <div className="card black">
            <div className="card-content amber-text left-align">
              <div className="card-title left-align">
                {this.props.cardTitle}
              </div>
              <div>{this.props.cardContent}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
