import { FC } from "react";

type TCardProps = {
  city?: string;
  temperature?: string;
}

export const Card: FC<TCardProps> = ({ city, temperature }) => (
  <div className="small-card">
    <span className="small-card__city">{city}</span>
    <span className="small-card__temperature">{temperature && temperature > '0' ? '+' + temperature : temperature}°</span>
    <span className="icon icon--strips-small" />
  </div>
);