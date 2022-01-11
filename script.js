var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]


var rotors = []
function main() {
    if(rotors.length != 0) {
        coded = document.getElementById("sentencecode").value
        if(coded != "") {
            var mot_div = document.getElementById("mot");
            document.getElementById('mot').innerHTML="";
            var newContent = document.createElement("div")
            var newContent2 = document.createElement("div")
            var newContent3 = document.createElement("div")
            for(e in coded){
                newContent.className = "letter"
                newContent.innerHTML += `<h1 class='letter-inner'>${coded[e]}</h1>`
                mot_div.appendChild(newContent);
                newContent2.className = "letter"
                newContent2.innerHTML += `<h1 class='letter-inner'>${alphabet[(alphabet.indexOf(coded[e])+rotors[e%(rotors.length)])%26]}</h1>`
                mot_div.appendChild(newContent2);
                newContent3.className = "rotor"
                newContent3.innerHTML += `
                <h1 class="rotor-nbr">
                    <input type="number" class="rotor-nbr-inner" min=0 max=26 value=${rotors[e%(rotors.length)]} id="${e}" onclick="rotors[this.id%(rotors.length)] = parseInt(document.getElementById(this.id).value);"></input>
                    </br><button class="rotor-btn" id="${e}+" onclick="if(parseInt(document.getElementById(this.id.slice(0, -1)).value) > 0) rotors[this.id.slice(0, -1)%(rotors.length)] = parseInt(document.getElementById(this.id.slice(0, -1)).value)-1;else{ rotors[this.id.slice(0, -1)%(rotors.length)] = 25-parseInt(document.getElementById(this.id.slice(0, -1)).value)}">-</button>
                    <button class="rotor-btn" id="${e}-" onclick="if(parseInt(document.getElementById(this.id.slice(0, -1)).value) == 25)rotors[this.id.slice(0, -1)%(rotors.length)] = 0;else{ rotors[this.id.slice(0, -1)%(rotors.length)] = parseInt(document.getElementById(this.id.slice(0, -1)).value)+1 }">+</button>
                </h1>`
                mot_div.appendChild(newContent3);
            }
        }
    } else {
        if(!isNaN(document.getElementById("nbr-rotors").value) && document.getElementById("nbr-rotors").value!="") {
            for(i=0; i<parseInt(document.getElementById("nbr-rotors").value); i++){
                rotors.push(0)
            }
        }
    }
}

main()
setInterval(() => {
    main()
}, 500);