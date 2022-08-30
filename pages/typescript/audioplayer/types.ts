
export type Track = {
    _trackId: string,

    _trackName: string,

    _trackNo: number,

    _filePath: string,

    _isSelected: boolean,
}

export type Player = {
    _track: Track,

    _isPlaying: boolean,

    _totalLength: number,

    _current: number,
}