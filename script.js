const musiCon = document.querySelector('.deens-music')
const title = document.querySelector('#title')
const deenMusic = document.querySelectorAll('.dinmusic-info')
const musProg = document.querySelector('.music-progress')
const Xprog = document.querySelector('.progress')
const prevBtn = document.querySelector('#prev')
const nextbtn= document.querySelector('#next')
const playBtn = document.querySelector('#play')
const cover = document.querySelector('#cover')
const audio = document.querySelector('#audio')


//songs titles here

const songs = ['din', 'don', 'dun']

//keep track of songs
let songIndex = 2

//initially load song info DOM
loadSong(songs[songIndex])

//update song details
function loadSong(song){
    title.innerText = song
    audio.src = `muusik/${song}.mp3`
    cover.src = `photos/${song}.jpg`
}

//adding the playy function and also the pause funtion
function playSong(){
    musiCon.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')
}

function pauseSong(){
    musiCon.classList.add('pause')
    playBtn.querySelector('i.fas').classList.add('fa-pause')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
}
//Event listeners
function nextSong(){
    songIndex ++

    if(songIndex > songs.length - 1){
        songIndex = 0
    }

    loadSong(songs[songIndex])

    playSong()
}

function prevSong(){
    songIndex--

    if(songIndex < 0){
        songIndex = songs.length - 1
    }

    loadSong(songs[songIndex])

    playSong()
}

function updateprogress(e){
   // console.log(e.srcElement.currentTime)

   const{duration, currentTime} = e.srcElement
   const progressPercent = (currentTime / duration) * 100
   Xprog.style.width = `${progressPercent}%`
   //progress = Xprog
}


function setProgress(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration


    audio.currentTime = (clickX / width) * duration
}
/***
const width = this.clientWidth: This line defines a constant variable 
width to store the width of the progress bar element that the user clicked on.
 this refers to the element that triggered the function.
const clickX = e.offsetX: This line defines a constant variable clickX
 to store the horizontal position of the user's click within the progress bar 
 element. e is the MouseEvent object that is passed to the function when the user 
 clicks on the progress bar.
const duration = audio.duration: This line defines a constant variable duration to
 store the total duration of the audio file being played.
audio.currentTime = (clickX / width) * duration: This line calculates the current time of
the audio file being played based on where the user clicked on the progress bar. It does this 
by dividing the horizontal position of the user's click (`

 */
playBtn.addeventListener('click', function(){
    musiCon.play()
})
playBtn.addeventListener('click', () => {
    const isPlaying = musiCon.classList.contains('play')

    if(isPlaying){
        pauseSong()
    }else{
        playSong()
    }
})

prevSong.addeventListener('click', prevSong)
nextSong.addeventListener('click', nextSong )

audio.addeventListener('timeupdate', updateprogress)

musProg.addEventListener('click', setProgress)

audio.addeventListener('ended', nextSong)