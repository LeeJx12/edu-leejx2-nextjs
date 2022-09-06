import { inject, Observer } from "mobx-react";
import { useStore } from "pages/context";
import { TrackStore } from "pages/store";
import React from "react";
import { Track } from "./types";

type Props = {
    trackStore: TrackStore
}

export class AudioPlayer extends React.Component<Props> {

    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any): void {
        //document.querySelector("audio").removeEventListener('loadedmetadata', this.durationHandler);
        document.querySelector("audio").addEventListener('timeupdate', this.timeHandler);
    }

    durationHandler = () => {
        document.querySelector("#duration").innerHTML = this.calculateTime(document.querySelector("audio").duration);
    }

    timeHandler = () => {
        document.querySelector("#duration").innerHTML = this.calculateTime(document.querySelector("audio").currentTime) + ' / ' + this.calculateTime(document.querySelector("audio").duration);
    }

    calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${minutes}:${returnedSeconds}`;
    }

    render() {
        const { trackStore } = this.props;
        const track = trackStore.selectedTrack;
        const src = track?._trackId ? `${process.env.NEXT_PUBLIC_AUDIO_SERVER_URL}/audio/${track?._trackId}` : '';
        return (
            <Observer>
            {() => {
                return (
                    <div>
                        <audio id="player" src={src} controls autoPlay></audio>
                        <div id="duration"></div>
                    </div>
                )
            }}
            </Observer>
        )
    }
}