const buttonForEmployee = document.querySelector(".buttonForEmployee");
const ForEmployeeContent = document.querySelector(".ForEmployeeContent");
const FirstApprovalReview = document.querySelector(".FirstApprovalReview");
const ForEmployeeArrow = document.querySelector("#ForEmployeeArrow");
const ForEmployeeArrowBtn = document.querySelector("#ForEmployeeArrowBtn");
const FirstApprovalReviewContent = document.querySelector(".FirstApprovalReviewContent");
const FirstApprovalReviewArrow = document.querySelector("#FirstApprovalReviewArrow");
const FirstApprovalReviewArrowBtn = document.querySelector("#FirstApprovalReviewArrowBtn");
const buttonForFirstApproval = document.querySelector(".buttonForFirstApproval");

ForEmployeeArrowBtn.addEventListener("click", () => {
    ForEmployeeContent.classList.toggle("active");
    ForEmployeeArrow.classList.toggle("active");
    FirstApprovalReview.classList.toggle("upMargin")
    FirstApprovalReviewContent.classList.toggle("upMargin")
    buttonForFirstApproval.classList.toggle("upMargin");
    if(!FirstApprovalReviewContent.classList.contains("active")){
        buttonForFirstApproval.classList.toggle("upMarginOnMargin");
    } else{
        buttonForFirstApproval.classList.toggle("upMarginButton");
    }

});
FirstApprovalReviewArrowBtn.addEventListener("click", () => {
    FirstApprovalReviewContent.classList.toggle("active");
    FirstApprovalReviewArrow.classList.toggle("active");
    if(buttonForFirstApproval.classList.contains("upMargin")){
        buttonForFirstApproval.classList.toggle("upMarginOnMargin");
    } else{
        buttonForFirstApproval.classList.toggle("upMarginButton");
    }
});

const btnSave = document.querySelector("#btnSave");
const btnReturn = document.querySelector(".btnReturn");
const overlayBoxForEmployee = document.querySelector(".overlayBoxForEmployee");
const boxReturnDanFirst = document.querySelector(".boxReturnDanFirst");
const boxSaveAsDraft = document.querySelector(".boxSaveAsDraft");
const boxReviewTure = document.querySelector(".boxReviewTure");
const boxReviewfalse = document.querySelector(".boxReviewfalse");


btnSave.addEventListener("click", () => {
    overlayBoxForEmployee.classList.add("active");
    boxSaveAsDraft.classList.add("active"); 
});
btnReturn.addEventListener("click", () => {
    overlayBoxForEmployee.classList.add("active");
    boxReturnDanFirst.classList.add("active"); 
});

overlayBoxForEmployee.addEventListener("click", () => {
    overlayBoxForEmployee.classList.remove("active");
    boxReviewTure.classList.remove("active");
    boxReviewfalse.classList.remove("active");
    boxSaveAsDraft.classList.remove("active");
    boxReturnDanFirst.classList.remove("active");
});


const FirstReturnDan = document.querySelectorAll(".FirstReturnDan input");
const BtnFirstReturn = document.querySelector(".BtnFirstReturn");

FirstReturnDan.forEach((input)=>{
    input.addEventListener("change", ()=>{
        
        const checkedCount = Array.from(FirstReturnDan).filter(input => input.checked).length;
        
        if (checkedCount >= 1) {
            BtnFirstReturn.classList.add("active")
        } else{
            BtnFirstReturn.classList.remove("active")
        }
    })
})



const addRowButtonSecond = document.querySelector('#addRowTablesecond');
const SectionBody = document.getElementById('secondSectionBody');

let rowCount = 3; // تأكد من أن هذا يعكس عدد الصفوف الموجودة

