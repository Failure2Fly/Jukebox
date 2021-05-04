let info = {
// Page 1 and 2
    A1:{artist: 'Blink-182', song: 'All The Small Things', minutes: 2, seconds: 48},
    B1:{artist: 'Blink-182', song: 'The Rock Show', minutes: 2, seconds: 51},

    A2:{artist: 'The Killers', song: 'Mr. Brightside', minutes: 3, seconds: 44},
    B2:{artist: 'The Killers', song: 'Somebody Told Me', minutes: 3, seconds: 17},

    C1:{artist: 'Smashing Pumpkins', song: 'Disarm', minutes: 3, seconds: 18},
    D1:{artist: 'Smashing Pumpkins', song: '1979', minutes: 4, seconds: 23},

    C2:{artist: 'Third Eye Blind', song: 'Semi-Charmed Life', minutes: 4, seconds: 28},
    D2:{artist: 'Third Eye Blind', song: 'Jumper', minutes: 4, seconds: 32},

    E1:{artist: 'Incubus', song: 'Talk Shows On Mute', minutes: 3, seconds: 51},
    F1:{artist: 'Incubus', song: 'Warning', minutes: 4, seconds: 40},

    E2:{artist: 'Red Hot Chili Peppers', song: 'Californication', minutes: 5, seconds: 29},
    F2:{artist: 'Red Hot Chili Peppers', song: 'Dani California', minutes: 4, seconds: 42},

    G1:{artist: 'The Offspring', song: 'Pretty Fly (For A White Guy)', minutes: 3, seconds: 8},
    H1:{artist: 'The Offspring', song: 'Why Don\'t You Get A Job', minutes: 2, seconds: 52},

    G2:{artist: 'Modest Mouse', song: 'Float On', minutes: 3, seconds: 29},
    H2:{artist: 'Modest Mouse', song: 'Dashboard', minutes: 4, seconds: 7},
// Page 3 and 4
    A3: {artist: 'The Gaslight Anthem', song: '1,000 Years', minutes: 3, seconds: 38},
    B3: {artist: 'The Gaslight Anthem', song: 'Stay Lucky', minutes: 3, seconds: 8},

    A4: {artist: 'AFI', song: 'The Leaving Song Part Two', minutes: 3, seconds: 31},
    B4: {artist: 'AFI', song: 'Miss Murder', minutes: 3, seconds: 26},

    C3: {artist: 'Motion City Soundtrack', song: 'Everything Is Alright', minutes: 3, seconds: 28},
    D3: {artist: 'Motion City Soundtrack', song: 'The Future Freaks Me Out', minutes: 3, seconds: 37},

    C4: {artist: 'The Used', song: 'Take It Away', minutes: 3, seconds: 37},
    D4: {artist: 'The Used', song: 'Sick Hearts', minutes: 3, seconds: 29},

    E3: {artist: 'Rancid', song: 'Red Hot Moon', minutes: 3, seconds: 36},
    F3: {artist: 'Rancid', song: 'Civilian Ways', minutes: 4, seconds: 11},

    E4: {artist: 'Unwritten Law', song: 'She Say\'s', minutes: 3, seconds: 59},
    F4: {artist: 'Unwritten Law', song: 'Seein\' Red', minutes: 3, seconds: 46},

    G3: {artist: 'The Strokes', song: 'Juicebox', minutes: 3, seconds: 17},
    H3: {artist: 'The Strokes', song: 'I Can\'t Win', minutes: 2, seconds: 34},

    G4: {artist: 'Yellowcard', song: 'Ocean Avenue', minutes: 3, seconds: 18},
    H4: {artist: 'Yellowcard', song: 'Rough Landing, Holly', minutes: 3, seconds: 33},
// Page 5 and 6
    A5: {artist: 'Sum 41', song: 'We\'re All To Blame', minutes: 3, seconds: 38},
    B5: {artist: 'Sum 41', song: 'Still Waiting', minutes: 2, seconds: 42},

    A6: {artist: 'Say Anything', song: 'Wow! I Can Get Sexual Too', minutes: 3, seconds: 11},
    B6: {artist: 'Say Anything', song: 'A Walk Through Hell', minutes: 3, seconds: 30},

    C5: {artist: 'Rise Against', song: 'Give It All', minutes: 2, seconds: 50},
    D5: {artist: 'Rise Against', song: 'Prayer Of The Refugee', minutes: 3, seconds: 21},

    C6: {artist: 'Relient K', song: 'In Love With The 80\'s (Pink Tux To The Prom)', minutes: 3, seconds: 8},
    D6: {artist: 'Relient K', song: 'Must Of Done Something Right', minutes: 3, seconds: 19},

    E5: {artist: 'New Found Glory', song: 'My Friends Over You', minutes: 3, seconds: 40},
    F5: {artist: 'New Found Glory', song: 'Ready And Willing', minutes: 3, seconds: 22},

    E6: {artist: 'Lucero', song: 'I Can Get Us Out Of Here Tonight', minutes: 4, seconds: 14},
    F6: {artist: 'Lucero', song: 'Sixteen', minutes: 3, seconds: 12},

    G5: {artist: 'Alkaline Trio', song: 'Time To Waste', minutes: 4, seconds: 12},
    H5: {artist: 'Alkaline Trio', song: 'Love Love Kiss Kiss', minutes: 3, seconds: 25},

    G6: {artist: 'Everclear', song: 'Santa Monica', minutes: 3, seconds: 11},
    H6: {artist: 'Everclear', song: 'AM Radio', minutes: 3, seconds: 56},
// Page 7 and 8
    A7: {artist: 'Bloc Party', song: 'This Mordern Love', minutes: 4, seconds: 25},
    B7: {artist: 'Bloc Party', song: 'I Still Remember', minutes: 4, seconds: 23},

    A8: {artist: 'Brand New', song: 'Sic Transit Gloria... Glory Fades', minutes: 3, seconds: 6},
    B8: {artist: 'Brand New', song: 'Jude Law And A Semester Abroad', minutes: 3, seconds: 40},

    C7: {artist: 'Panic! At The Disco', song: 'I Write Sins Not Tragedies', minutes: 3, seconds: 6},
    D7: {artist: 'Panic! At The Disco', song: 'Nine In The Afternoon', minutes: 3, seconds: 11},

    C8: {artist: 'Something Corporate', song: 'I Woke Up In A Car', minutes: 4, seconds: 13},
    D8: {artist: 'Something Corporate', song: 'She Paints Me Blue', minutes: 3, seconds: 38},

    E7: {artist: 'Taking Back Sunday', song: 'Makedamnsure', minutes: 3, seconds: 32},
    F7: {artist: 'Taking Back Sunday', song: 'You\'re So Last Summer', minutes: 3, seconds: 3},

    E8: {artist: 'The White Stripes', song: 'Seven Nation Army', minutes: 3, seconds: 51},
    F8: {artist: 'The White Stripes', song: 'Rag And Bone', minutes: 3, seconds: 48},

    G7: {artist: 'American Hi-Fi', song: 'The Art Of Losing', minutes: 3, seconds: 22},
    H7: {artist: 'American Hi-Fi', song: 'The Geek Get The Girls', minutes: 2, seconds: 50},

    G8: {artist: 'Anberlin', song: 'A Day Late', minutes: 3, seconds: 25},
    H8: {artist: 'Anberlin', song: 'Blame Me! Blame Me!', minutes: 3, seconds: 9},
// Page 9 and 10
    A9: {artist: 'The Academy Is', song: 'Neighbors', minutes: 3, seconds: 10},
    B9: {artist: 'The Academy Is', song: 'Slow Down', minutes: 4, seconds: 2},

    A10: {artist: 'Eve 6', song: 'Inside Out', minutes: 3, seconds: 39},
    B10: {artist: 'Eve 6', song: 'Jump Back To Me Anytime', minutes: 3, seconds: 25},

    C9: {artist: 'The Feeling', song: 'Fill My Little World', minutes: 3, seconds: 40},
    D9: {artist: 'The Feeling', song: 'Set My World On Fire', minutes: 3, seconds: 22},

    C10: {artist: 'Fountains Of Wayne', song: 'Stacy\'s Mom', minutes: 3, seconds: 18},
    D10: {artist: 'Fountains Of Wayne', song: 'Sink To The Bottom', minutes: 3, seconds: 12},

    E9: {artist: 'Bowling For Soup', song: 'Almost', minutes: 3, seconds: 26},
    F9: {artist: 'Bowling For Soup', song: 'Hooray For Beer', minutes: 3, seconds: 26},

    E10: {artist: 'The Get Up Kids', song: 'Ten Minutes', minutes: 3, seconds: 13},
    F10: {artist: 'The Get Up Kids', song: 'Campire Kansas', minutes: 3, seconds: 3},

    G9: {artist: 'Good Charlotte', song: 'The Anthem', minutes: 2, seconds: 55},
    H9: {artist: 'Good Charlotte', song: 'Something Else', minutes: 3, seconds: 19},

    G10: {artist: 'Green Day', song: 'When I Come Around', minutes: 2, seconds: 58},
    H10: {artist: 'Green Day', song: 'Good Riddance (Time Of Your Life)', minutes: 2, seconds: 33}
}


