import { AUDIO_PLAYER_CONSTANTS } from "./constants";
import { Track } from "./types";

export function getTracks(): Promise<any> {
    return new Promise((resolve, reject) => {
        fetch(`${process.env.NEXT_PUBLIC_URL}/api/audio`, {
            method: 'POST',
            body: JSON.stringify({
                callType: AUDIO_PLAYER_CONSTANTS.API_CALL_LIST
            })
        })
        .then(response => resolve(response.json()))
        .catch(reject);    
    })
}

export function setTrack(track: Track): void {

}