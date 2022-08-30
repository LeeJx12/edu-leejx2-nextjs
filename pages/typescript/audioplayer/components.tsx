import React, { Dispatch, SetStateAction } from 'react';
import { Track, TrackState } from './types';
import { RecoilState, useRecoilState, useRecoilValue } from 'recoil';

import styles from '../../../styles/Typescript.module.css'

export function AudioList(props: { _trackState: RecoilState<TrackState> }): JSX.Element {
    

    const { _trackState } = props;
    const [ setTrack ] = useRecoilState(_trackState);

    return (
        <>

        </>
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