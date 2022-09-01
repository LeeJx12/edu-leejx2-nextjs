import React, { Dispatch, SetStateAction } from 'react';
import { Track, TrackState } from './types';

import styles from '../../../styles/Typescript.module.css'
import { getTracks } from './functions';
import { TrackStore } from './store';

let prevTrackList = undefined;

export function AudioList(props: {  }): JSX.Element {
    const _trackList = TrackStore.getTrackList();

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
                <li>
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