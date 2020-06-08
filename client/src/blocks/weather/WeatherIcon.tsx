import React from 'react'
import {
  WiCloud,
  WiDaySunny,
  WiMoonAltNew,
  WiDaySunnyOvercast,
  WiNightAltCloudyHigh,
  WiCloudy,
  WiRainMix,
  WiDayRainMix,
  WiNightAltHail,
  WiDayLightning,
  WiNightAltLightning,
  WiDaySnow,
  WiNightAltSnow,
  WiFog,
  WiNightFog
} from 'react-icons/wi'

interface WeatherIconProps {
  iconCode: string
}

export const WeatherIcon: React.FC<WeatherIconProps> = ({ iconCode }) => {
  let component = <WiCloud />
  switch (iconCode) {
    case '01d':
      component = <WiDaySunny />
      break
    case '01n':
      component = <WiMoonAltNew />
      break
    case '02d':
      component = <WiDaySunnyOvercast />
      break
    case '02n':
      component = <WiNightAltCloudyHigh />
      break
    case '03d':
      component = <WiCloud />
      break
    case '03n':
      component = <WiCloud />
      break
    case '04d':
      component = <WiCloudy />
      break
    case '04n':
      component = <WiCloudy />
      break
    case '09d':
      component = <WiRainMix />
      break
    case '09n':
      component = <WiRainMix />
      break
    case '10d':
      component = <WiDayRainMix />
      break
    case '10n':
      component = <WiNightAltHail />
      break
    case '11d':
      component = <WiDayLightning />
      break
    case '11n':
      component = <WiNightAltLightning />
      break
    case '13d':
      component = <WiDaySnow />
      break
    case '13n':
      component = <WiNightAltSnow />
      break
    case '50d':
      component = <WiFog />
      break
    case '50n':
      component = <WiNightFog />
      break
  }

  return component
}
