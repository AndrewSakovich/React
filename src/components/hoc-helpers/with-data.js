import React, { Component } from "react";

import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const withData = (View, getData) => {
  return class extends Component {
    state = {
      data: null,
    };

    componentDidMount() {
      getData().then((dataObj) => {
        this.setState({
          data: dataObj.data,
        });
      });
    }

    render() {
      const { data } = this.state;

      if (!data) {
        return <Spinner />;
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
