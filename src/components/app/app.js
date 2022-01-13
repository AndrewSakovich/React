import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';
import Row from '../row';

import { PeoplePage, PlanetPage, StarshipsPage } from '../pages';

import { SwapiserviseProvaider } from '../swapi-service-context';

import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList,
} from '../sw-components';

import './app.css';

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
  };

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <ErrorBoundry>
        <SwapiserviseProvaider value={this.swapiService}>
          <div className='stardb-app'>
            <Header />
            {planet}
            <PeoplePage />
            <PlanetPage />
            <StarshipsPage />
          </div>
        </SwapiserviseProvaider>
      </ErrorBoundry>
    );
  }
}
