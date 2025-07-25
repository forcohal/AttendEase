const codeList = ["123", "Chem23", "maths45", "phy02", "oops09"];
const IDList = [1234, 4532, 46374];

function test2() {
    console.log("Test 2 is working");
}
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



