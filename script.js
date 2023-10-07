console.log("Welcome to Spotify")

//Initialize the variables
let songIndex = 0;
let audioElemnt = new Audio('songs/Aabaad Barbaad 320 Kbps.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Aabaad Barbaad", filePath: "songs/Aabaad Barbaad 320 Kbps.mp3", coverPath: "covers/cover1.jpg"},
    {songName: "Soch Liya Radhe Shyam", filePath: "songs/Soch Liya Radhe Shyam 320 Kbps.mp3", coverPath: "covers/cover2.jpg"},
    {songName: "Aashiqui Aa Gayi Radhe Shyam", filePath: "songs/Aashiqui Aa Gayi Radhe Shyam Hindi 320 Kbps.mp3", coverPath: "covers/cover3.jpg"},
    {songName: "Alizeh Ae Dil Hai Mushkil", filePath: "songs/Alizeh Ae Dil Hai Mushkil 320 Kbps.mp3", coverPath: "covers/cover4.jpg"},
    {songName: "Alvida", filePath: "songs/Alvida Rangoon 320 Kbps.mp3", coverPath: "covers/cover5.jpg"},
    {songName: "Baatein Ye Kabhi Na", filePath: "songs/Baatein Ye Kabhi Na Male Khamoshiyan 128 Kbps.mp3", coverPath: "covers/cover6.jpg"},
    {songName: "Ami Je Tomar Tandav Version", filePath: "songs/Ami Je Tomar Tandav Version Bhool Bhulaiyaa 2 320 Kbps.mp3", coverPath: "covers/cover7.jpg"},
    {songName: "Aayat Bajirao Mastani", filePath: "songs/Aayat Bajirao Mastani 320 Kbps.mp33", coverPath: "covers/cover8.jpg"},
    {songName: "Tum Hi Ho Aashiqui 2", filePath: "songs/Tum Hi Ho Aashiqui 2 320 Kbps.mp3", coverPath: "covers/cover9.jpg"},
    {songName: "Aasan Nahin Yahan Aashiqui 2", filePath: "songs/Aasan Nahin Yahan Aashiqui 2 320 Kbps.mp3", coverPath: "covers/cover10.jpg"}
]

songItem.forEach((element)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText= songs[i].songName;
})

//audioElemnt.play();

//handle play pause
masterPlay.addEventListener('click',() =>{
    if(audioElemnt.paused || audioElemnt.currentTime<=0){
        audioElemnt.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElemnt.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

//Listen to Events
audioElemnt.addEventListener('timeupdate', () =>{ 
    //update seakbar
    progress = parseInt((audioElemnt.currentTime/audioElemnt.duration)* 100)
    progressBar.value = progress;
})

progressBar.addEventListener('change', ()=>{
    audioElemnt.currentTime = progressBar.value * audioElemnt.duration/100;
})
