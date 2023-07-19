/*/



Empty space up here so code is more in the middle.
Easier on the eyes.



/*/
function isEmpty(IsEmptyTarget){ /*/ This function checks if the function parameter(IsEmptyTarget) is empty. /*/
    if (IsEmptyTarget.value == null || IsEmptyTarget.value == ""){ //Checks if the target is empty
        console.log(IsEmptyTarget, "Empty") //--Debug
        return false; //Returns the bool value of False
    }else{
        console.log(IsEmptyTarget, "Filled") //--Debug
        return true; //Returns the bool value of True
    }
}

function BMI_calculation(){ // Calculation function. When ran, it will calculate the inputs if there any.
    var calcForm = document.forms["form-calculatorInputs"] // Variables to make code more organized
    var textBMIResultNum = document.getElementById("text-resultNumber")
    var textBMIResult_Kelamin = document.getElementById("text-resultKelamin")
    if ( /*/ This checks whether the inputs are empty or not. It works by calling the function "IsEmpty(target)" /*/
        isEmpty(calcForm.elements["inputRadio-kelamin"]) &&
        isEmpty(calcForm.elements["inputNumber-beratBadan"]) &&
        isEmpty(calcForm.elements["inputNumber-usiaTahun"]) &&
        isEmpty(calcForm.elements["inputNumber-tingiBadan"])
        ){ // vvv If the code detect that the form is filled.
        BMI_reset() //Reset function to clear the results and form before doing another calculation. Just in case.
        console.log("Form Filled") //--Debug
        console.log("Caluclation started.") //--Debug

        // Result Variables, takes the value of the elements.
        var kelamin = calcForm.elements["inputRadio-kelamin"].value
        var beratBadan = calcForm.elements["inputNumber-beratBadan"].value
        var usiaTahun = calcForm.elements["inputNumber-usiaTahun"].value
        var tingiBadan = calcForm.elements["inputNumber-tingiBadan"].value
        var calcResultNum = 0
        var calcResultKelamin = kelamin

        console.log(beratBadan) //--Debug
        console.log(tingiBadan) //--Debug
        console.log("BMI result: ", calcResultNum) //--Debug

        // BMI calculator formula.
        calcResultNum = ((parseInt(beratBadan)) / (parseInt(tingiBadan) * parseInt(tingiBadan) / 10000)).toFixed(1)
        textBMIResultNum.innerHTML = calcResultNum //Changes the text, adding the calculation result number.
        document.getElementById("calc-emptyWarnText").innerHTML="" //Sets the emptyWarnText to empty in case it's filled
        textBMIResult_Kelamin.innerHTML = BMI_resultKelamin(calcResultKelamin) //Add the Kelamin value under the result

        BMI_resultDesc(calcResultNum) //Calls the BMI_resultDesc function which does the work to add the description.

    }else{ // vvv Else. If the code doesn't detect that the form is filled.
        console.log("Empty") //--Debug
        document.getElementById("calc-emptyWarnText").innerHTML="Mohon isi semua input."
    }
}

function BMI_reset(){ // Resets the BMI calculator and remove some calculation result texts.
    var calcForm = document.forms["form-calculatorInputs"]
    var textBMIResultNum = document.getElementById("text-resultNumber").innerHTML=""
    var textBMIResultDesc = document.getElementById("text-resultDesc")
    document.getElementById("calc-emptyWarnText").innerHTML=""
    textBMIResultDesc.innerHTML=""
    document.getElementById("text-resultKelamin").innerHTML=""
} //a

function BMI_resultDesc(BMIscore){ // This sets the result description according to the score
    if (BMIscore < 18.5){ // Kekurangan
        var textBMIResultNum = document.getElementById("text-resultNumber") //These changes the text
        var textBMIResultDesc = document.getElementById("text-resultDesc")
       //console.log(BMIscore) //--Debug
        textBMIResultDesc.innerHTML = "Anda kekurangan berat badan."
    } else if (BMIscore >= 18.5 && BMIscore <= 24.9){ // Ideal
        var textBMIResultNum = document.getElementById("text-resultNumber")
        var textBMIResultDesc = document.getElementById("text-resultDesc")
       //console.log(BMIscore) //--Debug
        textBMIResultDesc.innerHTML = "Berat badan anda normal (ideal)."
    } else if (BMIscore >= 25.0 && BMIscore <= 29.9){ // Kelebihan
        var textBMIResultNum = document.getElementById("text-resultNumber")
        var textBMIResultDesc = document.getElementById("text-resultDesc")
       //console.log(BMIscore) //--Debug
        textBMIResultDesc.innerHTML = "Anda kelebihan berat badan."
    } else if (BMIscore >= 30){ // Kelebihan
        var textBMIResultNum = document.getElementById("text-resultNumber")
        var textBMIResultDesc = document.getElementById("text-resultDesc")
       //console.log(BMIscore) //--Debug
        textBMIResultDesc.innerHTML = "Anda kegemukan (obesitas)."
    }
}
function BMI_resultKelamin(inputRadioKel_Chosen){ // This gets the inputRadioKelamin value and adds the text
    if (inputRadioKel_Chosen.includes("pria")){ //If it detects the letters "pria" in the radio value
        return "Kelamin: Laki-Laki"
    } else if (inputRadioKel_Chosen.includes("wanita")){ // If it detects the letters "wanita" in the radio value
        return "Kelamin: Wanita"
    }
}

function img_toggle(targetimg){ // Unused
    console.log("Button Pressed") //--Debug
    var targetimg_target = document.getElementById(targetimg)
    if (targetimg_target.style.display == "hidden"){
        targetimg_target.style.display = "block"
    }else{
        targetimg_target.style.display = "hidden"
    }
}




/*/ 
    javascript.js!
    Newlines help me read the code easier, but sometimes I overdo it and it ends up making the code harder to read.

    These comments doesn't really serve any major purpose. I'm just writing random stuff until I can figure out 
    what features I should add and how to add it..
    Update: BMI result descriptions has been added.
/*/
