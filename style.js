let notes = ['A', 'W', 'S', 'E', 'D', 'F', 'T', 'G', 'Y', 'H', 'U', 'J'];
titles = document.querySelectorAll('.keys');

function play_note(index, color_change) {
    let sound = new Audio('key/' + notes[index] + '.mp3');
    sound.play();
    if(color_change) {
        if(index == 0 || index == 2 || index == 4 || index == 5 || index == 7 || index == 9 || index == 11) {
            titles[index].style.backgroundColor = "#ccc";
        }
        else {
            titles[index].style.backgroundColor = "#333";
        }
    }
}

document.addEventListener("keydown", function (event) {
    notes.forEach(function (item, index) {
        if(event.code === 'Key' + item){
            play_note(index, true);
        }
    });
});

document.addEventListener("keyup", function (event) {
    notes.forEach(function (item, index) {
        if(event.code === 'Key' + item){
            if(index == 0 || index == 2 || index == 4 || index == 5 || index == 7 || index == 9 || index == 11) {
                titles[index].style.backgroundColor = "white"
            }
            else {
                titles[index].style.backgroundColor = "black"
            }
        }
    });
});

titles.forEach(keys => {
    titles.addEventListener('click', () => playNote(keys))
})

let playNote = (keys) => {
    const noteSound = new Audio('key/' + notes[index] + '.mp3');
    noteSound.play();
    keys.classList.add('active')
    noteSound.addEventListener('ended', () => {
        keys.classList.remove('active')
    })
}