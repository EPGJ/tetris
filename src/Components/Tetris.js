import React from 'react'

import Border from './Border'
import Stats from './Stats'
import StartButton from './StartButton'
import {createBorder} from '../Config'

const Tetris = () => {
    
    
    
    
    return(
        <div>
            <Border create={createBorder()}/>
            <aside>
                <div>
                <Stats text="Score"/>
                <Stats text="Rows"/>
                <Stats text="Levels"/>
                </div>
                <StartButton/>
            </aside>

        </div>
    )
}

export default Tetris;