function toggleAddRowButton() {
    if (rowCount >= 5) {
        addRowButtonSecond.style.display = 'none';
    } else {
        addRowButtonSecond.style.display = 'block';
    }
}
addRowButtonSecond.addEventListener('click', () => {
    if (rowCount < 5) {
        rowCount++;
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${rowCount}</td>
            <td><textarea required placeholder="type Here" name="TypeofObjective" id="TypeofObjectivesecond${rowCount}"></textarea></td>
            <td><textarea required  placeholder="type Here" name="Objective" id="Objectivesecond${rowCount}"></textarea></td>
            <td>
                <div class="radioSecond${rowCount} radioSecond">
                    <form>
                        <div class="form-group">
                            <input type="radio" name="selfRating${rowCount}" id="ARatingradioSecond${rowCount}">
                            <label for="ARatingradioSecond${rowCount}">A-Very Good</label>
                        </div>
                        <div class="form-group">
                            <input type="radio" name="selfRating${rowCount}" id="BRatingradioSecond${rowCount}">
                            <label for="BRatingradioSecond${rowCount}">B-Good</label>
                        </div>
                        <div class="form-group">
                            <input type="radio" checked name="selfRating${rowCount}" id="CRatingradioSecond${rowCount}">
                            <label for="CRatingradioSecond${rowCount}">C-Average</label>
                        </div>
                        <div class="form-group">
                            <input type="radio" name="selfRating${rowCount}" id="DRatingradioSecond${rowCount}">
                            <label for="DRatingradioSecond${rowCount}">D-Below Average</label>
                        </div>
                        <div class="form-group">
                            <input type="radio" name="selfRating${rowCount}" id="ERatingradioSecond${rowCount}">
                            <label for="ERatingradioSecond${rowCount}">E-Unsatisfactory</label>
                        </div>
                    </form>
                </div>
            </td>
            <td><textarea required  placeholder="type Here" name="CommentsFromEmployee" id="CommentsFromEmployee${rowCount}second"></textarea></td>
            <td>
                <div class="buttonTableRowReview buttonTableRow d-flex justify-content-center flex-column">
                    <button class="btn btnTableRowReview " >Review</button>
                    <button class="btn btnTableRow" onclick="deleteRow(this)">Delete Row</button>
                </div>
            </td>
        `;
        SectionBody.appendChild(newRow);
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
    const rows = SectionBody.querySelectorAll('tr');
    rows.forEach((row, index) => {
        row.cells[0].innerText = index + 1; // تحديث رقم الصف
    });
}


const addRowTablethird = document.querySelector('#addRowTablethird');
const thirdSectionBody = document.getElementById('thirdSectionBody');

let rowCountthird = 3; // تأكد من أن هذا يعكس عدد الصفوف الموجودة

function toggleAddRowButtonThird() {
    if (rowCountthird >= 5) {
        addRowTablethird.style.display = 'none';
    } else {
        addRowTablethird.style.display = 'block';
    }
}
addRowTablethird.addEventListener('click', () => {
    if (rowCountthird < 5) {
        rowCountthird++;
        const newRowthird = document.createElement('tr');
        newRowthird.innerHTML = `
            <td><textarea required placeholder="type Here" name="TypeOfTraining" id="TypeOfTrainingthird${rowCountthird}"></textarea></td>
            <td><textarea required  placeholder="type Here" name="Description" id="Descriptionthird${rowCountthird}"></textarea></td>
            <td><textarea required  placeholder="type Here" name="Level" id="Levelthird${rowCountthird}"></textarea></td>
            <td><textarea required  placeholder="type Here" name="TargetDate" id="TargetDate${rowCountthird}third"></textarea></td>
            <td><textarea required  placeholder="type Here" name="CostOfThe" id="CostOfThe${rowCountthird}third"></textarea></td>
            <td>
                <div class="buttonTableRowReview buttonTableRow d-flex justify-content-center flex-column">
                    <button class="btn btnTableRow" onclick="deleteRowthird(this)">Delete Row</button>
                </div>
            </td>
        `;
        thirdSectionBody.appendChild(newRowthird);
    }
    toggleAddRowButtonThird();
});

function deleteRowthird(button) {
    const row = button.closest('tr');
    const rowIndex = row.cells[0].innerText; // الحصول على رقم الصف
    
    if (rowCountthird > 3){
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
                rowCountthird--;
                toggleAddRowButtonThird();
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
const btnReview = document.querySelector("#btnReview");

btnReview.addEventListener("click", () => {
    overlayBoxForEmployee.classList.add("active");

    // تحديث قائمة الـ textarea في كل مرة يتم فيها النقر على الزر
    boxTableSecond = document.querySelectorAll("#second_Section_For_Employee table textarea");
    boxTableThird = document.querySelectorAll("#third_Section_For_Employee table textarea");

    let allFilled = true;

    boxTableSecond.forEach((textarea, index) => {
        if (textarea.value.trim() === "") {
            textarea.style.border = "2px solid #e1322d"; // تغيير الحدود إلى الأحمر
            allFilled = false;
        } else {
            textarea.style.border = "2px solid #0F3464"; 
        }
    });

    boxTableThird.forEach((textarea, index) => {
        if (textarea.value.trim() === "") {
            textarea.style.border = "2px solid #e1322d"; // تغيير الحدود إلى الأحمر
            allFilled = false;
        } else {
            textarea.style.border = "2px solid #0F3464"; 
        }
    });

    if (allFilled) {
        boxReviewTure.classList.add("active");
    } else {
        boxReviewfalse.classList.add("active");
    }
});