import { parseFile } from 'music-metadata';

const _trackList = [];

export default function handler(req, res) {
    const { callType } = JSON.parse(req.body);

    if ('INIT' === callType) {
        init(res);
    } else if ('LIST' === callType) {
        res.status(200).json(_trackList);
    } else if ('GET' === callType) {

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
