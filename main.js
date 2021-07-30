
let ele = document.querySelectorAll(".btn"); 
 
function calculate() {
    let bill = parseFloat(document.querySelector("#bill").value);
        let people = parseFloat(document.querySelector("#people").value); 
        let custom = parseInt(document.querySelector("#btn-6").value);
        let tipPerPerson =   document.querySelector("#tip-per-person");
        let totalPerPerson =   document.querySelector("#total-per-person");
        if(custom) {
            clearRadioBtn();
            let totalTip = Number.parseFloat(((custom / 100) * bill));
            tipPerPerson.textContent = Number.parseFloat(totalTip / people).toFixed(2); 
            totalPerPerson.textContent = Number.parseFloat((totalTip + bill) / people).toFixed(2);  
        }  else{ 
        let tip = document.querySelector('input[name = "tip"]:checked').value; 
        tipPerPerson.textContent = Number.parseFloat(((tip * bill) - bill) / people).toFixed(2); 
        totalPerPerson.textContent = Number.parseFloat((tip * bill) / people).toFixed(2)
        }
}

 
function reset() { 
    document.querySelector("#bill").value = ""; 
    document.querySelector("#people").value = "";
    document.querySelector("#btn-6").value = "";
    document.querySelector("#tip-per-person").textContent = '$0.00';
    document.querySelector("#total-per-person").textContent = '$0.00';
    clearRadioBtn();
}

const clearRadioBtn = () => {
    for(var i=0;i<ele.length;i++){
       ele[i].checked = false; 
    }
};
  


 