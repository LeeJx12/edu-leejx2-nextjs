
export type Track = {
    _trackId: string,

    _album: string,

    _genre: Array<string>,

    _title: string,

    _artist: string,

    _artists: Array<string>,

    _year: number,

    _duration: number,

    _listItem: JSX.Element
}

export type Player = {
    _track: Track,

    _isPlaying: boolean,

    _totalLength: number,

    _current: number,
}