const display = document.getElementById("display");

function disp(input){
    if (display.value == "Error" || display.value == "undefined" 
       || display.value == "Infinity" ||  display.value == "0"){
        display.value = ""
    }
    display.value += input;
}

function disp0(input){
    if (!("%*-+/.".includes(display.value.slice(-1)))){
    display.value += input;
    }
}

function ClearDisplay(){
    display.value = "";
}

function polar(){
    if (display.value[0].includes("-")){ 
        display.value  = display.value.slice(1);
    }
    else {
        display.value = "-" + display.value;
    }
}

function destroy(){
    if (display.value != ""){
        display.value = display.value.slice(0, -1);; 
    }

}
function calculate(){
    if (display.value == "Error"){
        display.value = "0"
    }

    try {
        display.value = parseFloat((eval(display.value)).toFixed(6));
    }
    catch(error){
        display.value = "Error";
    }

    if (display.value == "undefined"){
        display.value = ""
    }    
}