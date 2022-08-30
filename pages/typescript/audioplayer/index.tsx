import { useState } from 'react'
import { AudioList, AudioPlayer } from './components'
import { Track } from './types';

import styles from '../../../styles/Typescript.module.css'

export default function Index(): JSX.Element {
    const [ track, setTrack ] = useState(undefined as Track);

    return (
        <>
            <div className="container-fluid p-0">
                <AudioList _setTrack={setTrack}/>
                <AudioPlayer _track={track}/>
            </div>
        </>
    )
}