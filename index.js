let info = {
// Page 1 and 2
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
    H1:{artist: 'The Offspring', song: 'Why Don\'t You Get A Job'},

    G2:{artist: 'Modest Mouse', song: 'Float On'},
    H2:{artist: 'Modest Mouse', song: 'Dashboard'},
// Page 3 and 4
    A3: {artist: 'The Gaslight Anthem', song: '1,000 Years'},
    B3: {artist: 'The Gaslight Anthem', song: 'Stay Lucky'},

    A4: {artist: 'AFI', song: 'The Leaving Song Part Two'},
    B4: {artist: 'AFI', song: 'Miss Murder'},

    C3: {artist: 'Motion City Soundtrack', song: 'Everything Is Alright'},
    D3: {artist: 'Motion City Soundtrack', song: 'The Future Freaks Me Out'},

    C4: {artist: 'The Used', song: 'Take It Away'},
    D4: {artist: 'The Used', song: 'Sick Hearts'},

    E3: {artist: 'Rancid', song: 'Red Hot Moon'},
    F3: {artist: 'Rancid', song: 'Civilian Ways'},

    E4: {artist: 'Unwritten Law', song: 'She Say\'s'},
    F4: {artist: 'Unwritten Law', song: 'Seein\' Red'},

    G3: {artist: 'The Strokes', song: 'Juicebox'},
    H3: {artist: 'The Strokes', song: 'I can\'t Win'},

    G4: {artist: 'Yellowcard', song: 'Ocean Avenue'},
    H4: {artist: 'Yellowcard', song: 'Rough Landing, Holly'},
// Page 5 and 6
    A5: {artist: 'Sum 41', song: 'We\'re All To Blame'},
    B5: {artist: 'Sum 41', song: 'Still Waiting'},

    A6: {artist: 'Say Anything', song: 'Wow! I Can Get Sexual Too'},
    B6: {artist: 'Say Anything', song: 'A Walk Through Hell'},

    C5: {artist: 'Rise Against', song: 'Give It All'},
    D5: {artist: 'Rise Against', song: 'Prayer Of The Refugee'},

    C6: {artist: 'Relient K', song: 'In Love With The 80\'s (Pink Tux To The Prom)'},
    D6: {artist: 'Relient K', song: 'Must Of Done Something Right'},

    E5: {artist: 'New Found Glory', song: 'My Friends Over You'},
    F5: {artist: 'New Found Glory', song: 'Ready And Willing'},

    E6: {artist: 'Lucero', song: 'I Can Get Us Out Of Here Tonight'},
    F6: {artist: 'Lucero', song: 'Sixteen'},

    G5: {artist: 'Alkaline Trio', song: 'Time To Waste'},
    H5: {artist: 'Alkaline Trio', song: 'Love Love Kiss Kiss'},

    G6: {artist: 'Everclear', song: 'Santa Monica'},
    H6: {artist: 'Everclear', song: 'AM Radio'},
// Page 7 and 8
    A7: {artist: 'Bloc Party', song: 'This Mordern Love'},
    B7: {artist: 'Bloc Party', song: 'I Still Remember'},

    A8: {artist: 'Brand New', song: 'Sic Transit Gloria... Glory Fades'},
    B8: {artist: 'Brand New', song: 'Jude Law And A Semester Abroad'},

    C7: {artist: 'Panic! At The Disco', song: 'I Write Sins Not Tragedies'},
    D7: {artist: 'Panic! At The Disco', song: 'Nine In The Afternoon'},

    C8: {artist: 'Something Corporate', song: 'She Paints Me Blue'},
    D8: {artist: 'Something Corporate', song: 'I Woke Up In A Car'},

    E7: {artist: 'Taking Back Sunday', song: 'Makedamnsure'},
    F7: {artist: 'Taking Back Sunday', song: 'You\'re So Last Summer'},

    E8: {artist: 'The White Stripes', song: 'Seven Nation Army'},
    F8: {artist: 'The White Stripes', song: 'Rag And Bone'},

    G7: {artist: 'American Hi-Fi', song: 'The Art Of Losing'},
    H7: {artist: 'American Hi-Fi', song: 'The Geek Get The Girls'},

    G8: {artist: 'Anberlin', song: 'A Day Late'},
    H8: {artist: 'Anberlin', song: 'Blame Me! Blame Me!'},
// Page 9 and 10
    A9: {artist: 'The Academy Is', song: 'Neighbors'},
    B9: {artist: 'The Academy Is', song: 'Slow Down'},

    A10: {artist: 'Eve 6', song: 'Inside Out'},
    B10: {artist: 'Eve 6', song: 'Jump Back To Me Anytime'},

    C9: {artist: 'The Feeling', song: 'Fill My Little World'},
    D9: {artist: 'The Feeling', song: 'Set My World On Fire'},

    C10: {artist: 'Fountains Of Wayne', song: 'Stacy\'s Mom'},
    D10: {artist: 'Fountains Of Wayne', song: 'Sink To The Bottom'},

    E9: {artist: 'Bowling For Soup', song: 'Almost'},
    F9: {artist: 'Bowling For Soup', song: 'Hooray For Beer'},

    E10: {artist: 'The Get Up Kids', song: 'Ten Minutes'},
    F10: {artist: 'The Get Up Kids', song: 'Campire Kansas'},

    G9: {artist: 'Good Charlotte', song: 'The Anthem'},
    H9: {artist: 'Good Charlotte', song: 'Something Else'},

    G10: {artist: 'Green Day', song: 'When I Come Around'},
    H10: {artist: 'Green Day', song: 'Good Riddance (Time Of Your Life)'}
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

        var elementLetter = document.getElementById(Letter)
        elementLetter.classList.add("button-push")
        elementLetter.classList.add("button")
        newLetter = elementLetter.innerHTML
        console.log(newLetter)
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
        console.log(newNumber)
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
