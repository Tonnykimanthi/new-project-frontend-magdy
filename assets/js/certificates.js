const certificates = [
  {
    employee: "Ran Bahadur Karki",
    type: "Employment Certificate to Embassy",
    employeeRemark: "Employment Certificate to Embassy",
    submissionDate: "2023/09/15",
    reviewName: "Mohamed Ahmed Kamal Mahrous",
    reviewDate: "2023/09/15",
    reviewerRemarks: "Confirm Certificate",
    approvalName: "Mohamed Ahmed Kamal Mahrous",
    approvalDate: "2023/09/15",
    approvalRemarks: "Confirm Certificate",
    status: "Approved",
    control: "Show",
  },
  {
    employee: "Ran Bahadur Karki",
    type: "Employment Certificate to Embassy",
    employeeRemark: "Employment Certificate to Embassy",
    submissionDate: "2023/09/15",
    reviewName: "Mohamed Ahmed Kamal Mahrous",
    reviewDate: "2023/09/15",
    reviewerRemarks: "Confirm Certificate",
    approvalName: "",
    approvalDate: "",
    approvalRemarks: "",
    status: "Pending",
    control: "Show",
  },
  {
    employee: "Ran Bahadur Karki",
    type: "Employment Certificate to Embassy",
    employeeRemark: "Employment Certificate to Embassy",
    submissionDate: "2023/09/15",
    reviewName: "Mohamed Ahmed Kamal Mahrous",
    reviewDate: "2023/09/15",
    reviewerRemarks: "Confirm Certificate",
    approvalName: "Mohamed Ahmed Kamal Mahrous",
    approvalDate: "2023/09/15",
    approvalRemarks: "Confirm Certificate",
    status: "Returned",
    control: "Show",
  },
];

const certificateTypes = document.querySelectorAll(".certificate-type");
const certificateTypeInputs = document.querySelectorAll(
  "#certificate-type-wrapper .radio-input"
);
const certificateEmbassyInput = document.querySelector(
  "#certificate-type-wrapper #embassy"
);
const embassyWrapper = document.getElementById("embassy-wrapper");
const successMessageToastWrapper = document.querySelector(
  ".success-message-toast-wrapper"
);
const successMessageToast = document.querySelector(".success-message-toast");
const submitBtn = document.getElementById("submit-btn");

certificateTypes.forEach((certificateType) => {
  const input = certificateType.children[1];
  input.addEventListener("change", () => {
    certificateTypes.forEach((type) => {
      type.classList.remove("active");
    });

    if (input.checked) {
      certificateType.classList.add("active");
    }
  });
});

certificateTypeInputs.forEach((input) => {
  input.addEventListener("change", () => {
    if (input.id === "embassy") {
      embassyWrapper.classList.remove("hidden");
    } else {
      embassyWrapper.classList.add("hidden");
    }
  });
});

if (submitBtn) {
  submitBtn.addEventListener("click", () => {
    successMessageToastWrapper.classList.remove("hidden");
  });

  document.addEventListener("click", (e) => {
    if (
      !successMessageToast.contains(e.target) &&
      !submitBtn.contains(e.target)
    ) {
      successMessageToastWrapper.classList.add("hidden");
    }
  });
}

