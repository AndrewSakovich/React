import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';

import ItemDetails, { Record } from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";
import Row from '../row'

import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList
} from '../sw-components';

import './app.css';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true
  };
 
  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;

    const { getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage,
            getPlanetImage,
            getAllPeople,
            getPlanet,
            getAllPlanets } = this.swapiService;

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage} >

        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />

      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}>

        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );

    const planetDetails = (
      <ItemDetails
        itemId={5}
        getData={getPlanet}
        getImageUrl={getPlanetImage}>

        <Record field="name" label="Name" />
        <Record field="population" label="Population" />
        <Record field="diameter" label="Diameter" />
      </ItemDetails>
    )

    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header />
          <Row left = {<PersonList />} right = {personDetails}/>
          <Row left = {<StarshipList />} right = {starshipDetails}/>
          <Row left = {<PlanetList /> } right = {planetDetails}/>
        </div>
      </ErrorBoundry>
    );
  }
}
