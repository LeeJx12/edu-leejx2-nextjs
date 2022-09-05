import { Track } from "./types";

export function getTracks(): Promise<Array<Track>> {
    return new Promise((resolve, reject) => {
        fetch(`${process.env.NEXT_PUBLIC_AUDIO_SERVER_URL}/audio`)
        .then(response => response.json())
        .then(resolve)
        .catch(reject);    
    })
}

export function setTrack(track: Track): void {

}