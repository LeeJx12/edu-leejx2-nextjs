import { action, makeAutoObservable, makeObservable, observable, runInAction } from "mobx";
import { enableStaticRendering } from "mobx-react";
import { StoreContext, useStore } from "./context";
import { getTracks } from "./functions";
import { Track } from "./types";

enableStaticRendering(typeof window === 'undefined')

export class TrackStore {
    selectedTrack: Track;

    trackList: Array<Track>;

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true});
    }

    hydrate(data) {
        this.selectedTrack = data._selectedTrack;
        this.trackList = data._trackList;
    }
}
