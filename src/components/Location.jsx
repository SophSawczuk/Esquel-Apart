import { useState, useEffect } from "react";
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
import style from "../styles/Location.module.css"
import Loader from 'react-loaders'



export default function Location() {
  const markers = 
    {
      id: 1,
      name: "Esquel Apart",
      position: { lat: -42.9070596, lng: -71.306424 },
    }

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_MAP_KEY,
  });
  
  const [mapWidth, setMapWidth] = useState("60vw");
  const [mapHeight, setMapHeight] = useState("100vh")

  useEffect(() => {
    const handleResize = () => {
      // Define el ancho del mapa según el tamaño de la ventana
      const newWidth = window.innerWidth >= 768 ? "auto" : "100vw";
      setMapWidth(newWidth);

      const newHeight = window.innerWidth >= 768 ? "90vh" : "100vh"
      setMapHeight(newHeight)
    };
    handleResize()

    // Agrega un event listener para detectar cambios en el tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Limpia el event listener al desmontar el componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={style.Container}>
      <div className={style.WrapperInfo}>
        <h3>Ubicación</h3>
        <p>Nuestro alojamiento está ubicado en <b>Almafuerte 2349, Esquel, Chubut, Argentina</b>, en un entorno tranquilo y a poca distancia de algunos de los principales atractivos de la región. Nos encontramos cerca de la Laguna La Zeta, el Centro de Esquí La Hoya, y del Parque Nacional Los Alerces, reconocido por su belleza natural y su increíble biodiversidad. A solo minutos del centro, tendrás acceso rápido a restaurantes, tiendas y servicios locales.</p>
      </div>
      <div /* style={{ height: "90vh", width: "100%" }} */ className={style.WrapperMap}>
        {isLoaded ? (
          <GoogleMap
            center={{ lat: -42.9070596, lng: -71.306424 }}
            zoom={14}
            mapContainerStyle={{ width: mapWidth, height: mapHeight }}
          >
            <MarkerF
              key={markers.id}
              position={markers.position}
            >
              <InfoWindowF position={markers.position}>
                <div>
                  <p>{markers.name}</p>
                </div>
              </InfoWindowF>
            </MarkerF>
          </GoogleMap>
        ) : 
          <div> 
            {/* <h1>Cargando mapa...</h1> */}
            <Loader type="ball-pulse" />
          </div>
          
          }
      </div>
    </div>
  );
}




/* "use client";

import { useState, useEffect } from "react"
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow,
} from "@vis.gl/react-google-maps"
import style from "../styles/Location.module.css"

//-38.002071, -57.556443



export default function Location() {
    const position = {lat: -38.002071, lng: -57.556443}
    const [open, setOpen] = useState(false)

    const a = import.meta.env.VITE_MAP_ID

    console.log(import.meta.env.VITE_MAP_KEY)
    console.log(import.meta.env.VITE_MAP_ID)

    return (
        <APIProvider apiKey={import.meta.env.VITE_MAP_KEY}>
            <div className={style.WrapperInfo}>
                <h3>Cómo llegar</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius impedit molestiae repellat amet sit at itaque? Porro blanditiis labore, nulla eveniet animi quis nobis quo minus, ad asperiores hic minima.</p>
            </div>
            <div style={{ height: "70vh", width: "60vw"}} className={style.WrapperMap}>
                <Map 
                    defaultZoomoom={12} 
                    center={position} 
                    mapId={import.meta.env.VITE_MAP_ID}
                >
                    <AdvancedMarker position={position} onClick={() => setOpen(true)}>
                    </AdvancedMarker>
                    {open &&
                            <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
                                <p>Ubicación de Hotel de Pureba</p>
                            </InfoWindow>
                        }
                </Map>
            </div>
        </APIProvider>
    )
} */
