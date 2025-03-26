const select_Year = document.querySelector("#Year");
const select_Board = document.querySelector("#Board");
const select_Examination =document.querySelector("#examination");

const YearImgdc = document.querySelector("#YearImgdc");
const BoardImg = document.querySelector("#BoardImg");
const examinationImg =document.querySelector("#examinationImg");

let Year =document.querySelector(".Year");
let Board =document.querySelector(".Board");
let Examination =document.querySelector(".Examination");


let YearNone = Examination.style.display="none"
let YearBlock = "none"

let qus = document.querySelector(".qus");
let fas = document.querySelector("#fas");
let sec = document.querySelector("#sec");

let random = Math.floor(Math.random()*9)+1
let Random = Math.floor(Math.random()*9)+1

fas.innerText=random;
sec.innerText=Random;


let randomNumber = random+Random;
function InputNumber(){
    let inputNumber = document.querySelector(".inputNumber").value;
    let number = parseInt(inputNumber);
    let rengNo = document.querySelector(".rengNo").value;
    let roll = document.querySelector(".roll").value;
    let box = document.querySelector(".min .box")
    let result =document.querySelector(".result")
    let icaq = document.querySelector(".parconal h1 #icaq");
    let date = document.querySelector(".parconal h1 #date");

    const Examination = document.querySelector("#examination").textContent;
    const Year = document.querySelector("#Year").textContent;


    let yourRoll = document.querySelector("#yourRoll").innerText;


    if(randomNumber === number &&  yourRoll === roll){
        box.style.display="none";
        result.style.display="block";

        let MADRASAH = document.querySelector(".MADRASAH");
        let SCHOOL = document.querySelector(".SCHOOL");
        let Board = select_Board.innerText;

        if(Board === "Madrasah"){
            MADRASAH.style.display="block"
            SCHOOL.style.display="none"

        }
        
        else{
            MADRASAH.style.display="none"
            SCHOOL.style.display="block"

        }


        icaq.innerHTML=Examination;
        date.innerHTML=Year;


    }
    else{
        alert("Please Select Board!")
    }

    
    if(rengNo === "edit"){
        let edit = document.querySelector(".result #button #edit");
        let save = document.querySelector(".result #button #save");
        let delet = document.querySelector(".result #button #delet");
        edit.style.display="block";
        save.style.display="block";
        delet.style.display="block";
        box.style.display="none";
        result.style.display="block";

    }
}




select_Year.addEventListener("click", ()=>{

    if(examinNone === YearBlock){
        Year.style.display="block"
        YearBlock = "block"
        Examination.style.display="none"
        Board.style.display="none"
    }else{
        Year.style.display="none"
        YearBlock = "none"
    }
});


YearImgdc.addEventListener("click", ()=>{

    if(examinNone === YearBlock){
        Year.style.display="block"
        YearBlock = "block"
        Examination.style.display="none"
        Board.style.display="none"
    }else{
        Year.style.display="none"
        YearBlock = "none"
    }
});


let BoardNone = Examination.style.display="none"
let BoardBlock = "none"

select_Board.addEventListener("click", ()=>{

    if(BoardNone === BoardBlock){
        Board.style.display="block"
        BoardBlock = "block"
        Year.style.display="none"
        Examination.style.display="none"

    }else{
        Board.style.display="none"
        BoardBlock = "none"
    }
});

BoardImg.addEventListener("click", ()=>{

    if(BoardNone === BoardBlock){
        Board.style.display="block"
        BoardBlock = "block"
        Year.style.display="none"
        Examination.style.display="none"

    }else{
        Board.style.display="none"
        BoardBlock = "none"
    }
});
let examinNone = Examination.style.display="none"
let examinBlock = "none"

select_Examination.addEventListener("click", ()=>{

    if(examinNone === examinBlock){
        Examination.style.display="block"
        examinBlock = "block"
        Year.style.display="none"
        Board.style.display="none"
    }else{
        Examination.style.display="none"
        examinBlock = "none"
    }
});

examinationImg.addEventListener("click", ()=>{

    if(examinNone === examinBlock){
        Examination.style.display="block"
        examinBlock = "block"
        Year.style.display="none"
        Board.style.display="none"
    }else{
        Examination.style.display="none"
        examinBlock = "none"
    }
});


let YearP = document.querySelectorAll(".Year p");

YearP.forEach(yearp => {
    yearp.addEventListener("click", function() {
        select_Year.innerText = this.innerText;
        Year.style.display="none"

    })    
});


let BoardP = document.querySelectorAll(".Board p");

BoardP.forEach(boardp => {
    boardp.addEventListener("click",function() {
        select_Board.innerText=this.innerText;
        Board.style.display="none"  


    })
});

let examP = document.querySelectorAll(".Examination p");

examP.forEach(ExamP => {
    ExamP.addEventListener("click", function() {
        select_Examination.innerText=this.innerText;
        Examination.style.display="none"
    });
});


document.addEventListener("DOMContentLoaded", function () {
    let editTd = document.querySelectorAll("table td");
    let savebtn = document.querySelector("#save");
    let deletbtn = document.querySelector("#delet");
    let edit = document.querySelector("#edit");

    // পূর্বে সংরক্ষিত ডাটা লোড করা
    editTd.forEach(field => {
        let savedata = localStorage.getItem(field.id);
        if (savedata) {
            field.innerText = savedata;
        }
        field.setAttribute("contenteditable", "false"); // প্রথমে ইডিট বন্ধ থাকবে
    });

    // "Edit" বাটনে ক্লিক করলে সব td ইডিটেবল হবে
    edit.addEventListener("click", function () {
        console.log("Editing enabled");
        editTd.forEach(field => {
            field.setAttribute("contenteditable", "true");
        });
    });

    // "Save" বাটনে ক্লিক করলে ডাটা localStorage-এ সংরক্ষণ করা হবে
    savebtn.addEventListener("click", function () {
        editTd.forEach(field => {
            if (field.id) { // যদি td-এর ID থাকে তাহলে সেট করুন
                localStorage.setItem(field.id, field.innerText);
            }
        });
        alert("Data Saved Successfully!");
    });

    // "Delete" বাটনে ক্লিক করলে localStorage ক্লিয়ার হবে এবং পেজ রিফ্রেশ হবে
    deletbtn.addEventListener("click", function () {
        localStorage.clear();
        location.reload();
    });
});














// function edits(){
//     console.log("edit")
//     document.addEventListener("DOMContentLoaded", function(){
//         let editTd = document.querySelectorAll("table td");
//         let savebtn = document.querySelector("#save");
//         let deletbtn = document.querySelector("#delet");

//         editTd.forEach(field => {
//             let savedata = localStorage.getItem(field.id);
//             if (savedata) {
//                 field.innerText = savedata;
//             }
//             field.setAttribute("contenteditable", "true");
//         });

//         savebtn.addEventListener("click" , function() {
//             editTd.forEach(field =>{
//                 localStorage.getItem(field.id, field.innerText);
//             });
//             alert("Save");
//         });

//         deletbtn.addEventListener("click", function(){
//             localStorage.clear();
//             localStorage.reload();
//         })
//     }); 

// }



// function selectYear(){
//     Year.style.display="none";
//     Board.style.display="none";
//     Examination.style.display="block";
//     console.log("select_Year")
// }


// select_Examination.addEventListener("click", ()=> {
//     Year.style.display="none";
//     Board.style.display="none";
//     Examination.style.display="block";
//     console.log("select_Examination")
// })

// select_Examination.addEventListener("click",function(){
//     Examination.classList.toggle("")
// })
