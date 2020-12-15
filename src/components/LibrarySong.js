import React from 'react';
import { playAudio } from './acessories';

const LibrarySong = ({ song, id, songs, setCurrentSong, audioRef, isPlaying,setSongs }) => {
    
    const songSelecthandler = () => {
        const selectedSong = songs.filter((state) => state.id === id);
        setCurrentSong(selectedSong[0]);
        
        const newSongs = songs.map((song) => {
            if (song.id === id) {
                return {
                    ...song, active: true
                }
            } else {
                return {
                    ...song, active: false
                }
            }
        })

        setSongs(newSongs);

        playAudio(isPlaying,audioRef)
    }

    return (
        <div onClick={songSelecthandler} className={`library-song ${song.active ? 'selected' : ""}`}>
            
            <img alt={song.name} src={song.cover} alt=""/>
            <div className="song-description">
            <h3> { song.name}</h3>
            <h4> {song.artist} </h4>
            </div>
        </div>

    );
};

export default LibrarySong;