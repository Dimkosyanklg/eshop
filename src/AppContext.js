import React from "react";
import { findIndex } from "lodash";

const AppContext = React.createContext(null);

class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { basket: [] };
  }

  addToContext = (value) => {
    this.setState({ basket: [...this.state.basket, value] });
  };

  removeFromContext = (value) => {
    this.setState({
      basket: this.state.basket.filter(
        (element, index) => findIndex(this.state.basket, value) !== index
      ),
    });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          basket: this.state.basket,
          addToContext: this.addToContext,
          removeFromContext: this.removeFromContext,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppContextProvider, AppContext };
