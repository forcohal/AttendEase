let codeList = ["123", "Chem23", "maths45", "phy02", "oops09"];
let IDList = [1234, 4532, 46374];

function start() {
    let code = document.getElementById("code").value.trim();
    
    if (code === "") {
        alert("Please Enter The Code");
        return;
    }

    if (codeList.includes(code)) {
        alert("Attendance Started!!");
    } else {
        alert("Wrong code!");
    }
}

function end() {
    alert("Attendance Stopped!");
}

function present() {
    let idInput = document.getElementById("ID").value.trim();
    
    if (idInput === "") {
        alert("Please enter an ID");
        return;
    }

    let id = parseInt(idInput);
    
    if (isNaN(id)) {
        alert("Please enter a valid ID");
        return;
    }

    if (IDList.includes(id)) {
        alert("You Are Present!");
    } else {
        alert("Enter The Correct ID");
    }
}

function addStudents() {
    let newId = parseInt(document.getElementById("newID").value);
    
    if (isNaN(newId)) {
        alert("Please enter a valid ID");
        return;
    }

    if (IDList.includes(newId)) {
        alert("ID already exists!");
        return;
    }

    IDList.push(newId);
    console.log(IDList);
    alert("Student Added!");

    listBox();
}

function listBox() {
    let showList = document.querySelector(".listBox");
    showList.innerHTML = "";

    IDList.forEach(id => {
        let newText = document.createElement("p");
        newText.textContent = id;
        showList.appendChild(newText);
    });
}


document.addEventListener("DOMContentLoaded", listBox);
