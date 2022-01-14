var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var rotors = []
var texte = {
    text: "un mot",
    first: true
}

function main() {
    if (rotors.length != parseInt(document.getElementById("nbr-rotors").value)) {
        if (!isNaN(document.getElementById("nbr-rotors").value) && document.getElementById("nbr-rotors").value != "") {
            // rotors = []
            // for(i=0; i<parseInt(document.getElementById("nbr-rotors").value); i++){
            //     rotors.push(0)
            // }
            if (rotors.length < parseInt(document.getElementById("nbr-rotors").value)) {
                for (i = 0; i < parseInt(document.getElementById("nbr-rotors").value) - rotors.length; i++) {
                    rotors.push(0)
                }
            } else {
                for (i = rotors.length; i > parseInt(document.getElementById("nbr-rotors").value); i--) {
                    rotors.pop()
                }
            }
        }
    }
    if (rotors.length != 0) {
        coded = document.getElementById("sentencecode").value
        if (coded != "") {
            var mot_div = document.getElementById("mot");
            texte.text = coded
            texte.first = texte.first ? false : true
            document.getElementById('mot').innerHTML = "";
            var newContent = document.createElement("div")
            var newContent2 = document.createElement("div")
            var newContent3 = document.createElement("div")
            for (e in coded) {
                if (alphabet.includes(coded[e].toLowerCase())) {
                    newContent.className = "letter"
                    newContent.innerHTML += `<h1 class='letter-inner-top'>${coded[e].toLowerCase()}</h1>`
                    mot_div.appendChild(newContent);
                    newContent2.className = "letter"
                    newContent2.innerHTML += `<h1 class='letter-inner-bottom'><i>
                    <h6 class="middle-t">${alphabet[getPreviousLetter((alphabet.indexOf(coded[e].toLowerCase())+rotors[e%(rotors.length)])%26)]}</h6>
                    <letter class="middle">${alphabet[(alphabet.indexOf(coded[e].toLowerCase())+rotors[e%(rotors.length)])%26]}</letter>
                    <h6 class="middle-b">${alphabet[getNextLetter((alphabet.indexOf(coded[e].toLowerCase())+rotors[e%(rotors.length)])%26)]}</h6></h1>`
                    mot_div.appendChild(newContent2);
                    newContent3.className = "rotor"
                    if (e < rotors.length) {
                        newContent3.innerHTML += `
                    <h1 class="rotor-nbr">
                    <input type="number" class="rotor-nbr-inner" min=0 max=26 value=${rotors[e%(rotors.length)]} id="${e}" onclick="rotors[this.id%(rotors.length)] = parseInt(document.getElementById(this.id).value);"></input>
                    </br><button class="rotor-btn minus" id="${e}-" onclick="if(parseInt(document.getElementById(this.id.slice(0, -1)).value) > 0) { rotors[this.id.slice(0, -1)%(rotors.length)] = parseInt(document.getElementById(this.id.slice(0, -1)).value)-1; main()}else{ rotors[this.id.slice(0, -1)%(rotors.length)] = 25-parseInt(document.getElementById(this.id.slice(0, -1)).value); main()}">-</button>
                    <button class="rotor-btn plus" id="${e}+" onclick="if(parseInt(document.getElementById(this.id.slice(0, -1)).value) == 25) {rotors[this.id.slice(0, -1)%(rotors.length)] = 0; main()}else{rotors[this.id.slice(0, -1)%(rotors.length)] = parseInt(document.getElementById(this.id.slice(0, -1)).value)+1; main()}">+</button></h1>`
                    }
                    mot_div.appendChild(newContent3);
                }
            }
        }
    } else {
        if (!isNaN(document.getElementById("nbr-rotors").value) && document.getElementById("nbr-rotors").value != "") {
            for (i = 0; i < parseInt(document.getElementById("nbr-rotors").value); i++) {
                rotors.push(0)
            }
        }
    }
}

main()
setInterval(() => {
    if (texte.first) main()
    if (texte.text != document.getElementById("sentencecode").value) {
        console.log(1)
        main()
    }
}, 10);

function getPreviousLetter(letter_i) {
    if (letter_i > 0) return letter_i - 1
    if (letter_i == 0) return 25
}

function getNextLetter(letter_i) {
    if (letter_i < 25) return letter_i + 1
    if (letter_i == 25) return 0
}
