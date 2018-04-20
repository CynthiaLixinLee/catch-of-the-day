import React from "react";
import { render } from "react-dom";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();
  goToStore = event => {
    event.preventDefault(); // Stop the form from submitting
    const storeName = this.myInput.value.value; // Get the input value
    this.props.history.push(`/store/${storeName}`); // Change the page to the relevant store
  };
  render() {
    return (
      <React.Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter A Store</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store -></button>
        </form>
      </React.Fragment>
    );
  }
}

export default StorePicker;
