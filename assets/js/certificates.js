const certificateTypes = document.querySelectorAll(".certificate-type");


certificateTypes.forEach(certificateType => {
    const input = certificateType.children[1];
    input.addEventListener("change", () => {
        certificateTypes.forEach(type => {
            type.classList.remove("active");
        })
        
        if(input.checked){
            certificateType.classList.add("active");
        }
    })
})
