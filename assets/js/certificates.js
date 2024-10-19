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

// Display certificates on the table body
const tBodyEl = document.querySelector(
  "#certificates-list-wrapper table tbody"
);
certificates.forEach((certificate) => {
  const trEl = document.createElement("tr");

  trEl.innerHTML = `
        <tr>
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
        </tr>
    `;

  function checkStatus() {
    const link = trEl.querySelector("a");
    const imgSrc = trEl.querySelector("img");
    
    
    if(window.location.href === "http://127.0.0.1:5500/Dashboard/employee/certificates/reviewCertificatesList.html"){
      if (certificate.status === "Approved") {
      link.classList.add("approved");
      imgSrc.src = "../../../assets/images/sign-in/Evaluated.png";
    } else if (certificate.status === "Pending") {
      link.classList.add("review");
      link.innerText = "Review"
      imgSrc.src = "../../../assets/images/sign-in/Pending.png";
    } else {
      link.classList.add("returned");
      imgSrc.src = "../../../assets/images/sign-in/Returned.png";
    }
    }else if(window.location.href === "http://127.0.0.1:5500/Dashboard/employee/certificates/approveCertificatesList.html"){
      if (certificate.status === "Approved") {
        link.classList.add("approved");
        imgSrc.src = "../../../assets/images/sign-in/Evaluated.png";
      } else if (certificate.status === "Pending") {
        link.classList.add("approve");
        link.innerText = "Approve"
        imgSrc.src = "../../../assets/images/sign-in/Pending.png";
      } else {
        link.classList.add("returned");
        imgSrc.src = "../../../assets/images/sign-in/Returned.png";
      }
    }else{
      if (certificate.status === "Approved") {
        link.classList.add("approved");
        imgSrc.src = "../../../assets/images/sign-in/Evaluated.png";
      } else if (certificate.status === "Pending") {
        link.classList.add("pending");
        imgSrc.src = "../../../assets/images/sign-in/Pending.png";
      } else {
        link.classList.add("returned");
        imgSrc.src = "../../../assets/images/sign-in/Returned.png";
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

if (returnReasonBtn) {
  returnReasonBtn.addEventListener("click", () => {
    returnReasonWrapper.classList.remove("hidden");
  });
}

document.addEventListener("click", (e) => {
  if (
    !returnReasonArticle.contains(e.target) &&
    !returnReasonBtn.contains(e.target)
  ) {
    returnReasonWrapper.classList.add("hidden");
  }
});

// REVIEW CERTIFICATES LIST
const currPage = window.location.href;
console.log(currPage);
