import { useState, useEffect } from "react";
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
import style from "../styles/Location.module.css"



export default function Location() {
  const markers = 
    {
      id: 1,
      name: "Hotel de prueba",
      position: { lat: -38.00213048826891, lng: -57.55647513283969 },
    }

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_MAP_KEY,
  });
  
  const [mapWidth, setMapWidth] = useState("60vw");
  const [mapHeight, setMapHeight] = useState("70vh")

  useEffect(() => {
    const handleResize = () => {
      // Define el ancho del mapa según el tamaño de la ventana
      const newWidth = window.innerWidth >= 768 ? "60vw" : "100vw";
      setMapWidth(newWidth);

      const newHeight = window.innerWidth >= 768 ? "70vh" : "100vh"
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
        <h3>Cómo llegar</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius impedit molestiae repellat amet sit at itaque? Porro blanditiis labore, nulla eveniet animi quis nobis quo minus, ad asperiores hic minima.</p>
      </div>
      <div /* style={{ height: "90vh", width: "100%" }} */ className={style.WrapperMap}>
        {isLoaded ? (
          <GoogleMap
            center={{ lat: -38.00213048826891, lng: -57.55647513283969 }}
            zoom={12}
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
            <h1>Cargando...</h1>
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
