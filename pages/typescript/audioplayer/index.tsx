import { AudioList, AudioPlayer } from './components'
import { Track } from './types';

import styles from '../../../styles/Typescript.module.css'
import { getTracks } from './functions';
import { TrackStore } from './store';
import { Provider } from 'mobx-react';

export default function Index(): JSX.Element {
    TrackStore.hydrate();
    getTracks()
        .then(trackList => {
            TrackStore.setTrackList(trackList);
        })

    return (
        <Provider>
            <div className="container-fluid p-0">
                <AudioList/>
                <AudioPlayer/>
            </div>
        </Provider>
    )
}