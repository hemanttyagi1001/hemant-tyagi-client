import { useEffect, useRef } from 'react';

const LATITUDE = 29.472357;
const LONGITUDE = 77.701224;
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export default function MapSection() {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (mapInstance.current) return;
    if (!GOOGLE_MAPS_API_KEY) {
      console.warn('VITE_GOOGLE_MAPS_API_KEY is not set — map will not load.');
      return;
    }

    const initMap = () => {
      if (!window.google || !mapRef.current) return;

      const position = { lat: LATITUDE, lng: LONGITUDE };

      mapInstance.current = new window.google.maps.Map(mapRef.current, {
        center: position,
        zoom: 12,
        scrollwheel: false,
        styles: [],
      });

      new window.google.maps.Marker({
        position,
        map: mapInstance.current,
      });
    };

    if (window.google && window.google.maps) {
      initMap();
    } else {
      const existing = document.querySelector('script[src*="maps.googleapis.com"]');
      if (!existing) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`;
        script.async = true;
        script.defer = true;
        script.onload = initMap;
        document.head.appendChild(script);
      } else {
        existing.addEventListener('load', initMap);
      }
    }
  }, []);

  return (
    <div
      ref={mapRef}
      id="map1"
      className="gmap w-full h-[350px] rounded-lg shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition ease-out duration-[160ms]"
      data-latitude={LATITUDE}
      data-longitude={LONGITUDE}
    />
  );
}
