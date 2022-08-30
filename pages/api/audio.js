import { parseFile } from 'music-metadata';

const _trackList = [];

export default function handler(req, res) {
    const { callType, fileName = '' } = JSON.parse(req.body);

    if ('POST' === req.method) {
        if ('INIT' === callType) {
            init(res);
        } else if ('LIST' === callType) {
            res.status(200).json(_trackList);
        }
    } else {
        get('incoming.wav');
    }
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
                    result.forEach(item => _trackList.push(item))
                })
                .then(() => console.log('Audio Initialized'))
                .catch(console.error);
        }
    });

    res.status(200);
}

function get(fileName, res) {
    const audioPath = process.env.NEXT_PUBLIC_AUDIO_PATH;
    const stream = fs.createReadStream(`${audioPath}/${fileName}`);

    stream.on('data', data => {
        res.write((data));
    })

    stream.on('end', () => {
        res.end();
    })

    stream.on('error', err => {
        console.error(err);
        res.status(500);
    })
}