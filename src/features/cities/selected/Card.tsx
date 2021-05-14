import { FC } from "react";

type TCardProps = {
  city?: string;
  temperature?: string;
  weather?: string[];
  wind?: {
    direction: string;
    speed: string;
  }
}

export const Card: FC<TCardProps> = ({ city, temperature, wind, weather }) => (
  <div className="big-card">
    <div className="big-card__header">
      <span className="icon icon--strips-big" />
      <span className="big-card__city">{city}</span>
    </div>
    <div className="big-card__content">
      <div className="big-card__content-wrapper">
        <div className="big-card__weather-conditions">
          {weather?.map((item) =>  <span key={city+item} className={`icon icon--${item}`} />)}
        </div>
        <div className="big-card__wind">
          <span className="icon icon--wind" />
          <span className="big-card__wind-info">Ветер {wind?.direction}, {wind?.speed} м/с</span>
        </div>
      </div>
      <span className="big-card__temperature">{temperature && temperature > '0' ? '+' + temperature : temperature}°</span>
    </div>
  </div>
);

