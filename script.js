<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Enigma Machine</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h1 id="bigtitle" class="title">Enigma<img src="info_icon.svg" height="20px" width="20px" onclick="alert(`Entrez le nombre de rotors, le mot trouvé en clair et le mot crypté.\nVous n'avez plus qu'à modifier la valeur des rotors jusqu'à arriver au meme mot que le mot crypté.\nCeci vous donnera des valeurs de rotors à retenir...`)"
        /></h1>
    <label>Nombre de rotors : </label><input value=4 type="text" style="font-size: 20px;" id="nbr-rotors" placeholder="ex : 4" class="textinput"></br>
    </br>
    <label>Mot codé : </label><input type="text" value="azer" id="sentencecode" placeholder="Le mot trouvé en clair" class="textinput"></br>
    </br>
    <label>Mot décodé : </label><input type="text" id="sentence" placeholder="Le mot trouvé en crypté" class="textinput"></br>
    </br>
    <div id="mot"></div>
    <div class="rotor">
    </div>
    <script src="script.js" type="text/javascript"></script>
</body>

</html>
