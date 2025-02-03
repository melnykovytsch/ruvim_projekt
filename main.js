$(document).ready(function() {

    // Open/close dropdown menu
    $('.dropdown-menu').click(function(event) {
        $('.dropdown-menu, ul').toggleClass('active');
        $('body').toggleClass('lock');
    });

    // Open/close popup
    $('.button').click(function(event) {
        $('.popup').toggleClass('active');
    });
    $('.close').click(function(event) {
        $('.popup').removeClass('active');
    });
});


// Add slider-swiper
new Swiper('.image-slider',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
});





//Button animation
let button = document.querySelector('button');
button.addEventListener('mousedown', pressButton);
button.addEventListener('mouseup', leaveButton);

function pressButton(event) {
    button.style.transform = 'translate(0, 0em)';
    button.style.boxShadow = '10px 10px 20px 1px rgba(0, 0, 0, 1)';
    button.style.backgroundImage = 'linear-gradient(to bottom right, #ACF548, #ACF548)';
    let target = event;
    return target;
}

function leaveButton(event) {
    button.style.transform = 'translate(0, -0.10em)';
    button.style.boxShadow = '15px 15px 20px 1px rgba(0, 0, 0, 1)';
    button.style.backgroundImage = 'linear-gradient(to bottom right, #ACF548, #278C7A)';
    let target = event;
    return target;
}





// Calendar generate
/*window.onload = function () {
    generateCalendar();
}

function generateCalendar() {
    const calendar = document.getElementById('calendar');
    const currentDate = new Date();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    const firstDayOfWeek = firstDayOfMonth.getDay();
    const totalDays = lastDayOfMonth.getDate();

    for (let i = 0; i < firstDayOfWeek; i++) {
        let blankDay = document.createElement("div");
        calendar.appendChild(blankDay);
    }

    for (let day = 1; day <= totalDays; day++) {
        let daySquare = document.createElement("div");
        daySquare.className = "calendar-day";
        daySquare.textContent = day;
        daySquare.id = `day-${day}`;
        calendar.appendChild(daySquare);
    }
}*/

function showAddTaskModal() {
    document.getElementById('addTaskModal').style.display = 'block';
}

function closeAddTaskModal() {
    document.getElementById('addTaskModal').style.display = 'none';
}

function showPopupConten() {
    document.getElementById('popup').style.display = 'block';
}

function closePopupContent() {
    document.getElementById('popup').style.display = 'none';
}

/*function deleteTask(taskElement) {
    if (confirm("Are you sure you want to delete this task?")) {
        taskElement.parentNode.removeChild(taskElement);
    }
}

function editTask(taskElement) {
    const newTaskDesc = prompt("Edit your task:", taskElement.textContent);
    if (newTaskDesc !== null & newTaskDesc.trim() !== "") {
        taskElement.textContent = newTaskDesc;
    }
}

function addTask() {
    const taskDate = new Date(document.getElementById('task-date').value);
    const taskDesc = document.getElementById('task-desc').value.trim();

    if (taskDesc && !isNaN(taskDate.getDate())) {
        const calendarDays = document.getElementById('calendar').children;
        for (let i = 0; i < calendarDays.length; i++) {
            const day = calendarDays[i];
            if (parseInt(day.textContent) === taskDate.getDate()) {
                const taskElement = document.createElement("div");
                taskElement.className = "task";
                taskElement.textContent = taskDesc;
                
                taskElement.addEventListener('contextmenu', function(event) {
                    event.preventDefault();
                    deleteTask(taskElement);
                });

                taskElement.addEventListener('click', function() {
                    editTask(taskElement);
                });

                day.appendChild(taskElement);
                break;
            }
        }
        closeAddTaskModal();
    } else {
        alert('Please enter a valid date and task description!');
    }
}*/






// Feedback form

const FEEDBACK_FORM = document.querySelector('#feedback-form');

function sendFeedback(feedback) {
    fetch("/api/feedback", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(feedback),
    }).then((response) => response.json()).then(data => {
        console.log(data);
        alert('Success');
    }).catch((error) => {
        console.error(error);
        alert('Error');
    })
}


FEEDBACK_FORM.addEventListener('submit', (e) => {
    e.preventDefault();
    const feedbackFormData = new FormData(e.target);
    console.log('feedbackFormData', feedbackFormData);
    const feedback = Object.fromEntries(feedbackFormData);
    console.log('feedback', feedback);

    sendFeedback(feedback);
})




