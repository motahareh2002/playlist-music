let musicPlayList = [
    {
        id: 1,
        name: "Anaraki",
        signer: "Omid MahdiZadeh",
        srcimg: "./image/01.jpg",
        srcmusic: "./musics/@omidmahdizadeh_امید_مهدیزاده_X_انارکی1401.mp3",
        backgroundColor: "purple"
    },
    {
        id: 2,
        name: "Royaye Man Rap Bod",
        signer: "Shayee",
        srcimg: "./image/02.jpg",
        srcmusic: "./musics/1.mp3",
        backgroundColor: "darkGreen"
    },
    {
        id: 3,
        name: "Oof",
        signer: "Hidden",
        srcimg: "./image/03.jpg",
        srcmusic: "./musics/2_5224327845815262839.mp3",
        backgroundColor: "bisque"
    },
    {
        id: 4,
        name: "Bezar Beram",
        signer: "Octav",
        srcimg: "./image/04.jpg",
        srcmusic: "./musics//2_5393378153722814474.mp3",
        backgroundColor: "#3333"
    },
    {
        id: 5,
        name: "gelseydim",
        signer: "yiğit mahzuni",
        srcimg: "./image/05.jpg",
        srcmusic: "./musics/yiğit_mahzuni_gelseydim.mp3",
        backgroundColor: "darkRed"
    },
    {
        id: 6,
        name: "Ama Evlisin",
        signer: "Yıldız Tilbe",
        srcimg: "./image/06.jpg",
        srcmusic: "./musics/Yıldız Tilbe_ Ama Evlisin.mp3",
        backgroundColor: "bisque"
    },
    {
        id: 7,
        name: "Yüzyüzeyken Konuşuruz",
        signer: "Boş Gemiler",
        srcimg: "./image/08.jpg",
        srcmusic: "./musics/Yüzyüzeyken Konuşuruz - Boş Gemiler .mp3",
        backgroundColor: "gray"
    },
    {
        id: 8,
        name: "Yalan",
        signer: "Zeynep_Avci",
        srcimg: "./image/07.jpg",
        srcmusic: "./musics/yt5s_com_Tan_Taşçı_Yalan_Zeynep_Avci_Blinds_The_Voice_of_Germany.mp3",
        backgroundColor: "bisque"
    },

    {
        id: 9,
        name: "ZAKHMI",
        signer: "@LOVE DEP",
        srcimg: "./image/09.jpg",
        srcmusic: "./musics/ZAKHMI.mp3",
        backgroundColor: "rgb(88, 87, 87)"
    },

    {
        id: 10,
        name: "Gonah",
        signer: "Mordad",
        srcimg: "./image/15.jpg",
        srcmusic: "./musics/Gonah - Mordad.mp3",
        backgroundColor: "rgba(207,219,223,1)"
    },
    {
        id: 11,
        name: "Refigh",
        signer: "Shayee",
        srcimg: "./image/12.jpg",
        srcmusic: "./musics/Shayea-Refigh-Fabrik-320.mp3",
        backgroundColor: "#e7e742"
    },
    {
        id: 12,
        name: "Kofri",
        signer: "Shayee",
        srcimg: "./image/11.jpg",
        srcmusic: "./musics/Shayea-Kofri-320.mp3",
        backgroundColor: "#333"
    },
    {
        id: 13,
        name: "Khaterehamoon",
        signer: "Ehaam",
        srcimg: "./image/13.jpg",
        srcmusic: "./musics/Ehaam-Khaterehamoon-320.mp3",
        backgroundColor: "#e7b965"
    },
    {
        id: 14,
        name: "Leilamoon",
        signer: "Ehsan Daryadel",
        srcimg: "./image/14.jpg",
        srcmusic: "./musics/Ehsan Daryadel Leila.mp3",
        backgroundColor: "#49646d"
    },
    {
        id: 15,
        name: "Nakoni-Bavar",
        signer: "Zedbazi",
        srcimg: "./image/10.jpg",
        srcmusic: "./musics/Zedbazi-Nakoni-Bavar-(Ft-Behzad-Leito)-256.mp3",
        backgroundColor: "#333"
    },

]

