import React, {useState} from 'react';
import { fontawesome, FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";



const Nav = ( {libraryStatus, setLibraryStatus}) => {
    const showLibraryHandler = () => {
        setLibraryStatus(!libraryStatus);
    }

    return (
        <div>
            <nav>
                <h1>Waves</h1>
                <button onClick={showLibraryHandler} >
                    Library
                     <FontAwesomeIcon icon={faMusic} />
                </button>
            </nav>
        </div>
    )
}

export default Nav;