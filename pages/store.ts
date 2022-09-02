import { action, makeAutoObservable, makeObservable, observable, runInAction } from "mobx";
import { enableStaticRendering } from "mobx-react";
import { StoreContext, useStore } from "./context";
import { getTracks } from "./typescript/audioplayer/functions";
import { Track } from "./typescript/audioplayer/types";

enableStaticRendering(typeof window === 'undefined')

export class RootStore {
    trackStore: TrackStore;

    constructor() {
        makeAutoObservable(this);

        this.trackStore = new TrackStore(this);
    }

    hydrate(store) {
        if (store.trackStore) {
            this.trackStore.hydrate(store.trackStore);
        }
    }
}

export class TrackStore {
    rootStore: RootStore;

    selectedTrack: Track;

    trackList: Array<Track>;

    constructor(rootStore) {
        makeAutoObservable(this, {}, {autoBind: true});

        this.rootStore = rootStore
    }

    hydrate(data) {
        this.selectedTrack = data._selectedTrack ?? data._selectedTrack;
        this.trackList = data._trackList ?? data._trackList;
    }
}
