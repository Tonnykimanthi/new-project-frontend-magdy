const buttonForEmployee = document.querySelector(".buttonForEmployee");
const ForEmployeeContent = document.querySelector(".ForEmployeeContent");
const ForEmployeeArrow = document.querySelector("#ForEmployeeArrow");
const ForEmployeeArrowBtn = document.querySelector("#ForEmployeeArrowBtn");

ForEmployeeArrowBtn.addEventListener("click", () => {
    buttonForEmployee.classList.toggle("active");
    ForEmployeeContent.classList.toggle("active");
    ForEmployeeArrow.classList.toggle("active");
});


const radioApproval = document.querySelectorAll(".first_Section_For_Employee .title_section input");
const twoApprovalSelect = document.querySelector("#twoApprovalSelect");
const oneApprovalSelect = document.querySelector("#oneApprovalSelect");

radioApproval.forEach( (radioSelect) => {
    radioSelect.addEventListener(("change") , ()=>{
        if(radioApproval[1].checked){
            oneApprovalSelect.classList.add("active");
            twoApprovalSelect.classList.add("active");
        } else{
            oneApprovalSelect.classList.remove("active");
            twoApprovalSelect.classList.remove("active");
        }
    } )
})

const openBoxReturn = document.querySelector(".openBoxReturn");
const overlayReturnReasonsSta = document.querySelector(".overlayReturnReasonsSta");
const boxReturnReasonsta = document.querySelector(".boxReturnReasonsta");

openBoxReturn.addEventListener(("click") , ()=>{
    overlayReturnReasonsSta.classList.add("active");
    boxReturnReasonsta.classList.add("active");
})
overlayReturnReasonsSta.addEventListener(("click") , ()=>{
    overlayReturnReasonsSta.classList.remove("active");
    boxReturnReasonsta.classList.remove("active");
})

const btnSave = document.querySelector("#btnSave");
const btnReview = document.querySelector("#btnReview");
const overlayBoxForEmployee = document.querySelector(".overlayBoxForEmployee");
const boxSaveAsDraft = document.querySelector(".boxSaveAsDraft");
const boxReviewTure = document.querySelector(".boxReviewTure");
const boxReviewfalse = document.querySelector(".boxReviewfalse");
btnReview.addEventListener(("click") , ()=>{
    overlayBoxForEmployee.classList.add("active");
    
    boxTableSecond = document.querySelectorAll(".second_Section_For_Employee table textarea");
    boxTableSecondinput = document.querySelectorAll(".second_Section_For_Employee table input");

    let allFilled = true;
    let totalWeighting = 0; 

    boxTableSecond.forEach((textarea, index) => {
        if (textarea.value.trim() === "") {
            textarea.style.border = "2px solid #e1322d"; // تغيير الحدود إلى الأحمر
            allFilled = false;
        } else {
            textarea.style.border = "2px solid #0F3464"; 
        }
    });

    boxTableSecondinput.forEach((input, index) => {
        if (input.value.trim() === "") {
            input.style.border = "2px solid #e1322d"; 
            allFilled = false;
        } else {
            input.style.border = "2px solid #0F3464"; 
            totalWeighting += parseFloat(input.value) || 0; // جمع القيم
        }
    });


    if(totalWeighting === 100){
        boxTableSecondinput.forEach(input => {
            input.style.border = "2px solid #0F3464"; 
        });
    } else{
        boxTableSecondinput.forEach(input => {
            input.style.border = "2px solid #e1322d"; 
        });
    }

    if (allFilled && totalWeighting === 100) {
        boxReviewTure.classList.add("active");
    } else {
        boxReviewfalse.classList.add("active");
    }
});


btnSave.addEventListener(("click") , ()=>{
    overlayBoxForEmployee.classList.add("active");
    boxSaveAsDraft.classList.add("active"); 
})
overlayBoxForEmployee.addEventListener(("click") , ()=>{
    overlayBoxForEmployee.classList.remove("active");
    boxReviewTure.classList.remove("active");
    boxReviewfalse.classList.remove("active");
    boxSaveAsDraft.classList.remove("active");
})

const addRowButton = document.getElementById('addRowButton');
const objectiveBody = document.getElementById('objectiveBody');

let rowCount = 3; // تأكد من أن هذا يعكس عدد الصفوف الموجودة

function toggleAddRowButton() {
    if (rowCount >= 5) {
        addRowButton.style.visibility = 'hidden';
    } else {
        addRowButton.style.visibility = 'visible';
    }
}
addRowButton.addEventListener('click', () => {
    if (rowCount < 5) {
        rowCount++;
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${rowCount}</td>
            <td><textarea required placeholder="Enter text here" name="TypeofObjective" id="TypeofObjective${rowCount}"></textarea></td>
            <td><textarea required placeholder="Enter text here" name="Objective" id="Objective${rowCount}"></textarea></td>
            <td><textarea required placeholder="Enter text here" name="ResultsExpected" id="ResultsExpected${rowCount}"></textarea></td>
            <td><input placeholder="Enter number here" type="number" name="Weighting" id="Weighting${rowCount}"></td>
            <td><textarea required placeholder="Enter text here" name="CommentsFromEmployee" id="CommentsFromEmployee${rowCount}"></textarea></td>
            <td>
                <div class="buttonTableRow">
                    <button class="btn btnTableRow" onclick="deleteRow(this)">Delete Row</button>
                </div>
            </td>
        `;
        objectiveBody.appendChild(newRow);
    }
    toggleAddRowButton();
});

function deleteRow(button) {
    const row = button.closest('tr');
    const rowIndex = row.cells[0].innerText; // الحصول على رقم الصف
    
    if (rowCount > 3){
        Swal.fire({
            title: 'Are you sure?',
            text: `Do you really want to delete row ${rowIndex}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                row.remove(); // حذف الصف
                rowCount--;
                reorderRows();
                toggleAddRowButton();
                Swal.fire('Deleted!', 'Your row has been deleted.', 'success');
            }
        });
    } else{
        Swal.fire({
            title: 'It is not Possible',
            text: `Minimum number of rows: 3`,
            icon: 'Danger',
            confirmButtonColor: '#f06561',
            confirmButtonText: 'Cancel'
        })
    }
}
function reorderRows() {
    const rows = objectiveBody.querySelectorAll('tr');
    rows.forEach((row, index) => {
        row.cells[0].innerText = index + 1; // تحديث رقم الصف
    });
}
