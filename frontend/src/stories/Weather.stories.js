import React from 'react';
import { storiesOf } from '@storybook/react';
import { Weather } from '../blocks/weather/Weather';

const city = 'Aveiro'
const type = 'Clear'
const description = 'clear sky'
const temperature = 20
const minTemperature = 13.5
const maxTemperature = 18.5
const icon = '02d'
const loading = false

storiesOf('Weather', module)
  .add('default', () => (
    <Weather 
      city={city}
      type={type}
      description={description}
      temperature={temperature}
      minTemperature={minTemperature}
      maxTemperature={maxTemperature}
      icon={icon}
      loading={loading}
    />
  )
)