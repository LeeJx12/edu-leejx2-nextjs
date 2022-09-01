import { observable } from "mobx";
import { Track } from "./types";

export const TrackStore = observable({
    _selectedTrack: undefined,
    _trackList: [],

    setTrackList(trackList: Array<Track>): void {
        this._trackList = trackList;
    },

    getTrackList(): Array<Track> {
        return this._trackList;
    },

    setSelectedTrack(track: Track): void {
        this._selectedTrack = track;
    },

    getSelectedTrack(): Track {
        return this._selectedTrack;
    },
})