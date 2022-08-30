import { AUDIO_PLAYER_CONSTANTS } from "./constants";
import { Track } from "./types";

export function getTracks(): Promise<Array<Track>> {
    return new Promise((resolve, reject) => {
        fetch(`${process.env.NEXT_PUBLIC_URL}/api/audio`, {
            method: 'POST',
            body: JSON.stringify({
                callType: AUDIO_PLAYER_CONSTANTS.API_CALL_LIST
            })
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            return result
        })
        .then(resolve)
        .catch(reject);    
    })
}

export function setTrack(track: Track): void {

}