import React, { useContext, useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { GeoAltFill } from 'react-bootstrap-icons';
import { IPContext } from './Context';


function Map() {

    const ctx = useContext(IPContext);

    const viewport = {
        longitude: ctx.results.longitude,
        latitude: ctx.results.latitude,
        zoom: 9
    }

    return (
        <div id ="map">
            <ReactMapGL
                {...viewport}
                width="100vw"
                height="100vh"
                mapStyle="mapbox://styles/arnisha34/ckwzdvt65028u15tdq5rc6dxy"
                // onViewportChange={nextViewport => setViewport(nextViewport)}
                mapboxApiAccessToken="pk.eyJ1IjoiYXJuaXNoYTM0IiwiYSI6ImNrd3dxbDh5ejA2bmMydGxhZG8zcDlqaWoifQ.kbAGytrJ2XE2i5oA4SPV2g"
            >
                <GeoAltFill />
                {/* <Marker longitude={viewport.longitude} latitude={viewport.latitude} offsetLeft={-20} offsetTop={-10}>
                    <GeoAltFill />
                </Marker> */}
            </ReactMapGL>
        </div>
    );
}
    
export default Map
