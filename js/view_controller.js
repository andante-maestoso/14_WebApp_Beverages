
/* View- Controller */

/* Der Plan
    Einlesen Daten von Webseite :: 
	Check Daten :: 
    Btn. Trigger :: 
    Business-Logic (Alter --> Getränk) :: 
    Bild austauschen :: 
*/

//Trigger-Btn
let btn = document.getElementById("trigBtn");
btn.addEventListener("click", actOnClick);

//Trigger -Input
let field = document.getElementsByName("eingabe")[0];
field.addEventListener("input", isInputValid);




//Modul: Ablaufsteuerung
//controller();
function controller() {
    ausgabe(updateImg(checkAge(getInput())));
}

//Event-Dispatcher
function actOnClick () {
    if (isInputValid) {
        controller();
    } else{
        ausgabe("Input nicht korrekt!")
    }
}

function isInputValid() {
    let inputStr = field.value;
    let patt = /^[0-9]{1,3}$/g;
    let cond = patt.test(inputStr);
    if (!cond){
        field.value = "";
    }
    ausgabe(inputStr);
    return true;
}

//ausgabe(getInput());
function getInput(){
    let inputField = document.getElementsByName("eingabe")[0];
    let age = parseInt(inputField.value);
    return age;

}


//Modul: Business-Logic (Mapping)#
//ausgabe(checkAge(222));
function checkAge(age){

    switch (true) {
        case (age >= data.milk.lower) && (age <= data.milk.upper) :
            return data.milk.bev;
        case (age >= data.juice.lower) && (age <= data.juice.upper):
            return data.juice.bev;
        case (age >= data.cola.lower) && (age <= data.cola.upper):
            return data.cola.bev;
        case (age >= data.wine.lower) && (age <= data.wine.upper):
            return data.wine.bev;
        default:
            return data.default.bev;
    }
}


//Modul: Bild aktualisieren
//ausgabe(updateImg("cola"));
function updateImg(imgName){
    let img = document.getElementById("bevImg");
        img.src = gui.img.path + imgName + gui.img.ext;
    return imgName;
}


//Modul: Konsolenausgabe --> Test:
//ausgabe("test");
function ausgabe(outputStr) {
    console.log(outputStr);
}