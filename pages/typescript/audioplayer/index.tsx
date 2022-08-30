import { AudioList, AudioPlayer } from './components'
import { Track } from './types';
import { RecoilRoot, atom } from 'node_modules/recoil/index';

import styles from '../../../styles/Typescript.module.css'

export default function Index(): JSX.Element {
    const trackState = atom({
        key: 'selectedTrack',
        default: undefined as Track
    });

    return (
        <>
            <RecoilRoot>
                <div className="container-fluid p-0">
                    <AudioList _trackState={trackState}/>
                    <AudioPlayer _trackState={trackState}/>
                </div>
            </RecoilRoot>
        </>
    )
}