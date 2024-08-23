


const navLinks = document.querySelectorAll('#hotbar-content li')

const hoverSound = document.getElementById("hover-sound")

hoverSound.volume = 0.5


navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {

        if (hoverSound.paused || hoverSound.ended){
            hoverSound.pause()
            hoverSound.currentTime = 0
            hoverSound.play()
        }


    })
})

const btnSettings = document.getElementById("btn-settings")
const btnClose = document.getElementById("btn-close")

settings = document.getElementById("settings")
isOpened = false

btnSettings.addEventListener("click", function(){
    if (!isOpened){
        settings.style.display = "flex"
        isOpened = true
    }
})

btnClose.addEventListener("click", function(){
    if (isOpened){
        settings.style.display = "none"
        isOpened = false
    }
})


