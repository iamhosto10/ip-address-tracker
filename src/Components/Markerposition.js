import React, { useEffect, useMemo } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import icon from "../icon";

function Markerposition({ address }) {
  const pos = useMemo(() => {
    return [address.location.lat, address.location.lng];
  }, [address.location.lat, address.location.lng]);
  const map = useMap();

  useEffect(() => {
    map.flyTo(pos, 13, {
      animate: true,
    });
  }, [map, pos]);

  return (
    <>
      <Marker position={pos} icon={icon}>
        <Popup>
          {/* A pretty CSS3 popup. <br /> Easily customizable. */}
          {address && address.location.city},<br />
          {address && address.location.region}
        </Popup>
      </Marker>
    </>
  );
}

export default Markerposition;
