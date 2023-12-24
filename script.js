var ageSelect = document.getElementById("age");

for (let i = 0; i <= 18; i++) {
    var option = document.createElement('option');
    option.value = i;
    option.text = i;
    ageSelect.appendChild(option)


}
function resetBMI(event) {
const form = document.querySelector(".calc")
form.reset();
event.preventDefault();

}
function calculateBMI(event) {
    event.preventDefault();

    var height = parseFloat(document.getElementById('height').value) / 100; // Altezza in metri
    var weight = parseFloat(document.getElementById('weight').value); // Peso in kg


    var age = parseInt(ageSelect.value); // Età in anni

    var gender
    var radios = document.getElementsByName('gender');
    const arrow = document.querySelector(".arrow")
    const bmiResultBar = document.querySelector(".bmi-result ul")
    bmiResultBar.innerHTML = "";

    const healthGrade = document.querySelector(".health-grade")

    // Itera attraverso gli input radio
    for (var i = 0; i < radios.length; i++) {
        // Verifica quale input radio è selezionato
        if (radios[i].checked) {
            // Seleziona il valore dell'input radio selezionato
            gender = radios[i].value;
            break; // Esci dal ciclo una volta trovato il valore selezionato
        }
    }
    var bmi;

    if (isNaN(height) || isNaN(weight) || isNaN(age)) {
        alert("Please enter valid values for height, weight, and age.");
        return;
    }

    // Calcolo del BMI
    bmi = weight / (height * height);

    // Interpretazione del BMI in base all'età e al sesso
    var result = "";
    const maleBreakpoint = [15.5, 17.5, 19.1, 25.8, 30.1, 34.8, 40]
    const femaleBreakpoint = [15.3, 17.4, 19, 24.2, 28.6, 33.3, 39.6]

    const healthScore = ["Severe underweight", "Moderate underweight", "Mild underweight", "Normal weight", "Overweight", "Moderate obesity", "Severe obesity", "Extreme obesity"]


    if (gender === 'male') {
        maleBreakpoint.forEach((oneBreak, idx) => {
            var newLi = document.createElement('li');
            if (idx !== maleBreakpoint.length - 1) {
                var liWidth = ((maleBreakpoint[idx + 1] - oneBreak) * 100) / 24.5;
                newLi.style.width = liWidth.toFixed(2) + "%"; // Imposta lo stile width
            } else {
                // Imposta una larghezza predefinita per l'ultimo elemento
                newLi.style.width = "10%"; // Puoi modificare questa larghezza in base alle tue esigenze
            }

            // Crea gli elementi p, span e strong all'interno del li
            var newP = document.createElement('p');
            var newSpan = document.createElement('span');
            var newText = document.createTextNode(oneBreak); // Testo per il nodo span
            var newStrong = document.createElement('strong');
            var newStrongText = document.createTextNode(healthScore[idx + 1]); // Testo per il nodo strong

            // Aggiunge il testo al nodo span e strong
            newSpan.appendChild(newText);
            newStrong.appendChild(newStrongText);

            // Aggiunge span e strong come figli al nodo p
            newP.appendChild(newSpan);
            newP.appendChild(newStrong);

            // Aggiunge il nodo p come figlio al nodo li
            newLi.appendChild(newP);

            // Aggiunge il nuovo elemento li alla lista esistente
            bmiResultBar.appendChild(newLi);
        });


        if (bmi < 15.5) {
            result = "Severe underweight";
        } else if (bmi >= 15.5 && bmi < 17.5) {
            result = "Moderate underweight";
        } else if (bmi >= 17.5 && bmi < 19.1) {
            result = "Mild underweight";
        } else if (bmi >= 19.1 && bmi < 25.8) {
            result = "Normal weight";
        } else if (bmi >= 25.8 && bmi < 30.1) {
            result = "Overweight";
        } else if (bmi >= 30.1 && bmi < 34.8) {
            result = "Moderate obesity";
        } else if (bmi >= 34.8 && bmi < 40) {
            result = "Severe obesity";
        } else {
            result = "Extreme obesity";
        }
    }
    if (gender === 'female') {

        femaleBreakpoint.forEach((oneBreakF, idx) => {
            // Crea un nuovo elemento li
            var newListItem = document.createElement('li');
            if (idx !== maleBreakpoint.length - 1) {
                liWidth = ((femaleBreakpoint[idx + 1] - oneBreakF) * 100) / 39;
                console.log(liWidth)
                newListItem.style.width = liWidth.toFixed(1) + "%";
            }
            else {
                newListItem.style.width = "7%";

            } // Imposta lo stile width
            // Imposta lo stile width con la percentuale

            // Crea gli elementi p, span e strong all'interno del li
            var newParagraph = document.createElement('p');
            var newSpan = document.createElement('span');
            var newText = document.createTextNode(oneBreakF); // Testo per il nodo span
            var newStrong = document.createElement('strong');
            var newStrongText = document.createTextNode(healthScore[idx + 1]); // Testo per il nodo strong

            // Aggiunge il testo al nodo span e strong
            newSpan.appendChild(newText);
            newStrong.appendChild(newStrongText);

            // Aggiunge span e strong come figli al nodo p
            newParagraph.appendChild(newSpan);
            newParagraph.appendChild(newStrong);

            // Aggiunge il nodo p come figlio al nodo li
            newListItem.appendChild(newParagraph);

            // Trova l'elemento <ul> esistente in base all'ID


            // Aggiunge il nuovo elemento li alla lista esistente
            bmiResultBar.appendChild(newListItem);
        });


        if (bmi < 15.3) {
            result = "Severe underweight";
        } else if (bmi >= 15.3 && bmi < 17.4) {
            result = "Moderate underweight";
        } else if (bmi >= 17.4 && bmi < 19) {
            result = "Mild underweight";
        } else if (bmi >= 19 && bmi < 24.2) {
            result = "Normal weight";
        } else if (bmi >= 24.2 && bmi < 28.6) {
            result = "Overweight";
        } else if (bmi >= 28.6 && bmi < 33.3) {
            result = "Moderate obesity";
        } else if (bmi >= 33.3 && bmi < 39.6) {
            result = "Severe obesity";
        } else {
            result = "Extreme obesity";
        }
    }

    bmi = weight / (height * height);



    // console.log(bmiResult.clientWidth)
    // const delta = (bmiResult.clientWidth * bmi) /  26;
    // console.log(bmiResult)
    // arrow.style.width = delta + "px"


    if (gender === "male") {
        arrow.style.width = ((bmi - 15.5) * 100) / 24.5 + "%";

    } else {
        arrow.style.width = ((bmi - 15.3) * 100) / 24.3 + "%";



    }
    if (bmi - 15.5 < 0) {

        arrow.style.width = "0%"

    }
    else if (bmi > 40) {

        arrow.style.width = "100%";
    }
    console.log(((bmi - 15.5) * 100) / 24.5)
    document.getElementById('result').innerText = bmi.toFixed(2); // Mostra il BMI arrotondato a due decimali
    healthGrade.innerHTML = "(" + result + ")"
    document.getElementById("results").style.display = "block"
}