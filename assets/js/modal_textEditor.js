
document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("popup");
    var form = document.getElementById("popupForm");
    
    // إظهار الـ popup عند تحميل الصفحة
    popup.classList.add("show");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        var isValid = true;
        var inputs = form.querySelectorAll("input");

        inputs.forEach(function(input) {
            if (!input.value) {
                isValid = false;
                alert(input.name + " is required.");
            }
        });

        if (isValid) {
            var refInput = document.querySelector("#popupForm input[name='ref']");
            var dataInput = document.querySelector("#popupForm input[name='data']");
            var effectiveInput = document.querySelector("#popupForm input[name='effectiveDay']");
            var toInput = document.querySelector("#popupForm input[name='to']");
            var fromInput = document.querySelector("#popupForm input[name='from']");
            var nameInput = document.querySelector("#popupForm input[name='approval']");
            var refOutput = document.querySelector(" #refOutput");
            var dateOutput = document.querySelector(" #dateOutput");
            var effectiveOutput = document.querySelector(" #effectiveOutput");
            var toOutput = document.querySelector(" #toOutput");
            var fromOutput = document.querySelector(" #fromOutput");
            var nameOutput = document.querySelector(" #approval_name");

            console.log(refInput.value);
            console.log(dataInput.value);
            console.log(effectiveInput.value);
            console.log(toInput.value);
            console.log(fromInput.value);
            console.log(nameInput.value);
            // التأكد من وجود جميع العناصر قبل محاولة الوصول إلى قيمها
            refOutput.innerText  = refInput.value;
            dateOutput.innerText  = dataInput.value;
            effectiveOutput.innerText  = effectiveInput.value;
            toOutput.innerText  = toInput.value;
            fromOutput.innerText  = fromInput.value;
            nameOutput.innerText  = nameInput.value;
            
            // إزالة الفئة "show" لإخفاء الـ popup
            popup.classList.remove("show");
        }
    });
});


