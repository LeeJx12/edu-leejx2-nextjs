import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { Track } from './types';

import styles from '../../../styles/Typescript.module.css'
import { TrackStore } from '../../store';
import { action, flow, observable, runInAction } from 'mobx';
import { StoreContext, useStore } from '../../context';
import { getTracks } from './functions';
import { Observer } from 'mobx-react';

export function AudioList(): JSX.Element {
    const { trackStore } = useStore();

    const _trackList = trackStore.trackList;

    getTracks()
        .then(trackList => trackStore.trackList = trackList);

    return (
        <Observer>
        {() => (
            <div className={`col ${styles.audio_list}`}>
                <ul className="list-group">
                    {
                        trackStore.trackList && trackStore.trackList.length > 0 && trackStore.trackList.map((track, idx) => {
                            return (
                                <li 
                                    key={track._trackId} 
                                    className={`list-group-item ${styles['list-group-item']}`}
                                    onClick={event => {
                                        const target = event.currentTarget.closest('li');
                                        if (!target.classList.contains('active')) {
                                            target.classList.add('active');

                                            trackStore.selectedTrack = track;
                                        }
                                    }}
                                >
                                    <img className={`cur_p rounded img-thumbnail ${styles['img-thumbnail']}`} src={`${process.env.NEXT_PUBLIC_AUDIO_SERVER_URL}/audio/pic/${track._trackId}`} />
                                    <span className={`cur_p ${styles['list-item-title']}`}>{track._title}</span>
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
            </div>
        )}
        </Observer>
    );
}

export function AudioPlayer(props: {  }): JSX.Element {
    const { trackStore } = useStore();
    const track = trackStore.selectedTrack;

    return (
        <Observer>
        {() => (
            <div className="col-5">
                <img src={`${process.env.NEXT_PUBLIC_AUDIO_SERVER_URL}/audio/pic/${track?._trackId}`} />
                <div>
                    {track?._title}
                </div>
                <audio id="player"></audio>
            </div>
        )}
        </Observer>
    );
}