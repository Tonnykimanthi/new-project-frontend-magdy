const inputs = document.querySelectorAll(".filter_section input");

inputs.forEach((input)=>{
    input.addEventListener("change", ()=>{
        if(input.value.length > 0){
            input.classList.add("fill")
        } else{
            input.classList.remove("fill")
        }
    })
})


const filterLinks = document.querySelectorAll(".table_section ul li");

filterLinks.forEach((filterLink) => {
    filterLink.addEventListener("click", () => {
        filterLinks.forEach(link => link.classList.remove("active"));
        filterLink.classList.add("active");
    });
});
const EvaluatedRows = document.querySelectorAll(".table_section .Evaluated");
const ReturnedRows = document.querySelectorAll(".table_section .Returned");
const PendingRows = document.querySelectorAll(".table_section .Pending");

function hidnRows(){
    EvaluatedRows.forEach(row => row.style.display = "none");
    ReturnedRows.forEach(row => row.style.display = "none");
    PendingRows.forEach(row => row.style.display = "none");
}
function showAllRows() {
    EvaluatedRows.forEach(row => row.style.display = "table-row");
    ReturnedRows.forEach(row => row.style.display = "table-row");
    PendingRows.forEach(row => row.style.display = "table-row");
}
function showPendingRows() {
    hidnRows();
    PendingRows.forEach(row => row.style.display = "table-row");
}
function showReturnedRows() {
    hidnRows();
    ReturnedRows.forEach(row => row.style.display = "table-row");
}
function showEvaluatedRows() {
    hidnRows();
    EvaluatedRows.forEach(row => row.style.display = "table-row");
}

const oneBox = document.querySelector(".oneBox");
const twoBox = document.querySelector(".twoBox");
const treeBox = document.querySelector(".treeBox");
const overlay = document.querySelector(".overlay");

function control(BoxName){
    BoxName.classList.add("active");
    overlay.classList.add("active")
}
function overlayBoxTable(){
    oneBox.classList.remove("active");
    twoBox.classList.remove("active");
    treeBox.classList.remove("active");
    overlay.classList.remove("active")
}
const returnDan = document.querySelector(".returnDan");
const returnsta = document.querySelector(".returnsta");
const CancelBoxBtn = document.querySelector(".CancelBoxBtn");
const overlayBoxReturnDan = document.querySelector(".overlayBoxReturnDan");
const boxReturnDan = document.querySelector(".boxReturnDan");
const boxReturnsta = document.querySelector(".boxReturnsta");
const boxCancelDan = document.querySelector(".boxCancelDan");
const cancelDan = document.querySelector(".cancelDan");
const ReasonBtn = document.querySelector(".ReasonBtn");
const CancelBtn = document.querySelector(".CancelBtn");

returnDan.addEventListener("click", ()=>{
    overlayBoxReturnDan.classList.add("active");
    boxReturnDan.classList.add("active")
})
returnsta.addEventListener("click", ()=>{
    overlayBoxReturnDan.classList.add("active");
    boxReturnsta.classList.add("active")
})
CancelBtn.addEventListener("click", ()=>{
    overlayBoxReturnDan.classList.add("active");
    boxCancelDan.classList.add("active")
})
overlayBoxReturnDan.addEventListener("click", ()=>{
    overlayBoxReturnDan.classList.remove("active");
    boxReturnDan.classList.remove("active")
    boxReturnsta.classList.remove("active")
    boxCancelDan.classList.remove("active")
})


const FormboxDan = document.querySelectorAll(".FormboxDan input");
const FormboxCancelDan = document.querySelectorAll(".FormboxCancelDan input");

FormboxDan.forEach((input)=>{
    input.addEventListener("change", ()=>{
        
        const checkedCount = Array.from(FormboxDan).filter(input => input.checked).length;
        
        if (checkedCount >= 1) {
            ReasonBtn.classList.add("active")
        } else{
            ReasonBtn.classList.remove("active")
        }
    })
})
FormboxCancelDan.forEach((input)=>{
    input.addEventListener("change", ()=>{
        
        const checkedCount = Array.from(FormboxCancelDan).filter(input => input.checked).length;
        
        if (checkedCount >= 1) {
            CancelBoxBtn.classList.add("active")
        } else{
            CancelBoxBtn.classList.remove("active")
        }
    })
})
