import React, {useRef, useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons';
import { playAudio } from './acessories';

const Player = ( {currentSong, setSongs, isPlaying, setIsPlaying, audioRef, setSongInfo,songInfo, songs, setCurrentSong} )=> {

    

    useEffect(() => {
        const newSongs = songs.map((song) => {
            if (song.id === currentSong.id) {
                return {
                    ...song, active: true
                }
            } else {
                return {
                    ...song, active: false
                }
            }
        })
        setSongs(newSongs)
    },[currentSong])

    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }

    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    }

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value})
    }

    const skipTrackHandler = (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if (direction === 'skip-foward') {
            setCurrentSong(songs[(currentIndex+1) % songs.length])
        } else {
            if (currentIndex - 1 % songs.length === -1) {
                currentIndex = songs.length;
            }
            setCurrentSong(songs[(currentIndex-1) % songs.length])
        }
        playAudio(isPlaying, audioRef);
    }

    const trackAnim = {
        transform: `translateX(${songInfo.animationPercentage}%)`
    }

    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <div className="track" style={{background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}}>
                <input type="range" min={0} max={songInfo.duration || 0} onChange={dragHandler} value={songInfo.currentTime} />
                <div className="animated-track" style={trackAnim}></div>
                </div>
                
                <p>{ songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" onClick={() => skipTrackHandler('skip-back')} size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon className="play" onClick={playSongHandler} size="2x" icon={isPlaying ? faPause : faPlay  } />
                <FontAwesomeIcon className="skip-foward" onClick={() => skipTrackHandler('skip-foward')} size="2x" icon={faAngleRight}/>
            </div>
            
        </div>

    );
};

export default Player;