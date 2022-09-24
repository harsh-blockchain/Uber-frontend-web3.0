import React, { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'



const Map = () => {

    mapboxgl.accessToken = 'pk.eyJ1IjoiaGFyc2hiYXJkaGFuMzM1IiwiYSI6ImNsNnczeG9mNDAwbG0zZG15bmI0YW12ejgifQ.4n_yiJuqvlQG-xt2zZmkjQ'


    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/harshbardhan335/cl8flnwjn000e15lln964nuf8',
            center: [80.042621, 19.441119],
            zoom: 5,

        })
    }, [])

    return (
        <div id='map' className='flex flex-1 h-full w-full' />




    )
}

export default Map