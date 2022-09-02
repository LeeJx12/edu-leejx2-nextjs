import { observable } from 'mobx';
import React from 'react';
import styles from '../../../styles/Typescript.module.css'
import App from './components';
import { initializeStore, StoreContext, useStore } from './context';
import { getTracks } from './functions';
import { TrackStore } from './store';

export default function Index(): JSX.Element {
    const trackStore = initializeStore();

    return (
        <StoreContext.Provider value={trackStore}>
            <App></App>
        </StoreContext.Provider>
    )
}