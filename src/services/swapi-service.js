export default class SwapiService {
  _apiBase = `https://swapi.dev/api`;

  getResource = async (url) => {
    try {
      const response = await fetch(`${this._apiBase}${url}`);

      if (!response.ok) {
        alert(`Could not fetch ${url} , recieved ${response.status}`);
        return {
          isError: true,
          data: null,
        };
      }

      const resJson = await response.json();

      return {
        isError: false,
        data: resJson,
      };
    } catch (error) {
      return {
        isError: true,
        data: null,
      };
    }
  };

  getAllPeople = async () => {
    const resObj = await this.getResource(`/people/`);

    return {
      ...resObj,
      data: resObj.data?.results.map(this._transformPerson) ?? null,
    };
  };

  getPerson = async (id) => {
    const resObj = await this.getResource(`/people/${id}`);
    
    return {
      ...resObj,
      data: this._transformPerson(resObj.data),
    };
  };

  getAllPlanets = async () => {
    const resObj = await this.getResource(`/planets/`);

    return {
      ...resObj,
      data: resObj.data?.results.map(this._transformPlanet) ?? null,
    };
  };

  getPlanet = async (id) => {
    const resObj = await this.getResource(`/planets/${id}`);

    return {
      ...resObj,
      data: this._transformPlanet(resObj.data),
    };
  };

  getAllStarships = async () => {
    const resObj = await this.getResource(`/starships/`);

    return {
      ...resObj,
      data: resObj.data?.results.map(this._transformStarship) ?? null,
    };
  };

  getStarship = async (id) => {
    const resObj = await this.getResource(`/starships/${id}`);

    return {
      ...resObj,
      data: this._transformStarship(resObj.data),
    };
  };

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  _transformPlanet = (planet) => {
    if (!planet) {
      return null;
    }

    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diametr: planet.diameter,
    };
  };

  _transformStarship = (starship) => {
    if (!starship) {
      return null;
    }

    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCreadits: starship.costInCreadits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity,
    };
  };

  _transformPerson = (person) => {
    if (!person) {
      return null;
    }

    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor,
    };
  };
}

// fetch("https://swapi.dev/api/people/1/").then((resObj) => {
//   return resObj.json()
// }).then((body) => {
//   console.log(body)
// })
