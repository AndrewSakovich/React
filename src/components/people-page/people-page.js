import React, { Component } from 'react';

<<<<<<< HEAD
import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ErrorBoundry from '../error-boundry';

import './people-page.css';
=======
import ItemList from "../item-list/item-list";
// import PersonDetails from "../item-details/person-details";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swapi-service";
import "./people-page.css";
import Row from "../row/row";



// const Row = ({ left, right }) => {
//   return (
//     <div className="row mb2">
//       <div className="col-md-6">{left}</div>
//       <div className="col-md-6">{right}</div>
//     </div>
//   );
// };
>>>>>>> ea5c183 (errrrr)

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 11
  };

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople.data}>

        {(i) => (
          `${i.name} (${i.birthYear})`
        )}

      </ItemList>
    );

    const personDetails = (
      <ErrorBoundry>
        <ItemDetails itemId={this.state.selectedPerson} />
      </ErrorBoundry>
    );

    return (
      <Row left={itemList} right={personDetails} />
    );
  }
}
