var ageSelect = document.getElementById("age");

for (let i = 2; i <= 20; i++) {
  var option = document.createElement("option");
  option.value = i;
  option.text = i;
  ageSelect.appendChild(option);
}
function resetBMI(event) {
  const form = document.querySelector(".calc");
  form.reset();
  event.preventDefault();
}
function calculateBMI(event) {
  event.preventDefault();

  var height = parseFloat(document.getElementById("height").value) / 100; // Altezza in metri
  var weight = parseFloat(document.getElementById("weight").value); // Peso in kg

  var age = parseInt(ageSelect.value); // Età in anni

  var gender;
  var radios = document.getElementsByName("gender");
  const arrow = document.querySelector(".arrow");
  const bmiResultBar = document.querySelector(".bmi-result ul");
  bmiResultBar.innerHTML = "";

  const healthGrade = document.querySelector(".health-grade");

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

  const maleBreakpoint = [15.5, 17.5, 19.1, 25.8, 30.1, 34.8, 40];
  const femaleBreakpoint = [15.3, 17.4, 19, 24.2, 28.6, 33.3, 39.6];

  const healthScore = [
    "Severe underweight",
    "Moderate underweight",
    "Mild underweight",
    "Normal weight",
    "Overweight",
    "Moderate obesity",
    "Severe obesity",
    "Extreme obesity",
  ];

  let percentile;
  if (age === 2) {
    if (bmi <= 14.8) {
      percentile = 5;
    } else if (bmi <= 15.8) {
      percentile = 25;
    } else if (bmi <= 16.5) {
      percentile = 50;
    } else if (bmi <= 17.5) {
      percentile = 75;
    } else if (bmi <= 18.1) {
      percentile = 85;
    } else if (bmi <= 19.1) {
      percentile = 95;
    } else {
      percentile = 100;
    }

    if (bmi < 15.5) {
      result = "Normal weight";
      if (bmi < 14.5) {
        result = "underweight";
      }
    } else if (bmi >= 15.5 && bmi < 17.5) {
      result = "normal weight";
    } else if (bmi >= 17.5 && bmi < 19.1) {
      if (bmi >= 17.5 && bmi <= 18.1) {
        result = "Normal weight";
      } else if (bmi <= 18.5) {
        result = "Overweight";
      } else {
        result = "Moderate obesity";
      }
    } else if (bmi >= 19.1 && bmi < 25.8) {
      result = "Severe obesity";
    } else {
      result = "Extreme obesity";
    }
  }
  if (age === 3) {
  
 if (bmi <= 14.1) {
      percentile = 5;
    } else if (bmi <= 15.1) {
      percentile = 25;
    } else if (bmi <= 15.9) {
      percentile = 50;
    } else if (bmi <= 16.7) {
      percentile = 75;
    } else if (bmi <= 17.3) {
      percentile = 85;
    } else if (bmi <= 18.2) {
      percentile = 95;
    } else {
      percentile = 100;
    }


    if (bmi < 15.5) {
      result = "Normal weight";
      if (bmi < 14.4) {
        result = "underweight";
      }
    } else if (bmi >= 15.5 && bmi < 17.5) {
      result = "normal weight";
    } else if (bmi >= 17.5 && bmi < 19.1) {
      if (bmi >= 17.5 && bmi <= 18.25) {
        result = "Overweight";
      } else if (bmi >= 18.25 && bmi <= 19.1) {
        result = "Moderate obesity";
      }
    } else if (bmi >= 19.1 && bmi < 25.8) {
      result = "Severe obesity";
    } else {
      result = "Extreme obesity";
    }
  }
  if (age === 4) {

    if (bmi <= 14) {
      percentile = 5;
    } else if (bmi <= 15) {
      percentile = 25;
    } else if (bmi <= 15.5) {
      percentile = 50;
    } else if (bmi <= 16.5) {
      percentile = 75;
    } else if (bmi <= 17) {
      percentile = 85;
    } else if (bmi <= 17.75) {
      percentile = 95;
    } else {
      percentile = 100;
    }

    if (bmi < 15.5) {
      result = "Normal weight";
      if (bmi < 14) {
        result = "underweight";
      }
    } else if (bmi >= 15.5 && bmi < 17.5) {
      result = "normal weight";
      if (bmi >= 16.8) {
        result = "Overweight";
      }
    } else if (bmi >= 17.5 && bmi < 19.1) {
      if (bmi >= 17.5 && bmi <= 17.8) {
        result = "Overweight";
      } else if (bmi >= 17.8 && bmi <= 19.1) {
        result = "Moderate obesity";
      }
    } else if (bmi >= 19.1 && bmi < 25.8) {
      result = "Severe obesity";
    } else {
      result = "Extreme obesity";
    }
  }
  if (age === 5) {

    if (bmi <= 13.8) {
      percentile = 5;
    } else if (bmi <= 14.75) {
      percentile = 25;
    } else if (bmi <= 15.5) {
      percentile = 50;
    } else if (bmi <= 16.25) {
      percentile = 75;
    } else if (bmi <= 16.75) {
      percentile = 85;
    } else if (bmi <= 17.85) {
      percentile = 95;
    } else {
      percentile = 100;
    }



    if (bmi < 15.5) {
      result = "Normal weight";
      if (bmi <= 13.9) {
        result = "underweight";
      }
    } else if (bmi >= 15.5 && bmi < 17.5) {
      result = "normal weight";
      if (bmi >= 16.9) {
        result = "Overweight";
      }
    } else if (bmi >= 17.5 && bmi < 19.1) {
      if (bmi >= 17.5 && bmi <= 18) {
        result = "Overweight";
      } else if (bmi >= 16.9 && bmi <= 19.1) {
        result = "Moderate obesity";
      }
    } else if (bmi >= 19.1 && bmi < 25.8) {
      result = "Severe obesity";
    } else {
      result = "Extreme obesity";
    }
  }
  if (age === 6) {
    if (bmi <= 13.6) {
      percentile = 5;
    } else if (bmi <= 14.6) {
      percentile = 25;
    } else if (bmi <= 15.4) {
      percentile = 50;
    } else if (bmi <= 16.4) {
      percentile = 75;
    } else if (bmi <= 17) {
      percentile = 85;
    } else if (bmi <= 18.4) {
      percentile = 95;
    } else {
      percentile = 100;
    }



    if (bmi < 15.5) {
      result = "Normal weight";
      if (bmi <= 13.9) {
        result = "underweight";
      }
    } else if (bmi >= 15.5 && bmi < 17.5) {
      result = "normal weight";
      if (bmi >= 15.25) {
        result = "Overweight";
      }
    } else if (bmi >= 17.5 && bmi < 19.1) {
      if (bmi >= 17.5 && bmi <= 18.4) {
        result = "Overweight";
      } else if (bmi >= 18.4 && bmi <= 19.1) {
        result = "Moderate obesity";
      }
    } else if (bmi >= 19.1 && bmi < 25.8) {
      result = "Severe obesity";
    } else {
      result = "Extreme obesity";
    }
  }
  if (age === 7) {
    if (bmi <= 13.6) {
      percentile = 5;
    } else if (bmi <= 14.6) {
      percentile = 25;
    } else if (bmi <= 15.45) {
      percentile = 50;
    } else if (bmi <= 16.5) {
      percentile = 75;
    } else if (bmi <= 17.4) {
      percentile = 85;
    } else if (bmi <= 19) {
      percentile = 95;
    } else {
      percentile = 100;
    }

    
  }
  if (age === 8) {
 
      if (bmi <= 13.75) {
        percentile = 5;
      } else if (bmi <= 14.75) {
        percentile = 25;
      } else if (bmi <= 15.65) {
        percentile = 50;
      } else if (bmi <= 16.5) {
        percentile = 75;
      } else if (bmi <= 18) {
        percentile = 85;
      } else if (bmi <= 20) {
        percentile = 95;
      } else {
        percentile = 100;
      }


    if (bmi < 15.5) {
      result = "Normal weight";
      if (bmi <= 13.8) {
        result = "underweight";
      }
    } else if (bmi >= 15.5 && bmi < 17.5) {
      result = "normal weight";
    } else if (bmi >= 17.5 && bmi < 19.1) {
      result = "Overweight";
      if (bmi <= 18) {
        result = "normal weight";
      }
    } else if (bmi >= 19.1 && bmi < 25.8) {
      result = "Severe obesity";
    } else {
      result = "Extreme obesity";
    }
  }
  if (age === 9) {


    if (bmi <= 14) {
      percentile = 5;
    } else if (bmi <= 15) {
      percentile = 25;
    } else if (bmi <= 16.1) {
      percentile = 50;
    } else if (bmi <= 17.5) {
      percentile = 75;
    } else if (bmi <= 18.5) {
      percentile = 85;
    } else if (bmi <= 21) {
      percentile = 95;
    } else {
      percentile = 100;
    }
    if (bmi < 15.5) {
      result = "Normal weight";
      if (bmi <= 14) {
        result = "underweight";
      }
    } else if (bmi >= 15.5 && bmi < 17.5) {
      result = "normal weight";
    } else if (bmi >= 17.5 && bmi < 19.1) {
      result = "Overweight";

      if (bmi <= 18.5) {
        result = "normal weight";
      }
    } else if (bmi < 21) {
      result = "Overweight";
    } else if (bmi >= 19.1 && bmi < 25.8) {
      result = "Severe obesity";
    } else {
      result = "Extreme obesity";
    }
  }
  if (age === 10) {

    if (bmi <= 14.2) {
      percentile = 5;
    } else if (bmi <= 15.4) {
      percentile = 25;
    } else if (bmi <= 16.5) {
      percentile = 50;
    } else if (bmi <= 18.25) {
      percentile = 75;
    } else if (bmi <= 19.4) {
      percentile = 85;
    } else if (bmi <= 22) {
      percentile = 95;
    } else {
      percentile = 100;
    }

    if (bmi < 15.5) {
      result = "Normal weight";
      if (bmi <= 14.5) {
        result = "underweight";
      } else if (bmi >= 15.5 && bmi < 20) {
        result = "normal weight";
      }
    } else if (bmi < 23) {
      result = "Overweight";
    } else if (bmi >= 23 && bmi < 25.8) {
      result = "Severe obesity";
    } else {
      result = "Extreme obesity";
    }
  }
  if (age === 11) {
    if (bmi <= 14.5) {
      percentile = 5;
    } else if (bmi <= 15.9) {
      percentile = 25;
    } else if (bmi <= 17) {
      percentile = 50;
    } else if (bmi <= 19) {
      percentile = 75;
    } else if (bmi <= 20) {
      percentile = 85;
    } else if (bmi <= 23) {
      percentile = 95;
    } else {
      percentile = 100;
    }


    if (bmi < 15.5) {
      result = "Normal weight";
      if (bmi <= 14.5) {
        result = "underweight";
      }
    } else if (bmi >= 15.5 && bmi < 20) {
      result = "normal weight";
    } else if (bmi < 23) {
      result = "Overweight";
    } else if (bmi >= 23 && bmi < 25.8) {
      result = "Severe obesity";
    } else {
      result = "Extreme obesity";
    }
  }

  if (age === 12) {

      if (bmi <= 15) {
        percentile = 5;
      } else if (bmi <= 16.4) {
        percentile = 25;
      } else if (bmi <= 17.75) {
        percentile = 50;
      } else if (bmi <= 19.5) {
        percentile = 75;
      } else if (bmi <= 21) {
        percentile = 85;
      } else if (bmi <= 24.2) {
        percentile = 95;
      } else {
        percentile = 100;
      }


    if (bmi < 15.5) {
      result = "Normal weight";
      if (bmi <= 15) {
        result = "underweight";
      }
    } else if (bmi >= 15.5 && bmi < 21) {
      result = "normal weight";
    } else if (bmi < 23) {
      result = "Overweight";
    } else if (bmi >= 23 && bmi < 24) {
      result = "Severe obesity";
    } else {
      result = "Extreme obesity";
    }
  }
  if (age === 13) {

    if (bmi <= 15.5) {
      percentile = 5;
    } else if (bmi <= 17) {
      percentile = 25;
    } else if (bmi <= 18.5) {
      percentile = 50;
    } else if (bmi <= 20.5) {
      percentile = 75;
    } else if (bmi <= 21.75) {
      percentile = 85;
    } else if (bmi <= 25) {
      percentile = 95;
    } else {
      percentile = 100;
    }

    
    if (bmi <= 15.5) {
      result = "underweight";
    
    }else if (bmi >= 15.5 && bmi < 22) {
      result = "normal weight";
    } else if (bmi >= 22 && bmi < 25) {
      result = "Severe obesity";
    } else {
      result = "Extreme obesity";
    }
  }

  if (age === 14) {

    if (bmi <= 16) {
      percentile = 5;
    } else if (bmi <= 17.5) {
      percentile = 25;
    } else if (bmi <= 19) {
      percentile = 50;
    } else if (bmi <= 21) {
      percentile = 75;
    } else if (bmi <= 22.5) {
      percentile = 85;
    } else if (bmi <= 26) {
      percentile = 95;
    } else {
      percentile = 100;
    }


    if (bmi < 16) {
      result = "underweight";
    } else if (bmi >= 16 && bmi < 22.5) {
      result = "normal weight";
    } else if (bmi >= 22.5 && bmi < 26) {
      result = "overweight";
    } else {
      result = "Extreme obesity";
    }
  }
  if (age === 15) {

    if (bmi <= 16.5) {
      percentile = 5;
    } else if (bmi <= 18.25) {
      percentile = 25;
    } else if (bmi <= 19.75) {
      percentile = 50;
    } else if (bmi <= 22) {
      percentile = 75;
    } else if (bmi <= 23.5) {
      percentile = 85;
    } else if (bmi <= 26.9) {
      percentile = 95;
    } else {
      percentile = 100;
    }

      if (bmi <= 15) {
        percentile = 5;
      } else if (bmi <= 16.4) {
        percentile = 25;
      } else if (bmi <= 17.75) {
        percentile = 50;
      } else if (bmi <= 19.5) {
        percentile = 75;
      } else if (bmi <= 21) {
        percentile = 85;
      } else if (bmi <= 24.2) {
        percentile = 95;
      } else {
        percentile = 100;
      }

    if (bmi < 16.5) {
      result = "underweight";
    } else if (bmi >= 16.5 && bmi < 23.5) {
      result = "normal weight";
    } else if (bmi >= 23.5 && bmi < 26.8) {
      result = "overweight";
    } else {
      result = "Extreme obesity";
    }
  }
  if (age === 16) {

    if (bmi <= 17) {
      percentile = 5;
    } else if (bmi <= 18.8) {
      percentile = 25;
    } else if (bmi <= 20.5) {
      percentile = 50;
    } else if (bmi <= 22.5) {
      percentile = 75;
    } else if (bmi <= 24) {
      percentile = 85;
    } else if (bmi <= 27.5) {
      percentile = 95;
    } else {
      percentile = 100;
    }

    if (bmi < 17.6) {
      result = "underweight";
    } else if (bmi >= 17.6 && bmi < 25) {
      result = "normal weight";
    } else if (bmi >= 25 && bmi < 28) {
      result = "overweight";
    } else {
      result = "Extreme obesity";
    }
  }
  if (age === 17) {

    if (bmi <= 17.5) {
      percentile = 5;
    } else if (bmi <= 19.5) {
      percentile = 25;
    } else if (bmi <= 21.2) {
      percentile = 50;
    } else if (bmi <= 23.5) {
      percentile = 75;
    } else if (bmi <= 25) {
      percentile = 85;
    } else if (bmi <= 28) {
      percentile = 95;
    } else {
      percentile = 100;
    }

    if (bmi < 17.7) {
      result = "underweight";
    } else if (bmi >= 17.7 && bmi < 25) {
      result = "normal weight";
    } else if (bmi >= 25 && bmi < 28) {
      result = "overweight";
    } else {
      result = "Extreme obesity";
    }
  }
  if (age === 18) {


    if (bmi <= 18.25) {
      percentile = 5;
    } else if (bmi <= 20) {
      percentile = 25;
    } else if (bmi <= 22) {
      percentile = 50;
    } else if (bmi <= 24) {
      percentile = 75;
    } else if (bmi <= 25.5) {
      percentile = 85;
    } else if (bmi <= 28.75) {
      percentile = 95;
    } else {
      percentile = 100;
    }

    if (bmi < 18.25) {
      result = "underweight";
    } else if (bmi >= 18.25 && bmi < 25.5) {
      result = "normal weight";
    } else if (bmi >= 25.5 && bmi < 28.4) {
      result = "overweight";
    } else {
      result = "Extreme obesity";
    }
  }
  if (age === 19) {
    if (bmi <= 18.5) {
      percentile = 5;
    } else if (bmi <= 20.6) {
      percentile = 25;
    } else if (bmi <= 22.5) {
      percentile = 50;
    } else if (bmi <= 26.5) {
      percentile = 75;
    } else if (bmi <= 26.4) {
      percentile = 85;
    } else if (bmi <= 29.5) {
      percentile = 95;
    } else {
      percentile = 100;
    }

    if (bmi < 18.5) {
      result = "underweight";
    } else if (bmi >= 18.5 && bmi < 26.5) {
      result = "normal weight";
    } else if (bmi >= 26.5 && bmi < 29.5) {
      result = "overweight";
    } else {
      result = "Extreme obesity";
    }
  }
  if (age === 20) {
    if (bmi <= 19) {
      percentile = 5;
    } else if (bmi <= 21) {
      percentile = 25;
    } else if (bmi <= 23) {
      percentile = 50;
    } else if (bmi <= 25.5) {
      percentile = 75;
    } else if (bmi <= 26.75) {
      percentile = 85;
    } else if (bmi <= 30.5) {
      percentile = 95;
    } else {
      percentile = 100;
    }

    if (bmi < 19) {
      result = "underweight";
    } else if (bmi >= 19 && bmi < 27) {
      result = "normal weight";
    } else if (bmi >= 27 && bmi < 29.5) {
      result = "overweight";
    } else {
      result = "Extreme obesity";
    }
  }

document.getElementById("percentile").innerHTML = age + " years Top <span class = 'orange'>" + percentile +  " %</span> (" + result +  ") Top "+ percentile + "% means " + percentile  + "th place based on 100 people of the same age group, with number 1 from smallest to lowest."

  if (gender === "male") {
    maleBreakpoint.forEach((oneBreak, idx) => {
      var newLi = document.createElement("li");
      if (idx !== maleBreakpoint.length - 1) {
        var liWidth = ((maleBreakpoint[idx + 1] - oneBreak) * 100) / 24.5;
        newLi.style.width = liWidth.toFixed(2) + "%"; // Imposta lo stile width
      } else {
        // Imposta una larghezza predefinita per l'ultimo elemento
        newLi.style.width = "10%"; // Puoi modificare questa larghezza in base alle tue esigenze
      }

      // Crea gli elementi p, span e strong all'interno del li
      var newP = document.createElement("p");
      var newSpan = document.createElement("span");
      var newText = document.createTextNode(oneBreak); // Testo per il nodo span
      var newStrong = document.createElement("strong");
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
  }
  if (gender === "female") {
    femaleBreakpoint.forEach((oneBreakF, idx) => {
      // Crea un nuovo elemento li
      var newListItem = document.createElement("li");
      if (idx !== maleBreakpoint.length - 1) {
        liWidth = ((femaleBreakpoint[idx + 1] - oneBreakF) * 100) / 39;
        console.log(liWidth);
        newListItem.style.width = liWidth.toFixed(1) + "%";
      } else {
        newListItem.style.width = "7%";
      } // Imposta lo stile width
      // Imposta lo stile width con la percentuale

      // Crea gli elementi p, span e strong all'interno del li
      var newParagraph = document.createElement("p");
      var newSpan = document.createElement("span");
      var newText = document.createTextNode(oneBreakF); // Testo per il nodo span
      var newStrong = document.createElement("strong");
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
    arrow.style.width = "0%";
  } else if (bmi > 40) {
    arrow.style.width = "100%";
  }
  console.log(((bmi - 15.5) * 100) / 24.5);
  document.getElementById("result").innerText = bmi.toFixed(2); // Mostra il BMI arrotondato a due decimali
  healthGrade.innerHTML = "(" + result + ")";
  document.getElementById("results").style.display = "block";
}
