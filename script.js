var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]

function main() {
    rotors = []
    for(i=0; i<3; i++){
        rotors.push(0)
    }
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
            newContent2.innerHTML += `<h1 class='letter-inner'>${
                alphabet[(alphabet.indexOf(coded[e])+rotors[e%(rotors.length)])%26]
            }</h1>`
            mot_div.appendChild(newContent2);
            newContent3.className = "rotor"
            newContent3.innerHTML += `<h1 class="rotor-nbr">
                <button class='oui' onclick='console.log(rotors)'>${rotors[e%(rotors.length+1)]}</button>
            </h1>`
            var buttons = document.getElementsByTagName('button');
            for (let i = 0; i < buttons.length; i++) {
                let button = buttons[i];
                button.addEventListener("click", function() {console.log("e")})
            }
            mot_div.appendChild(newContent3);
        }
    }
}


function rotor(a, b, c) {
    return [a, b, c]
}

main()
setInterval(() => {
    main()
}, 10);