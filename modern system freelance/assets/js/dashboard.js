const sideBar = document.getElementById("sideBar");
const openslider = document.getElementById("openslider");
const mainContent = document.getElementById("mainContent");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const overlayOpenSlider = document.getElementById("overlayOpenSlider");
const settingAccount = document.querySelector(".settingAccount");
function openSidebar() {
    sideBar.classList.add("open");
    openslider.classList.add("open");
    mainContent.classList.add("open");
    overlayOpenSlider.classList.add("open");
    closeBtn.classList.add("active");
    openBtn.classList.remove("active");
}
function closeSidebar() {
    sideBar.classList.remove("open");
    openslider.classList.remove("open");
    mainContent.classList.remove("open");
    overlayOpenSlider.classList.remove("open");
    closeBtn.classList.remove("active");
    openBtn.classList.add("active");
}
function openEdit(){
    settingAccount.classList.toggle("open")
}
function backStep(){
    window.history.back();
}


// side bar

const sidebarLinks = document.querySelectorAll("#sideBar ul li");
const home = document.querySelector("#home");
const employee = document.querySelector("#employee");
const hrStaff = document.querySelector("#hrStaff");
const settings = document.querySelector("#settings");
const calendar = document.querySelector("#calendar");
const homeDark = document.querySelector(".home-dark");
const homeLight = document.querySelector(".home-light");
const employeeDark = document.querySelector(".employee-dark");
const employeeLight = document.querySelector(".employee-light");
const hrStaffDark = document.querySelector(".hrStaff-dark");
const hrStaffLight = document.querySelector(".hrStaff-light");
const settingsDark = document.querySelector(".settings-dark");
const settingsLight = document.querySelector(".settings-light");
const calendarDark = document.querySelector(".calendar-dark");
const calendarLight = document.querySelector(".calendar-light");

function removeAllOpenClasses() {
    sidebarLinks.forEach(link => {
        link.classList.remove("open");
    });
    home.classList.remove("open");
    employee.classList.remove("open");
    hrStaff.classList.remove("open");
    settings.classList.remove("open");
    calendar.classList.remove("open");
    homeLight.classList.remove("active");
    employeeLight.classList.remove("active");
    hrStaffLight.classList.remove("active");
    settingsLight.classList.remove("active");
    calendarLight.classList.remove("active");
}
sidebarLinks.forEach((link, index) => {
    link.addEventListener("click", function() {
        removeAllOpenClasses();
        openSidebar()
        this.classList.add("open");
        if (index === 0) {
            home.classList.add("open");
            homeLight.classList.add("active");
            homeDark.classList.remove("active");
        } else if (index === 1) {
            employee.classList.add("open");
            employeeLight.classList.add("active");
            employeeDark.classList.remove("active");
        } else if (index === 2) {
            hrStaff.classList.add("open");
            hrStaffLight.classList.add("active");
            hrStaffDark.classList.remove("active");
        } else if (index === 3) {
            calendar.classList.add("open");
            calendarLight.classList.add("active");
            calendarDark.classList.remove("active");
        } else if (index === 4) {
            settings.classList.add("open");
            settingsLight.classList.add("active");
            settingsDark.classList.remove("active");
        }
    });

});

// side bar


// slider

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index >= slides.length) currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;
    
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${-100 * currentIndex}%)`;
    });

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}
function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}
function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}
function currentSlide(index) {
    currentIndex = index - 1;
    showSlide(currentIndex);
}
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});

// slider


// calendar

const overlayEvent = document.getElementById('overlayEvent');
const modalAddEvent = document.getElementById('modalAddEvent');


function closeEvent(){
    modalAddEvent.classList.remove("open");
    overlayEvent.classList.remove("open");
}
function addEventBtn(){
    modalAddEvent.classList.add("open");
    overlayEvent.classList.add("open");
}

document.addEventListener('DOMContentLoaded', function() {
    let calendarEl = document.getElementById('fullCalendar');

    let calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            {
                title: 'Event 1',
                start: '2024-09-25',
                description: 'This is a cool event'
            },
            {
                title: 'Event 2',
                start: '2024-09-27',
                end: '2024-09-29',
                description: 'This is a multi-day event'
            }
        ],
        headerToolbar: {
            start: 'prev today next',
            center: 'title',
            end: 'dayGridMonth,timeGridWeek,timeGridDay' // أزرار تغيير العرض
        },
        views: {
            dayGridMonth: {
                buttonText: 'Month'
            },
            timeGridWeek: {
                buttonText: 'Week'
            },
            timeGridDay: {
                buttonText: 'Day'
            }
        },
        eventClick: function(info) {
            alert('Event: ' + info.event.title + '\n' + 'Description: ' + info.event.extendedProps.description);
        }
    });

    calendar.render();

    // ربط الزر بدالة submitEvent
    const submitEventButton = document.getElementById('submit-event-btn');
    submitEventButton.addEventListener('click', submitEvent);

    function submitEvent() {
        const eventTitle = document.getElementById('eventTitle');
        const eventDetails = document.getElementById('eventDetails');
        const eventDate = document.getElementById('eventDate');
        const labelTitle = document.getElementById('labelTitle');
        const labelDetails = document.getElementById('labelDetails');
        const labelDate = document.getElementById('labelDate');

        let eventTitleValue = eventTitle.value;  
        let eventDateValue = eventDate.value;
        let eventDetailsValue = eventDetails.value;

        let isValid = true;

        if (eventTitleValue.length === 0) {
            labelTitle.style.color = "#EB0C0C";
            isValid = false;
        } else {
            labelTitle.style.color = "#0F3464";
        }

        if (eventDateValue.length === 0) {
            labelDate.style.color = "#EB0C0C";
            isValid = false;
        } else {
            labelDate.style.color = "#0F3464";
        }

        if (eventDetailsValue.length === 0) {
            labelDetails.style.color = "#EB0C0C";
            isValid = false;
        } else {
            labelDetails.style.color = "#0F3464";
        }

        if (isValid) {
            calendar.addEvent({
                title: eventTitleValue,
                start: eventDateValue,
                allDay: true,
                extendedProps: {
                    description: eventDetailsValue
                }
            });

            modalAddEvent.classList.remove("open");
            overlayEvent.classList.remove("open");

            // Reset form fields
            eventTitle.value = '';
            eventDetails.value = '';
            eventDate.value = '';
        }
    }
});

// calendar
