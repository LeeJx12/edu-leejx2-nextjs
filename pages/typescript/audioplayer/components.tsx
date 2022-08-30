import React, { Dispatch, SetStateAction } from 'react';
import { Track } from './types';
import { RecoilState, useRecoilState, useRecoilValue } from 'node_modules/recoil/index';

import styles from '../../../styles/Typescript.module.css'

export function AudioList(props: { _trackState: RecoilState<Track> }): JSX.Element {
    //TODO: getTracks 추가할것

    const { _trackState } = props;
    const [ setTrack ] = useRecoilState(_trackState);

    return (
        <>

        </>
    );
}

export function AudioPlayer(props: { _trackState: RecoilState<Track> }): JSX.Element {
    const { _trackState } = props;
    const track = useRecoilValue(_trackState);

    return (
        <>
            <audio id="player"></audio>
        </>
    );
}