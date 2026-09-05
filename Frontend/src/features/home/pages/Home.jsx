import React from 'react'
import Player from '../components/Player'
import { useSong } from '../hooks/useSong'
import FaceExpression from '../../expression/components/FaceExpression'

const Home = () => {

    const { handleGetSong } = useSong()

    return (
        <>
            <FaceExpression
                onClick={(expression) => { handleGetSong({ mood: expression }) }}
            />
            <Player />
        </>
    )
}

export default Home