// Display certificates list
const tBodyEl = document.querySelector(
  "#certificates-list-wrapper table tbody"
);
certificates.forEach((certificate) => {
  const trEl = document.createElement("tr");

  trEl.innerHTML = `
          <td>${certificate.employee}</td>
          <td>${certificate.type}</td>
          <td>${certificate.employeeRemark}</td>
          <td>${certificate.submissionDate}</td>
          <td>${certificate.reviewName}</td>
          <td>${certificate.reviewDate}</td>
          <td>${certificate.reviewerRemarks}</td>
          <td>${certificate.approvalName}</td>
          <td>${certificate.approvalDate}</td>
          <td>${certificate.approvalRemarks}</td>
          <td>
              <div>
              <img src="" alt="">
              <span class="">${certificate.status}</span>
              </div>
          </td>
          <td>
              <a href="#" class="nav-link approval">Show</a>
          </td>
    `;

  function checkStatus() {
    const link = trEl.querySelector("a");
    const imgSrc = trEl.querySelector("img");

    if (
      window.location.href ===
      "http://127.0.0.1:5500/Dashboard/employee/certificates/reviewCertificatesList.html"
    ) {
      if (certificate.status === "Approved") {
        imgSrc.src = "../../../assets/images/sign-in/Evaluated.png";
        link.classList.add("approved");
        link.href = "myCertificateApproved.html";
      } else if (certificate.status === "Pending") {
        imgSrc.src = "../../../assets/images/sign-in/Pending.png";
        link.classList.add("review");
        link.innerText = "Review";
        link.href = "reviewCertificateApproval.html";
      } else {
        imgSrc.src = "../../../assets/images/sign-in/Returned.png";
        link.classList.add("returned");
        link.href = "myCertificateReturned.html";
      }
    } else if (
      window.location.href ===
      "http://127.0.0.1:5500/Dashboard/employee/certificates/approvalCertificatesList.html"
    ) {
      if (certificate.status === "Approved") {
        imgSrc.src = "../../../assets/images/sign-in/Evaluated.png";
        link.classList.add("approved");
        link.href = "myCertificateApproved.html";
      } else if (certificate.status === "Pending") {
        imgSrc.src = "../../../assets/images/sign-in/Pending.png";
        link.classList.add("review");
        link.innerText = "Approve";
        link.href = "reviewCertificateApproval.html";
      } else {
        link.classList.add("returned");
        imgSrc.src = "../../../assets/images/sign-in/Returned.png";
        link.href = "myCertificateReturned.html";
      }
    } else {
      if (certificate.status === "Approved") {
        imgSrc.src = "../../../assets/images/sign-in/Evaluated.png";
        link.classList.add("approved");
        link.href = "myCertificateApproved.html";
      } else if (certificate.status === "Pending") {
        imgSrc.src = "../../../assets/images/sign-in/Pending.png";
        link.classList.add("pending");
      } else {
        imgSrc.src = "../../../assets/images/sign-in/Returned.png";
        link.classList.add("returned");
        link.href = "myCertificateApproved.html";
      }
    }
  }
  checkStatus();

  if (tBodyEl) {
    tBodyEl.appendChild(trEl);
  }
});

// RETURN REASONS
const returnReasonWrapper = document.querySelector(".return-reason-wrapper");
const returnReasonArticle = document.querySelector(
  ".return-reason-wrapper article"
);
const returnReasonBtn = document.getElementById("return-reason-btn");
const returnBtn = document.getElementById("return-btn");
const returnConfirmationPopup = document.querySelector(
  ".return-confirmation-popup"
);
const returnConfirmationYesBtn = document.querySelector(
  ".return-confirmation-popup button"
);
console.log(returnConfirmationYesBtn);

if (returnReasonBtn) {
  returnReasonBtn.addEventListener("click", () => {
    returnReasonWrapper.classList.remove("hidden");
  });

  document.addEventListener("click", (e) => {
    if (
      !returnReasonArticle.contains(e.target) &&
      !returnReasonBtn.contains(e.target)
    ) {
      returnReasonWrapper.classList.add("hidden");
    }
  });
}
if (returnBtn) {
  returnBtn.addEventListener("click", () => {
    returnConfirmationPopup.classList.remove("hidden");
  });
}
if (returnConfirmationYesBtn) {
  returnConfirmationYesBtn.addEventListener("click", () => {
    returnConfirmationPopup.classList.add("hidden");
    returnReasonWrapper.classList.add("hidden");
  });
}

// REVIEW CERTIFICATES LIST

const historyBackBtn = document.getElementById("history-back-link");
const confirmCertificateBtn = document.getElementById(
  "confirm-certificate-btn"
);
const returnToSenderBtn = document.getElementById("return-to-sender-btn");
const confirmCertificateContainer = document.querySelector(
  ".confirm-certificate-container"
);
const confirmCertificateContainerArticle = document.querySelector(
  ".confirm-certificate-container article"
);

if (historyBackBtn) {
  historyBackBtn.addEventListener("click", () => {
    history.back();
  });
}

if (confirmCertificateBtn) {
  confirmCertificateBtn.addEventListener("click", () => {
    confirmCertificateContainer.classList.remove("hidden");
  });

  document.addEventListener("click", (e) => {
    if (
      !confirmCertificateContainerArticle.contains(e.target) &&
      !confirmCertificateBtn.contains(e.target)
    ) {
      confirmCertificateContainer.classList.add("hidden");
    }
  });
}
if (returnToSenderBtn) {
  returnToSenderBtn.addEventListener("click", () => {
    returnReasonWrapper.classList.remove("hidden");
  });

  document.addEventListener("click", (e) => {
    if (
      !returnReasonArticle.contains(e.target) &&
      !returnToSenderBtn.contains(e.target)
    ) {
      returnReasonWrapper.classList.add("hidden");
    }
  });
}
