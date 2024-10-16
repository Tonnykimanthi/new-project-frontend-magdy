const ForEmployeeContent = document.querySelector(".ForEmployeeContent");
const ForEmployeeArrow = document.querySelector("#ForEmployeeArrow");
const ForEmployeeArrowBtn = document.querySelector("#ForEmployeeArrowBtn");
const FirstApprovalReview = document.querySelector(".FirstApprovalReview");
const FirstApprovalReviewContent = document.querySelector(".FirstApprovalReviewContent");
const FirstApprovalReviewArrow = document.querySelector("#FirstApprovalReviewArrow");
const FirstApprovalReviewArrowBtn = document.querySelector("#FirstApprovalReviewArrowBtn");
const SecondApprovalReview = document.querySelector(".SecondApprovalReview");
const SecondApprovalReviewContent = document.querySelector(".SecondApprovalReviewContent");
const SecondApprovalReviewArrow = document.querySelector("#SecondApprovalReviewArrow");
const SecondApprovalReviewArrowBtn = document.querySelector("#SecondApprovalReviewArrowBtn");
const buttonForFirstApproval = document.querySelector(".buttonForFirstApproval");

ForEmployeeArrowBtn.addEventListener("click", () => {
    ForEmployeeContent.classList.toggle("active");
    ForEmployeeArrow.classList.toggle("active");
    FirstApprovalReview.classList.toggle("upMargin")
    FirstApprovalReviewContent.classList.toggle("upMargin");
    if(!FirstApprovalReviewContent.classList.contains("active")){
        SecondApprovalReview.classList.toggle("upMarginOnMargin");
        SecondApprovalReviewContent.classList.toggle("upMarginOnMargin");
        buttonForFirstApproval.classList.toggle("upMarginOnMarginFirst");
        SecondApprovalReview.classList.toggle("upMarginButton");
        SecondApprovalReviewContent.classList.toggle("upMarginButton");
        if(SecondApprovalReviewContent.classList.contains("active")){
            buttonForFirstApproval.classList.toggle("upMarginOnFirst");
        } else {
            buttonForFirstApproval.classList.toggle("upMarginOnFirstOnOneTrueTwoFalse");
        }
    } else{
        SecondApprovalReview.classList.toggle("upMargin");
        SecondApprovalReviewContent.classList.toggle("upMargin");
        if(SecondApprovalReviewContent.classList.contains("active")){
            buttonForFirstApproval.classList.toggle("upMargin");
        } else {
            buttonForFirstApproval.classList.toggle("upMarginOnFirstOnTwoTrue");
        }
    }

});
FirstApprovalReviewArrowBtn.addEventListener("click", () => {
    FirstApprovalReviewContent.classList.toggle("active");
    FirstApprovalReviewArrow.classList.toggle("active");
    if(!ForEmployeeContent.classList.contains("active")){
        SecondApprovalReview.classList.toggle("upMarginButton")
        SecondApprovalReviewContent.classList.toggle("upMarginButton")
        if(!SecondApprovalReviewContent.classList.contains("active")){
            buttonForFirstApproval.classList.toggle("upMarginOnMarginFirst");
            buttonForFirstApproval.classList.toggle("upMarginOnFirstOnTwoFalse");
            buttonForFirstApproval.classList.toggle("upMarginOnFirst");
        } else{
            buttonForFirstApproval.classList.toggle("upMarginOnFirst");
        }
    } else{
        SecondApprovalReview.classList.toggle("upMarginOnMargin");
        SecondApprovalReviewContent.classList.toggle("upMarginOnMargin");
        buttonForFirstApproval.classList.toggle("upMarginOnMarginFirst");
        SecondApprovalReview.classList.toggle("upMargin");
        SecondApprovalReviewContent.classList.toggle("upMargin");
        if(!SecondApprovalReviewContent.classList.contains("active")){
            buttonForFirstApproval.classList.toggle("upMarginOnFirstOnTwoTrue");
            buttonForFirstApproval.classList.remove("upMarginOnFirstOnOneFalseTwoTrue");
        } else{
            buttonForFirstApproval.classList.toggle("upMarginOnFirstOnOneFalseTwoTrue");
        }
    }
});
SecondApprovalReviewArrowBtn.addEventListener(("click"), () =>{
    SecondApprovalReviewContent.classList.toggle("active");
    SecondApprovalReviewArrow.classList.toggle("active");
    if(!ForEmployeeContent.classList.contains("active") && !FirstApprovalReviewContent.classList.contains("active")){
        buttonForFirstApproval.classList.toggle("upMarginOnFirstOnTwoFalse");

    } else if  (ForEmployeeContent.classList.contains("active") && !FirstApprovalReviewContent.classList.contains("active")){
        buttonForFirstApproval.classList.toggle("upMarginOnFirstOnOneTrueTwoFalse");
        buttonForFirstApproval.classList.remove("upMarginOnFirstOnOneFalseTwoTrue");
    } else if  (!ForEmployeeContent.classList.contains("active") && FirstApprovalReviewContent.classList.contains("active")){
        buttonForFirstApproval.classList.toggle("upMarginOnFirstOnOneFalseTwoTrue");
    } else{
        buttonForFirstApproval.classList.toggle("upMarginOnFirstOnTwoTrue");
    }
})