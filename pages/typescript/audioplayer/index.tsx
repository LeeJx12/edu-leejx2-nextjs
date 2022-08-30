import { AudioList, AudioPlayer } from './components'
import { Track } from './types';
import { RecoilRoot, atom, selector } from 'recoil';

import styles from '../../../styles/Typescript.module.css'
import { getTracks } from './functions';

export default function Index(): JSX.Element {
    fetch(`${process.env.NEXT_PUBLIC_URL}/api/audio`, {
        method: 'POST',
        body: JSON.stringify({
            callType: 'INIT'
        })
    })
    
    let trackState = atom({
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