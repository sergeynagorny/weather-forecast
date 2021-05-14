import React, {FC, useEffect} from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { $markers, $mapBounds, TMarker } from './model';
import { useStore } from 'effector-react'
import { updateViewportByMapBounds, MAP_INITIAL_VIEWPORT, MAP_CONFIG } from '../../lib/mapbox'

export const Map = () => {
  const markers = useStore($markers);
  const mapBounds = useStore($mapBounds);

  const [viewport, setViewport] = React.useState(MAP_INITIAL_VIEWPORT);

  useEffect(() => {
    setViewport((viewport) => updateViewportByMapBounds(viewport, mapBounds));
  }, [mapBounds])

  return (
    <>
      <ReactMapGL {...viewport} {...MAP_CONFIG} width="100%" height="100vh" onViewportChange={setViewport}>
        {markers.map((marker, index) => <MapMarker {...marker} key={index} />)}
      </ReactMapGL>
    </>
  );
};

const MapMarker: FC<TMarker> = ({latitude, longitude}) => (
  <Marker latitude={latitude} longitude={longitude}>
    <span className="pin pin--temporarily"></span>
  </Marker>
);

