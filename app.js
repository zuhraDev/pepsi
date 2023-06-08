function calculateBmi() {
    const name = document.getElementById("name");
    const weightVal = document.getElementById("weight");
    const heightVal = document.getElementById("height");
    const result = document.querySelector("#result");
    const natija = document.querySelector("#natija");

    const weight = parseFloat(weightVal.value);
    const height = parseFloat(heightVal.value);

    let bmi = (weight / (height * height)).toFixed(2);
    result.textContent = `${name.value} your Bmi is ${bmi}`;
    
    console.log(bmi);

    if(bmi >= 20) {
        console.log("You are fat");
        natija.innerHTML = "You are fat"
    } else {
        console.log("You are not fat");
        
        natija.textContent = "You are not fat"
    }
}