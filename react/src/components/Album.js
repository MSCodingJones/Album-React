import { useState, useEffect } from "react"
import axios from "axios"

import AlbumCard from "./AlbumCard"

const Albums =()=> {

    const [ albums, setAlbums ] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3005/api/album')
            .then(res =>{
                setAlbums(res.data)
            })
    }, [])

    console.log(albums)

    const albumComponents = albums.map(album => {

        let artist
        let path
        let pathId

        if (album.band =='') {
            if (album.alias == '') {
                artist = `${album.fname} ${album.lname}`
            } else {
                artist = `${album.alias}`
            }
            path = 'artist'
            pathId = album.artist_id
        } else {
            artist = `${album.band}`
            path= 'band'
            pathId = album.band_id
        } 
        
        return <AlbumCard
            key={album.album_id}
            id={album.album_id}
            title={album.title}
            artist={artist}
            imgUrl={album.album_cover}
            label={album.label}
            yrReleased={album.yr_released}
            path={`/${path}`}
            pathID={pathId}
         />
    })


    return (
        <main className="main" id="albumsMain">
            <div className="container">
                <h2>albums</h2>
                <div className="row rows-cols-1 row-cols-md-4 g-4">
                { albumComponents }
                </div>
            </div>
        </main>
        
    )
}

export default Albums