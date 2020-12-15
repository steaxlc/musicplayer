import React from 'react';

import LibrarySong from './LibrarySong';

const Library = ({songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus}) => {
    return (
        <div className={`library ${libraryStatus ? 'active-library': ''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song => (
                    <LibrarySong setSongs={setSongs} songs={songs} isPlaying={isPlaying} audioRef={audioRef} setCurrentSong={setCurrentSong} key={song.id} id={song.id} song={song} />
                ))}
            </div>
        </div>
    )
}

export default Library;