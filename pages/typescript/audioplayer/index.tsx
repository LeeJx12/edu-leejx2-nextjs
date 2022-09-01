import { AudioList, AudioPlayer } from './components'
import { Track } from './types';

import styles from '../../../styles/Typescript.module.css'
import { getTracks } from './functions';
import { TrackStore } from './store';

export default function Index(): JSX.Element {
    getTracks()
        .then(trackList => {
            TrackStore.setTrackList(trackList);
        })

    return (
        <>
            <div className="container-fluid p-0">
                <AudioList/>
                <AudioPlayer/>
            </div>
        </>
    )
}