const $ = document;
let audioMusic = $.querySelector("audio")
let imgElem = $.querySelector("img")
let nameSigner = $.querySelector(".name-signer")
let nameMusic = $.querySelector(".name-music")
let currenTimeMusic = $.querySelector(".currentTime")
let durationTime = $.querySelector(".durationTime")
let prog = $.querySelector(".progress")
let backwardMusic = $.querySelector(".backward")
let playMusic = $.querySelector(".play")
let pauseMusic = $.querySelector(".pause")
let forwardMusic = $.querySelector(".forward")


let indexMusic = 0;

function playHandler() {
    audioMusic.play();
    playMusic.style.display = "none";
    pauseMusic.style.display = "inline";
    //AUDION CURRENT TIME
    let current = setInterval(() => {
        if (Math.floor(audioMusic.currentTime) > 59) {
            currenTimeMusic.innerHTML = "0" + Math.floor(Math.floor(audioMusic.currentTime) / 60) + ":" +
                (Math.floor(Math.floor(audioMusic.currentTime) % 60) < 10 ? "0" + Math.floor(Math.floor(audioMusic.currentTime) % 60) :
                    Math.floor(Math.floor(audioMusic.currentTime) % 60))
        }
        else {
            currenTimeMusic.innerHTML = "00 : "
                + (Math.floor(audioMusic.currentTime) < 10 ? "0" + Math.floor(audioMusic.currentTime) :
                    Math.floor(audioMusic.currentTime))
        }
        //scroll music
        prog.setAttribute("value", Math.floor(audioMusic.currentTime))
    }, 1000)
    //AUDIO DURATION
    if (Math.floor(audioMusic.duration) > 59) {
        durationTime.innerHTML = "0" + Math.floor(Math.floor(audioMusic.duration) / 60) + ":" +
            (Math.floor(Math.floor(audioMusic.duration) % 60) < 10 ? "0" + Math.floor(Math.floor(audioMusic.duration) % 60) :
                Math.floor(Math.floor(audioMusic.duration) % 60))
    }
    else {
        durationTime.innerHTML = "00 : "
            + (Math.floor(audioMusic.duration) < 10 ? "0" + Math.floor(audioMusic.duration) :
                Math.floor(audioMusic.duration))
    }
    //progress

    prog.setAttribute("max", Math.floor(audioMusic.duration))
}
function pauseHandler() {
    audioMusic.pause();
    playMusic.style.display = "inline";
    pauseMusic.style.display = "none"
}
function previosHandler() {
    indexMusic--;
    if (indexMusic < 0) indexMusic = musicPlayList.length - 1;
    audioMusic.setAttribute("src", musicPlayList[indexMusic].srcmusic)
    imgElem.setAttribute("src", musicPlayList[indexMusic].srcimg)
    nameSigner.innerHTML = musicPlayList[indexMusic].signer;
    nameMusic.innerHTML = musicPlayList[indexMusic].name;
    $.body.style.backgroundColor = musicPlayList[indexMusic].backgroundColor
}
function nextHandler() {
    indexMusic++;
    if (indexMusic > musicPlayList.length - 1) indexMusic = 0;
    audioMusic.setAttribute("src", musicPlayList[indexMusic].srcmusic)
    imgElem.setAttribute("src", musicPlayList[indexMusic].srcimg)
    nameSigner.innerHTML = musicPlayList[indexMusic].signer;
    nameMusic.innerHTML = musicPlayList[indexMusic].name;
    $.body.style.backgroundColor = musicPlayList[indexMusic].backgroundColor;

    if (pauseMusic.style.display === "inline") {
        audioMusic.play()
    }
}
playMusic.addEventListener("click", playHandler)
pauseMusic.addEventListener("click", pauseHandler)
forwardMusic.addEventListener("click", nextHandler)
backwardMusic.addEventListener("click", previosHandler)