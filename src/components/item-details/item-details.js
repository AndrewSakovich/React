<<<<<<< HEAD
import React, { Component } from 'react';

import ErrorButton from '../error-button/error-button';

import './item-details.css';

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{ item[field] }</span>
    </li>
  );
};

export {
  Record
};

export default class ItemDetails extends Component {

  state = {
    item: null,
    image: null
=======
import React, { Component } from "react";

import "./person-details.css";
import SwapiService from "../../services/swapi-service";
import ErrorButton from "../error-button/error-button";
import ErrorIndicator from "../error-indicator";

export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    item: null,
    isError: false,
>>>>>>> ea5c183 (errrrr)
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
<<<<<<< HEAD
    const { itemId, getData, getImageUrl } = this.props;
=======
    const { itemId, getData } = this.props;
>>>>>>> ea5c183 (errrrr)
    if (!itemId) {
      return;
    }

    getData(itemId)
<<<<<<< HEAD
      .then((resObj) => {
        this.setState({
          item: resObj.data,
          image: getImageUrl(resObj.data)
        });
      });
  }

  render() {

    const { item, image } = this.state;
    if (!item) {
      return <span>Select a item from a list</span>;
    }

    const { name } = item;

    return (
      <div className="item-details card">
        <img className="item-image"
          src={image}
          alt="item"/>
=======
    .then((itemObj) => {
      this.setState({
        item: itemObj.data,
        isError: itemObj.isError,
      });
    });
  }

  render() {
    const { item, isError } = this.state;
    
    if (isError) {
      return <ErrorIndicator />;
    }

    if (!item) {
      return <span>Select a person from a list</span>;
    }

    const { id, name, gender, birthYear, eyeColor } = item;

    return (
      <div className="person-details card">
        <img
          className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt="character"
        />
>>>>>>> ea5c183 (errrrr)

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
<<<<<<< HEAD
            {
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, { item });
              })
            }
=======
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
>>>>>>> ea5c183 (errrrr)
          </ul>
          <ErrorButton />
        </div>
      </div>
    );
  }
}
