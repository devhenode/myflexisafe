let myArray = ["Henry", "devodehenry.2000@gmail.com", "Frontend", "Advanced"];
let text = "";

document.getElementById("btn").addEventListener("click", displayArray);
document.getElementById("show").addEventListener("click", showInFront);
document.getElementById("front").innerHTML = text;


function displayArray() {
    console.log(myArray);
}

function showInFront() {
    text = "";
    myArray.forEach(item => {
        text += item + "<br>";
    });
    document.getElementById("front").innerHTML = text;
}


