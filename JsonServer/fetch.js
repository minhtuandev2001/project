function statusType(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.status));
    }
}
const jsonParse = (response) => {
    return response.json();
}
// const urlApi = 'http://localhost:3000/courses';

// fetch(urlApi)
//     .then(statusType)
//     .then(jsonParse)
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error)
//     })

var coursesApi = 'http://localhost:3000/courses';

function start() {
    getCourses(renderCourses); // function renderCourses sẽ nhận được các dữ liệu mà thằng getCourses trả về 
    
    handleCreateForm();
};

start();

// Function 

function getCourses(callback) {
    fetch(coursesApi)
        .then(statusType)
        .then(jsonParse)
        .then(callback)
};

function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-course');

    var htmls = courses.map(course => {
        return `<li class="course-item-${course.id}"><h4>${course.name}</h4><p>${course.description}</p><button onClick="handleDeleteCourse(${course.id})">delete</button><button onClick="handleEditCourse(${course.id})">edit</button></li>`
    });

    listCoursesBlock.innerHTML = htmls.join('');
}
function createCourses(data, callback) {
    var option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data),
    }

    fetch(coursesApi, option)
        .then(statusType)
        .then(jsonParse)
        .then(callback)
}

function handleDeleteCourse(id) {
    var option = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    }

    fetch(coursesApi + '/' + id, option)
        // .then(statusType)
        // .then(jsonParse)
        .then(function () {
            var courseItem = document.querySelector(".course-item-" + id);
            if (courseItem) {
                courseItem.remove();
            }
        })
}
function handleEditCourse(id) {
    var elementName = `.course-item-${id} > h4`
    var elementDescription = `.course-item-${id} > p`
    var name = document.querySelector(elementName).innerHTML;
    var description = document.querySelector(elementDescription).innerHTML;
    document.querySelector('input[name="name"]').value = name;
    document.querySelector('input[name="description"]').value = description;
    document.querySelector('input[name="id"]').value = id;
}
var updateBtn = document.querySelector('#update');

updateBtn.addEventListener('click', function() {
    var name = document.querySelector('input[name="name"]').value;
    var description = document.querySelector('input[name="description"]').value;
    var id = document.querySelector('input[name="id"]').value;

    var data = {
        name, description,
    }
    var option = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data),
    }

    fetch(coursesApi + '/' + id, option)
        .then(statusType)
        .then(jsonParse)
        .then(function () {
            var elementName = `.course-item-${id} > h4`
            var elementDescription = `.course-item-${id} > p`
            var name = document.querySelector(elementName).innerHTML = name;
            var description = document.querySelector(elementDescription).innerHTML = description;
        })
});


function handleCreateForm() {
    var createBtn = document.querySelector('#create');

    createBtn.addEventListener('click', function () {
        var name = document.querySelector('input[name="name"]').value;
        console.log(name);
        var description = document.querySelector('input[name="description"]').value;
        console.log(description);

        var formData = {
            name: name,
            description: description
        };

        createCourses(formData, getCourses(renderCourses));
    })
}