// Function grabs id of button (which matches the InnerHTML)
// Function sets class to the HTML element that matches the id.
// We then grab the innerHTML so we can pass it later on for the song combo
function getLetter(Letter){
    var buttonPressedTop = document.getElementById('FooterMiddleTop')
    if (buttonPressedTop.classList.contains('button-pressed')){
        return null;
    }
    else{
        buttonPressedTop.classList.add("button-pressed")

        var elementLetter = document.getElementById(Letter)
        elementLetter.classList.add("button-push")
        elementLetter.classList.add("button")
        newLetter = elementLetter.innerHTML
        console.log(newLetter)
    }
}
module.export = getLetter;

// Function grabs id of button (which matches the InnerHTML)
// Function sets class to the HTML element that matches the id.
// We then grab the innerHTML so we can pass it later on for the song combo
function getNumber(Number){
    var buttonPressedBottom = document.getElementById('FooterMiddleBottom')
    if (buttonPressedBottom.classList.contains('button-pressed')){
        return null;
    }
    else{
        buttonPressedBottom.classList.add("button-pressed")

        var elementNumber = document.getElementById(Number)
        elementNumber.classList.add("button-push")
        elementNumber.classList.add("button")
        newNumber = elementNumber.innerHTML
        console.log(newNumber)
        combineButtons();
    }
}


function combineButtons(){
    let combo = newLetter + newNumber;
    let newCombo = document.getElementById(combo);
    let music = info[combo.toString()]
    let fullSeconds = ((music.minutes*60) + music.seconds) + '000';


    document.getElementById("NowPlaying").innerHTML = "NOW PLAYING"
    document.getElementById("Artist").innerHTML = music.artist
    document.getElementById("Song").innerHTML = '"' + music.song + '"'
    document.getElementById("SongTime").innerHTML = music.minutes + ':' + music.seconds
    newCombo.play()
    setTimeout(function(){
        let elemenLetter = document.getElementById(newLetter)
        elemenLetter.classList.remove("button-push")
        elemenLetter.classList.remove("button")

        let buttonPressedTop = document.getElementById('FooterMiddleTop')
        buttonPressedTop.classList.remove('button-pressed')

        let elementNumber = document.getElementById(newNumber)
        elementNumber.classList.remove("button-push")
        elementNumber.classList.remove("button")

        let buttonPressedBottom = document.getElementById('FooterMiddleBottom')
        buttonPressedBottom.classList.remove('button-pressed')
     }, fullSeconds);
}









