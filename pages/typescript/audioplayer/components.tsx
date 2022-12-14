import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { Track } from './types';

import styles from '../../../styles/Typescript.module.css'
import { TrackStore } from '../../store';
import { action, flow, observable, runInAction } from 'mobx';
import { StoreContext, useStore } from '../../context';
import { getTracks } from './functions';
import { Observer } from 'mobx-react';
import { AudioPlayer } from './base';

export function AudioList(): JSX.Element {
    const { trackStore } = useStore();

    getTracks()
        .then(trackList => {
            trackList.forEach((track, idx) => {
                const eventHandler = event => {
                    const target = event.currentTarget.closest('li');
                    if (!target.classList.contains('active')) {
                        target.parentElement.querySelector('li.active')?.classList.remove('active');
                        target.classList.add('active');
    
                        trackStore.selectedTrack = track;
                    }
                };
                track._listItem = AudioListItem(track, eventHandler, idx === 0);
            });

            return trackList;
        })
        .then(trackList => {
            trackStore.trackList = trackList
            trackStore.selectedTrack = trackList[0];
        });

    return (
        <Observer>
        {() => {
            const _trackList = trackStore.trackList;
            return (
                <div className={`${styles.audio_list}`}>
                    <ul className="list-group">
                        {
                            _trackList && _trackList.length > 0 && _trackList.map(track => track._listItem)
                        }
                        {
                            (!_trackList || _trackList.length === 0) &&
                            <li key="empty">
                                there is no file!
                            </li>
                        }
                    </ul>
                </div>
            )
        }}
        </Observer>
    );
}

export function AudioListItem(track: Track, eventHandler: React.MouseEventHandler, isActive: boolean): JSX.Element {
    return (
        <li 
            key={track._trackId} 
            className={`list-group-item ${styles['list-group-item']} ${isActive ? 'active' : ''}`}
            onClick={eventHandler}
        >
            <img className={`cur_p rounded img-thumbnail ${styles['img-thumbnail']}`} src={`${process.env.NEXT_PUBLIC_AUDIO_SERVER_URL}/audio/pic/${track._trackId}`} />
            <span className={`cur_p ${styles['list-item-title']}`}>{track._title}</span>
        </li>
    );
}

export function AudioPlayerPane(): JSX.Element {
    const { trackStore } = useStore();

    return (
        <Observer>
        {() => {
            const track = trackStore.selectedTrack;
            const coverImg = track ? `${process.env.NEXT_PUBLIC_AUDIO_SERVER_URL}/audio/pic/${track?._trackId}` : '';
            return (
                <div className="col-5">
                    <img src={coverImg} />
                    <div>
                        {track?._title || '????????????'}
                    </div>
                    <AudioPlayer trackStore={trackStore}/>
                </div>
            )
        }}
        </Observer>
    );
}