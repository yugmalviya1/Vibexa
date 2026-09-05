import { createContext } from "react";
import { useState } from "react";

export const SongContext = createContext()

export const SongContextProvider = ({ children }) => {

    const [ song, setSong ] = useState({
        "url": "https://ik.imagekit.io/z7uqdpifg/cohort-2/moodify/songs/PELIGROSA__PELIGROSA_VCH6v5vHB.mp3",
        "posterUrl": "https://ik.imagekit.io/z7uqdpifg/cohort-2/moodify/posters/PELIGROSA__PELIGROSA_BcX5t4huu.jpeg",
        "title": "PELIGROSA",
        "mood": "happy",
    })

    const [ loading, setLoading ] = useState(false)

    return (
        <SongContext.Provider
            value={{ loading, setLoading, song, setSong }}
        >
            {children}
        </SongContext.Provider>
    )

}