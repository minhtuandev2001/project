// import axios from "axios";
// const axios = require('axios'); cả 2 dùng không dc , khi nào vào dự án rồi dùng , dùng chơi chơi thì có link CDN rồi 
function statusType(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.status));
    }
}

var coursesApi = 'http://localhost:3000/courses';

// instance
const instance = axios.create({  // dùng với mấy thằng get thì dc 
    baseURL: 'http://localhost:3000/courses/',
    timeout: 2000,
})

function start(){
    getAllData();

};

start();

function getAllData(){
    instance.get()
    .then(statusType)
    .then(data => {
        console.log(data);
        var htmls  = data.data.map(course => {
            return `<li class="course-item-${course.id}"><h4>${course.name}</h4><p>${course.description}</p><button onClick="handleDeleteCourse(${course.id})">delete</button><button onClick="handleEditCourse(${course.id})">edit</button></li>`
        })
        document.querySelector("#list-item-couse").innerHTML = htmls.join(""); // chuyển thành string đã 
    })
    .catch(err => {
        console.log(err);
    })
};

function getUserId() {
    var id = document.querySelector("input[name='id']").value ;
    instance.get({
        params: {
            id:id
        }
    })
    .then(data => {
        if(data.data.length){
            let html =  `<li class="course-item-${data.data[0].id}"><h4>${data.data[0].name}</h4><p>${data.data[0].description}</p><button onClick="handleDeleteCourse(${data.data[0].id})">delete</button><button onClick="handleEditCourse(${data.data[0].id})">edit</button></li>`
            document.querySelector("#list-item-couse").innerHTML = html;
        }else{
            document.querySelector("#list-item-couse").innerHTML = '<p>khong co ket qua</p>';
        }
    })
    .catch(err =>{
        console.log(err);
    })
}

function handleCreateCourse(){
        var name = document.querySelector('input[name="name"]').value;
        console.log(name);
        var description = document.querySelector('input[name="description"]').value;
        console.log(description);
        axios.post(coursesApi,{
            name,description
        })
        .then(statusType)
        .then((response)=>{
            // getAllData();
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        })

}

function handleDeleteCourse(id){
    instance.delete('/'+id)
        .then(()=>{
            var element = `course-item-${id}` ;
            document.querySelector(element).remove();
        })
        .catch(err =>{
            console.log(err);
        })
}

function handleEditCourse(id){
    var elementName = `.course-item-${id} > h4`
    var elementDescription = `.course-item-${id} > p`
    var name = document.querySelector(elementName).innerHTML;
    var description = document.querySelector(elementDescription).innerHTML;
    document.querySelector('input[name="name"]').value = name;
    document.querySelector('input[name="description"]').value = description;
    document.querySelector('input[name="idUpdate"]').value = id;
}
function handleUpdateCourse(){
    var name = document.querySelector('input[name="name"]').value;
    var description = document.querySelector('input[name="description"]').value;
    var id = document.querySelector('input[name="idUpdate"]').value;

    axios.put(coursesApi+'/'+id,{
        name,description
    })
    .then((response)=>{
        getAllData();
    })
    .catch((error)=>{
        console.error(error);
    })
}
