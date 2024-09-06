


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

const btnMusicPlayer = document.getElementById("btn-music-player")
const btnCloseMusicPlayer = document.getElementById("btn-close-music-player")
const btnSettings = document.getElementById("btn-settings")
const btnCloseSettings = document.getElementById("btn-close-settings")

musicPlayer = document.getElementById("musicPlayer")
musicPlayerIsOpened = false

settings = document.getElementById("settings")
settingsIsOpened = false

btnMusicPlayer.addEventListener("click", function(){
    if (!musicPlayerIsOpened){
        musicPlayer.style.display = "flex"
        musicPlayerIsOpened = true
    }
})

btnCloseMusicPlayer.addEventListener("click", function(){
    if (musicPlayerIsOpened){
        musicPlayer.style.display = "none"
        musicPlayerIsOpened = false
    }
})

btnSettings.addEventListener("click", function(){
    if (!settingsIsOpened){
        settings.style.display = "flex"
        settingsIsOpened = true
    }
})

btnCloseSettings.addEventListener("click", function(){
    if (settingsIsOpened){
        settings.style.display = "none"
        settingsIsOpened = false
    }
})


const menuItems = document.querySelectorAll(".window-menu ul li")

const menuItemsList = []

menuItems.forEach(item => {
    menuItemsList.push(item.textContent)
})

menuItems[0].classList.add('menu-item-selected')

console.log(menuItemsList)

menuItems.forEach((item, index) => {
    item.addEventListener('click', function(){
        console.log(index)

        
    })
})

menuItems.forEach((item) => {
    item.addEventListener('click', function(){
        menuItems.forEach((li) => li.classList.remove('menu-item-selected'))

        item.classList.add('menu-item-selected')
    })
})