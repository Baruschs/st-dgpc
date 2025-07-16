import React, { useRef, useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './Map.css';

const Map = ({ location }) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) return;
    
    mapRef.current = new maplibregl.Map({
      container: mapContainerRef.current,
      style: 'https://www.mapabase.atdt.gob.mx/style_black_3d_places.json',
      center: location.center,
      zoom: location.zoom,
      
      // --- LÍNEA CLAVE PARA DESACTIVAR LA INTERACCIÓN ---
      interactive: false
    });

    // Opcional: Puedes quitar los controles de navegación si ya no los quieres
    // mapRef.current.addControl(new maplibregl.NavigationControl(), 'top-right');

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []); // El array vacío asegura que se ejecute solo una vez

  useEffect(() => {
    if (!mapRef.current || !location) return;
    
    mapRef.current.flyTo({
      ...location,
      duration: 2000,
      essential: true
    });
  }, [location]);

  return (
    <div className="map-container" ref={mapContainerRef} />
  );
};

export default Map;