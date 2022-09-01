import { v4 as uuidv4 } from 'uuid';
import { parseFile } from 'music-metadata';

let _trackList = [];
let _trackImgMap = {};

export default function handler(req, res) {
    if ('POST' === req.method) {
        const { callType, fileName = '' } = JSON.parse(req.body);
    
        if ('INIT' === callType) {
            if (_trackList.length !== 0) init(res);
            else res.status(200).send('');
        } else if ('LIST' === callType) {
            res.status(200).json(_trackList);
        }
    } else {
        try {
            res.status(200).send(getPicture(req.query));
        } catch (e) {
            res.status(500).send(e);
        }
    }
}

Array.prototype.toArrString = function() {
    if (this && this.length > 0) {
        this.forEach(item => {
            item.toString('utf8');
        })
    }
    return this;
}

function init(res) {
    const fs = require('fs');
    const audioPath = process.env.NEXT_PUBLIC_AUDIO_PATH;

    fs.readdir(audioPath, (error, fileList) => {
        if (error) {
            console.error(error);
        } else {
            const promiseList = [];
            fileList.forEach(file => {
                promiseList.push(parseFile(`${audioPath}/${file}`))
            })

            Promise.all(promiseList)
                .then(result => {
                    result.forEach(item => {
                        const trackId = uuidv4();
                        const track = {
                            _trackId: trackId,
                            _album: item.common.album.toString('utf8'),
                            _genre: item.common.genre.toArrString(),
                            _title: item.common.title.toString('utf8'),
                            _artist: item.common.artist.toString('utf8'),
                            _artists: item.common.artists.toArrString(),
                            _year: item.common.year,
                            _duration: item.format.duration
                        }

                        _trackList.push(track);
                        _trackImgMap[trackId] = getImage(item.common.picture);
                    })
                })
                .then(() => {
                    console.log(_trackList)
                    console.log('Audio Initialized')
                    res.status(200).send('');
                })
                .catch(e => {
                    console.error(e);
                    res.status(500).send(e);
                });
        }
    });
}

function getPicture(query) {
    const { trackId } = query;

    return _trackImgMap(trackId);
}

function getImage(image) {
    if (image?.data) {
        var base64String = "";
        for (var i = 0; i < image.data.length; i++) {
            base64String += String.fromCharCode(image.data[i]);
        }
        var base64 = "data:" + image.format + ";base64," + window.btoa(base64String);
        return base64;
    }

    return undefined;
}