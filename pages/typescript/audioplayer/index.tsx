import { AudioList, AudioPlayer } from './components'
import { Track } from './types';

import styles from '../../../styles/Typescript.module.css'
import { getTracks } from './functions';
import { TrackStore } from './store';

export default function Index(): JSX.Element {
    fetch(`${process.env.NEXT_PUBLIC_URL}/api/audio`, {
        method: 'POST',
        body: JSON.stringify({
            callType: 'INIT'
        })
    }).then(() => {
        getTracks()
            .then(trackList => {
                TrackStore.setTrackList(trackList);
            })
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