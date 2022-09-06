import { observable } from 'mobx';
import React from 'react';
import styles from '../../../styles/Typescript.module.css'
import { initializeStore, StoreContext, useStore } from '../../context';
import { getTracks } from './functions';
import { TrackStore } from '../../store';
import { AudioList, AudioPlayerPane } from './components';

export default function Index(): JSX.Element {
    return (
        <div className="container-fluid p-0">
            <div className="row">
                <AudioList/>
                <AudioPlayerPane/>
            </div>
        </div>
    )
}