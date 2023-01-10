function songs(array) {

    class Song {
        constructor(typeList, name, time) {

            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let numberOfSong = array.shift();
    let typeSongs = array.pop()
    let songs = [];

    for (let songData of array) {

        let data = songData.split('_')
        let typeList = data[0];
        let name = data[1];
        let time = data[2];

        let song = new Song(typeList, name, time);

        songs.push(song);
    }

    if (typeSongs === 'all') {

        for (let element of songs) {
            console.log(element.name);
        }
    } else {

        for (let element of songs) {

            if (typeSongs === (element.typeList)) {
                console.log(element.name);
            }
        }
    }
}
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
)




