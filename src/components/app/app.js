import React from "react";
import SwapiService from "../../services/swapi-service";

export const App = () => {
  const swapi = new SwapiService();

  swapi.getAllPeople().then((people) => {
    people.forEach((p) => {
      console.log(p.name);
    });
  });
  
  return <div></div>;
};
