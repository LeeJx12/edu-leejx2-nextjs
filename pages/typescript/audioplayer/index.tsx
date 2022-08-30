import { AudioList, AudioPlayer } from './components'
import { Track, TrackState } from './types';
import { RecoilRoot, atom } from 'recoil';

import styles from '../../../styles/Typescript.module.css'

export default function Index(): JSX.Element {
    const trackState = atom({
        key: 'trackState',
        default: {
            _selectedTrack: undefined as Track,
            _trackList: [] as Array<Track>
        }
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