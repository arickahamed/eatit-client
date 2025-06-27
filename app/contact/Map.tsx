"use client";

import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// eslint-disable-next-line @typescript-eslint/no-explicit-any

const libraries: any = ["places"];
const mapContainerStyle = {
  minWidth: "300px",
  minHeight: "300px",
};

const center = {
  lat: 23.7474, // default latitude
  lng: 90.4002, // default longitude
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries,
  });

  if (loadError) {
    console.log("Error loading Google Maps:", loadError); // This will help catch any issues
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }
  return (
    <main>
      <div className="w-[100%]">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={10}
          center={center}
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
    </main>
  );
};

export default Map;
