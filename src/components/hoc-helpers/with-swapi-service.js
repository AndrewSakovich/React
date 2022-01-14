import React from 'react';
import { SwapiserviceConsumer } from '../swapi-service-context';

const withSwapiService = (mapMethodsToProps) => (Wraped) => {
  return (props) => {
    return (
      <SwapiserviceConsumer>
        {(swapiService) => {
          const serviceProps = mapMethodsToProps(swapiService);
          return <Wraped {...props} {...serviceProps} />;
        }}
      </SwapiserviceConsumer>
    );
  };
};

export default withSwapiService;
