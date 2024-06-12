import {
    dataMusic
} from "../Utils/dataMusic.js";
import {
    trackIndex
} from '../UI/player.js';
import {
    loadTrack
} from '../UI/player.js';
import {
    getFavoriteTracks
} from '../UI/player.js';

const ppList = document.querySelector('.player-page-list');
const ppText = document.querySelector('.player-page-text');
const btnText = document.querySelector('.btn-text');
const btnLike = document.querySelector('.btn-like');
const btnNext = document.querySelector('.btn-next');
const selectGenre = document.querySelector('#select-genre');
const tracks = dataMusic

export const trackLoad = (img, title, artist, id) => {

    const playerQueues = document.querySelectorAll(".player-queue-box.active");
    const playerQueue = document.createElement("div");
    playerQueue.classList.add("player-queue-box");

    // Видалити клас 'active' з усіх елементів у NodeList
    playerQueues.forEach(queue => {
        queue.classList.remove("active");
    });

    playerQueue.addEventListener("click", ()=>{
        loadTrack(id - 1)
        playerQueue.classList.add("active")
    })


    const playerQueueDetails = document.createElement("div")
    playerQueueDetails.classList.add("player-queue-details")

    const playerQueueImg = document.createElement("img")
    playerQueueImg.src = "../assets/images/tracks/" + img
    playerQueueImg.classList.add("player-queue-img")

    const playerQueueTitle = document.createElement("p")
    playerQueueTitle.textContent = title
    playerQueueTitle.classList.add("player-queue-title")

    const playerQueueArtist = document.createElement("p")
    playerQueueArtist.textContent = artist
    playerQueueArtist.classList.add("player-queue-artist")


    ppList.append(playerQueue)
    playerQueueDetails.append(playerQueueTitle, playerQueueArtist)
    playerQueue.append(playerQueueImg, playerQueueDetails)


}

const textLoad = (index) => {
    const textTrack = document.createElement("p")
    textTrack.textContent = tracks[index].txt
    textTrack.classList.add("player-page-text")
    textTrack.classList.add("show")
    ppText.append(textTrack)

}


btnNext.addEventListener("click", () => {
        ppList.innerHTML = ""
       tracks.forEach((track) => {
            trackLoad(track.img, track.title, track.artist, track.id)
    })
})

    
/* btnText.addEventListener("click", () => {
    trackAmount = 0
    textLoad(trackIndex)
}) */
btnLike.addEventListener("click", () => {
    ppList.innerHTML = ""
    let favoriteTracks = getFavoriteTracks()
    favoriteTracks.forEach((favoriteTrack)=>{
        console.log(favoriteTrack.img)
        trackLoad(favoriteTrack.img, favoriteTrack.title, favoriteTrack.artist, favoriteTrack.id)
    })

})




selectGenre.addEventListener("change", () => {
    ppList.innerHTML = ""
    tracks.forEach((track) => {
        if (track.genre === selectGenre.value) {
            trackLoad(track.img, track.title, track.artist, track.id)
        }
    })
})

window.addEventListener("load", ()=>{
    ppList.innerHTML = ""
    tracks.forEach((track) => {
            trackLoad(track.img, track.title, track.artist, track.id)
        
    })
})

