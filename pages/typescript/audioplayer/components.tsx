import React, { Dispatch, SetStateAction } from 'react';
import { Track } from './types';

import styles from '../../../styles/Typescript.module.css'

export function AudioList(props: { _setTrack: React.Dispatch<SetStateAction<Track>> }): JSX.Element {
    return (
        <>

        </>
    );
}

export function AudioPlayer(props: { _track: any }): JSX.Element {
    return (
        <>
            <audio id="player"></audio>
        </>
    );
}