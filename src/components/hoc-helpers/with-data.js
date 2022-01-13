import React, { Component } from 'react';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const withData = (View) => {
  return class extends Component {
    state = {
      data: null,
      isError: false,
    };

    componentDidMount() {
      this.props.getData().then((dataObj) => {
        this.setState({
          data: dataObj.data,
          isError: dataObj.isError,
        });
      });
    }

    render() {
      const { data, isError } = this.state;

      if (isError) {
        return <ErrorIndicator />;
      }

      if (!data) {
        return <Spinner />;
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
