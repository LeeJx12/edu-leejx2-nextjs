import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { Track } from './types';

import styles from '../../../styles/Typescript.module.css'
import { TrackStore } from '../../store';
import { action, flow, observable, runInAction } from 'mobx';
import { StoreContext, useStore } from '../../context';
import { getTracks } from './functions';
import { Observer } from 'mobx-react';

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
    const { trackStore } = useStore();

    const _trackList = trackStore.trackList;

    getTracks()
        .then(trackList => trackStore.trackList = trackList);

    //const [ _trackList, _setTrackList ] = useState(trackStore.trackList);

    // useEffect(() => {
    //     getTracks()
    //         .then(trackList => _setTrackList(trackList));
    // }, []);

    return (
        <Observer>
        {() => (
            <ul className="list-group">
                {
                    trackStore.trackList && trackStore.trackList.length > 0 && trackStore.trackList.map((track, idx) => {
                        return (
                            <li key={track._trackId} className="list-group-item">
                                {track._title}
                            </li>
                        )
                    })
                }
                {
                    (!trackStore.trackList || trackStore.trackList.length === 0) &&
                    <li key="empty">
                        there is no file!
                    </li>
                }
            </ul>
        )}
        </Observer>
    );
}

export function AudioPlayer(props: {  }): JSX.Element {

    return (
        <>
            <audio id="player"></audio>
        </>
    );
}