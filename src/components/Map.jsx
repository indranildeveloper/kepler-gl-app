import KeplerGl from "@kepler.gl/components";

const Map = () => {
  return (
    <KeplerGl
      id="map-id"
      mapboxApiAccessToken={import.meta.env.VITE_APP_MAPBOX_API_KEY}
      width={1896}
      height={960}
    />
  );
};

export default Map;
