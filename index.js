let info = {
    A1:{artist: 'Blink-182', song: 'All The Small Things'},
    B1:{artist: 'Blink-182', song: 'The Rock Show'},
    A2:{artist: 'The Killers', song: 'Mr. Brightside'},
    B2:{artist: 'The Killers', song: 'Somebody Told Me'},
    C1:{artist: 'Smashing Pumpkins', song: 'Disarm'},
    D1:{artist: 'Smashing Pumpkins', song: '1979'},
    C2:{artist: 'Third Eye Blind', song: 'Semi-Charmed Life'},
    D2:{artist: 'Third Eye Blind', song: 'Jumper'},
    E1:{artist: 'Incubus', song: 'Talk Shows On Mute'},
    F1:{artist: 'Incubus', song: 'Warning'},
    E2:{artist: 'Red Hot Chili Peppers', song: 'Californication'},
    F2:{artist: 'Red Hot Chili Peppers', song: 'Dani California'},
    G1:{artist: 'The Offspring', song: 'Pretty Fly (For A White Guy)'},
    H1:{artist: 'The Offspring', song: 'Why Don\'t You Get a Job'},
    G2:{artist: 'Modest Mouse', song: 'Float On'},
    H2:{artist: 'Modest Mouse', song: 'Dashboard'}
}


// Function grabs id of button (which matches the InnerHTML)
// Function sets class to the HTML element that matches the id.
// We then grab the innerHTML so we can pass it later on for the song combo
function getLetter(Letter){
    var buttonPressedTop = document.getElementById('FooterMiddleTop')
    if (buttonPressedTop.classList.contains('button-pressed')){
        return
    }
    else{
        buttonPressedTop.classList.add("button-pressed")

        var elementter = document.getElementById(Letter)
        elementter.classList.add("button-push")
        elementter.classList.add("button")
        newLetter = elementter.innerHTML
    }
}


// Function grabs id of button (which matches the InnerHTML)
// Function sets class to the HTML element that matches the id.
// We then grab the innerHTML so we can pass it later on for the song combo
function getNumber(Number){
    var buttonPressedBottom = document.getElementById('FooterMiddleBottom')
    if (buttonPressedBottom.classList.contains('button-pressed')){
        return
    }
    else{
        buttonPressedBottom.classList.add("button-pressed")

        var elementNumber = document.getElementById(Number)
        elementNumber.classList.add("button-push")
        elementNumber.classList.add("button")
        newNumber = elementNumber.innerHTML
        combineButtons();
    }
}

function combineButtons(){
    var combo = newLetter + newNumber;
    var newCombo = document.getElementById(combo);

    var artist = info[combo.toString()]
    var song = info[combo.toString()]

    document.getElementById("NowPlaying").innerHTML = "NOW PLAYING"
    document.getElementById("Artist").innerHTML = artist.artist
    document.getElementById("Song").innerHTML = '"' + song.song + '"'
    newCombo.play()
    setTimeout(function(){
        var elemenLetter=document.getElementById(newLetter)
        elemenLetter.classList.remove("button-push")
        elemenLetter.classList.remove("button")

        var buttonPressedTop = document.getElementById('FooterMiddleTop')
        buttonPressedTop.classList.remove('button-pressed')

        var elementNumber = document.getElementById(newNumber)
        elementNumber.classList.remove("button-push")
        elementNumber.classList.remove("button")

        var buttonPressedBottom = document.getElementById('FooterMiddleBottom')
        buttonPressedBottom.classList.remove('button-pressed')
     }, 2000);
}


function pageLeft(){
    console.log("Page should turn left unless all the way to left")
}

function pageRight(){
    console.log("Page should turn right unless all the way to right")
}
