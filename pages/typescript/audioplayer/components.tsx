import React, { Dispatch, SetStateAction } from 'react';
import { Track, TrackState } from './types';
import { RecoilState, useSetRecoilState, useRecoilValue } from 'recoil';

import styles from '../../../styles/Typescript.module.css'
import { getTracks } from './functions';

let prevTrackList = undefined;

export function AudioList(props: { _trackState: RecoilState<TrackState> }): JSX.Element {
    const { _trackState } = props;
    const setTrack = useSetRecoilState(_trackState);

    getTracks()
        .then(trackList => {
            if (prevTrackList !== undefined) return;
            
            console.log(trackList)

            prevTrackList = trackList;

            setTrack({
                _selectedTrack: undefined,
                _trackList: trackList
            })
        })
    .catch(console.error);

    const { _trackList } = useRecoilValue(_trackState);

    return (
        <ul className="list-group">
            {
                _trackList.map((track, idx) => {
                    return (
                        <li key={track._trackId} className="list-group-item">
                            {track._title}
                        </li>
                    )
                })
            }
        </ul>
    );
}

export function AudioPlayer(props: { _trackState: RecoilState<TrackState> }): JSX.Element {
    const { _trackState } = props;
    const track = useRecoilValue(_trackState);

    return (
        <>
            <audio id="player"></audio>
        </>
    );
}