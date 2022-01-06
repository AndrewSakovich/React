import React, { Component } from "react";

import "./item-list.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator";

export default class ItemList extends Component {
  state = {
    itemList: null,
    isError: false,
  };

  componentDidMount() {
    const { getData } = this.props;

    getData()
      .then((itemListObj) => {
        this.setState({
          itemList:itemListObj.data,
          isError: itemListObj.isError
        });
      })
;
  }

  renderItems(arr) {
    return arr.map((item) => {
      const { id } = item;

      const label = this.props.children(item);

      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {label}
        </li>
      );
    });
  }

  render() {

    
    const { itemList, isError } = this.state;

    if (isError) {
      return <ErrorIndicator/>
    }


    if (!itemList) {
      return <Spinner />;
    }

   
    const items = this.renderItems(itemList);

    return <ul className="item-list list-group">{items}</ul>;
  }
}
