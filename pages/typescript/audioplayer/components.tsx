import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { Track } from './types';

import styles from '../../../styles/Typescript.module.css'
import { TrackStore } from './store';
import { action, flow, observable, runInAction } from 'mobx';
import { StoreContext, useStore } from './context';
import { getTracks } from './functions';

export function App() {
    return (
        <div className="container-fluid p-0">
            <AudioList/>
            <AudioPlayer/>
        </div>
    )
};

export default App;

export function AudioList(): JSX.Element {
    const trackStore = useStore();
    const [ _trackStore, _setTrackStore ] = useState(trackStore);

    const _trackList = _trackStore.trackList;

    getTracks()
        .then(trackList => _trackStore.trackList = trackList)
        .then(() => _setTrackStore(_trackStore));

    return (
        <ul className="list-group">
            {
                _trackList && _trackList.length > 0 && _trackList.map((track, idx) => {
                    return (
                        <li key={track._trackId} className="list-group-item">
                            {track._title}
                        </li>
                    )
                })
            }
            {
                (!_trackList || _trackList.length === 0) &&
                <li key="empty">
                    there is no file!
                </li>
            }
        </ul>
    );
}

export function AudioPlayer(props: {  }): JSX.Element {

    return (
        <>
            <audio id="player"></audio>
        </>
    );
}