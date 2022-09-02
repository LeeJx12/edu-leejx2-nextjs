import { AUDIO_PLAYER_CONSTANTS } from "./constants";
import { Track } from "./types";

export function getTracks(): Promise<Array<any>> {
    return new Promise((resolve, reject) => {
        fetch(`${process.env.NEXT_PUBLIC_AUDIO_SERVER_URL}/list`)
        .then(response => response.json())
        .then(resolve)
        .catch(reject);    
    })
}

export function setTrack(track: Track): void {

}