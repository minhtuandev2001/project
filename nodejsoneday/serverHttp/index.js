const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost/EmployeeDB";

MongoClient.connect(url, (err,db) => {
    console.log("connected");

    db.close(); // đống kết nối
});
