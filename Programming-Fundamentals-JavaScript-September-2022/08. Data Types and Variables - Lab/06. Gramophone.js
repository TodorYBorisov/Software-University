function gramophone(bandName, albumName, songName) {

    let fullRotation = 2.5;

    let songDurationInSeconds = (albumName.length * bandName.length) * songName.length / 2;

    let rotations = songDurationInSeconds / fullRotation;

    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`);
}

gramophone('Rammstein', 'Sehnsucht', 'Engel')