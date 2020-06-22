import React from "react";
class Hide extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button>Toggle</button>
        {this.props.text}
      </div>
    );
  }
}

export default Hide;
