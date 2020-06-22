let { Multiselect } = ReactWidgets;
let colors = ["orange", "red", "blue", "purple"];

class Example extends React.Component {
  render() {
    let { open } = this.state || {};
    let toggleWidget = () => this.setState({ open: !open });

    return (
      <div>
        <button onClick={toggleWidget}>{open ? "close" : "open"}</button>
        <Multiselect open={open} data={colors} onToggle={() => {}} />
      </div>
    );
  }
}

render(<Example />);
