import { Component } from "react";

const styles = {
  Screen: {
    padding: '20px',
    backgroundColor: 'grey',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: '40px',
    borderRadius: '10px',
    border: 'black solid 2px'
  }
}

class Screen extends Component {
  render () {
    return (
      <div style={styles.Screen} >
      {this.props.value}
      </div>
    )
  }
}

export default Screen