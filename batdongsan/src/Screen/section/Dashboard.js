import React, { useEffect, useState } from 'react';

// component 
import BoxSortUser from '../../components/BoxSortUser';

//asset
import loading from '../../asset/video/loading.gif';
// css 
import '../../css/dashboard.css';

import firebase from "firebase/app";
import { connectDatabase } from '../../helper/configDatabase';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(...registerables);
function Dashboard({ idUser }) {
    const [valueOption, setValueOption] = useState("no");
    const [listDataWeek, setListDataWeek] = useState(null);
    const [arrayColorChart, setArrayColorChart] = useState(null);

    // list user
    const [listUsers, setListUsers] = useState(null);
    const [listUsers2, setListUsers2] = useState(null);
    const [searchValue, setSearchValue] = useState("");
    const [listPagination, setListPagination] = useState([{ num: 1 }]);
    const [numPagination, setNumPagination] = useState(1);
    // list report 
    const [listReport, setListReport] = useState(null);
    const [listReport2, setListReport2] = useState(null);
    const [listPagination2, setListPagination2] = useState([{ num: 1 }]);
    const [numPagination2, setNumPagination2] = useState(1);
    useEffect(() => {
        const getDataAccessWeek = async () => {
            await firebase.database().ref('accessWeek/').on('value', function (snapshot) {
                let array = [];
                snapshot.forEach(function (item) {
                    var childData = item.val();
                    array.push(childData);
                })
                let arrayColorChart = [];
                for (const value of array) {
                    if (value >= 500) {
                        arrayColorChart.push("#1EB2A6")
                    } else if (value >= 400) {
                        arrayColorChart.push("#6C76E4")
                    } else if (value >= 200) {
                        arrayColorChart.push("#FFA34D")
                    } else if (value <= 100) {
                        arrayColorChart.push("#F67575")
                    }
                }
                setArrayColorChart(arrayColorChart);
                setListDataWeek(array);
            })
        }
        const getListUser = async () => {
            await firebase.database().ref('users/').on('value', function (snapshot) {
                let array = [];
                snapshot.forEach(function (item) {
                    var childData = item.val();
                    array.push({ idUser: item.key, ...childData });
                })
                setListUsers2(array);
                // hiển thị 1 phần data user
                setListUsers(array.slice(0, 5));
                let array2 = [];
                let num = Math.ceil(array.length / 5);
                for (let i = 0; i < num; i++) {
                    array2.push({ num: i + 1 });
                }
                setListPagination(array2);
            })
        }
        const getListReport = async () => {
            await firebase.database().ref('report/').on('value', function (snapshot) {
                let array = [];
                snapshot.forEach(function (item) {
                    var childData = item.val();
                    array.push({ idReport: item.key, ...childData });
                })
                setListReport2(array);
                // hiển thị 1 phần data user
                setListReport(array.slice(0, 5));
                let array2 = [];
                let num = Math.ceil(array.length / 5);
                for (let i = 0; i < num; i++) {
                    array2.push({ num: i + 1 });
                }
                setListPagination2(array2);
            })
        }
        connectDatabase();
        getDataAccessWeek();
        getListUser();
        getListReport();
    }, []);
    const handlerFilter = (param) => {
        let text = param.target.value;
        setValueOption(text);
        if (text === "no") {
            setListUsers(listUsers2.slice(0, 5));
        } else if (text === "A-Z") {
            let array = [...listUsers2];
            //  lọc và hiển thị 5 user
            setListUsers(array.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5));
        } else if (text === "Z-A") {
            let array = [...listUsers2];
            setListUsers(array.sort((a, b) => a.name.localeCompare(b.name) * -1).slice(0, 5));
        }
    }
    // xủ lý pagination user
    const handlerPagination = (pos) => {
        console.log(pos);
        setNumPagination(pos);
        setListUsers(listUsers2.slice((pos * 5 - 5), pos * 5));
    }
    const handlerPaginationNext = () => {
        if (numPagination === listPagination.length) {
            handlerPagination(numPagination)
        } else {
            let pos = numPagination + 1;
            handlerPagination(pos);
        }
    }
    const handlerPaginationPrevious = () => {
        if (numPagination === 1) {
            handlerPagination(1)
        } else {
            let pos = numPagination - 1;
            handlerPagination(pos);
        }
    }
    // xủ lý pagination report
    const handlerPagination2 = (pos) => {
        console.log(pos);
        setNumPagination2(pos);
        setListReport(listReport2.slice((pos * 5 - 5), pos * 5));
    }
    const handlerPaginationNext2 = () => {
        if (numPagination2 === listPagination2.length) {
            handlerPagination2(numPagination2)
        } else {
            let pos = numPagination2 + 1;
            handlerPagination2(pos);
        }
    }
    const handlerPaginationPrevious2 = () => {
        if (numPagination2 === 1) {
            handlerPagination2(1)
        } else {
            let pos = numPagination2 - 1;
            handlerPagination2(pos);
        }
    }
    const handleDelReport = (para) => {
        firebase.database().ref('report/' + para).remove(function (err) {
            if (err) { } else {
                toast.success('😊 successfully!', {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        });
    }
    // const handlerSearch = (param) => {
    //     let text = param.target.value;
    //     setSearchValue(text)
    //     if (text === "") {
    //         setListUsers(listUsers2.slice(0, 5));
    //     } else {
    //         let array = listUsers2.filter((item) => {
    //             return item.name.toLowerCase().includes(text.toLowerCase());
    //         });
    //         setListUsers(array.slice(0, 5));
    //     }
    // }
    const handlerSearch2 = () => {
        let text = document.getElementById("searchName").value;
        setSearchValue(text);
        if (text === "") {
            setListUsers(listUsers2.slice(0, 5));
        } else {
            let array = listUsers2.filter((item) => {
                return item.name.toLowerCase().includes(text.toLowerCase());
            });
            setListUsers(array.slice(0, 5));
        }
    }
    const handlerToolTip = (param) => {
        document.getElementById("descriptionUser").style.right = "10px";
        document.getElementById("imageViewUser").src = param.avatar.url;
        document.getElementById("nameViewUser").innerText = param.name;
        document.getElementById("emailViewUser").innerText = param.email;
        document.getElementById("permissionViewUser").innerText = param.isAdmin ? "admin" : "user";
        document.getElementById("statusViewUser").innerText = param.isStatus ? "online" : "offline";
    }
    const HandlerPermission = (id, permission) => {
        let updates = {};
        updates['users/' + id + '/isAdmin'] = permission;
        firebase.database().ref().update(updates, function (err) {
            if (err) { } else {
                toast.success('😊 successfully!', {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        });
    }
    return (
        <div className="colSection">
            <div className="boxPost">
                <p className="boxTitle">Access</p>
                <div className="chart">
                    {
                        listDataWeek === null
                            ? <img src={loading} style={{ width: "200px" }} alt="" />
                            : <Bar
                                data={{
                                    labels: [
                                        "Monday",
                                        "Tuesday",
                                        "Wednesday",
                                        "Thursday",
                                        "Friday",
                                        "Saturday",
                                        "Sunday"
                                    ],
                                    datasets: [
                                        {
                                            label: "Access (thousand)",
                                            backgroundColor: arrayColorChart,
                                            data: listDataWeek
                                        }
                                    ]
                                }}
                                options={{
                                    legend: { display: false },
                                    title: {
                                        display: true,
                                        text: "visit the site during the week"
                                    }
                                }}
                            />
                    }
                </div>
                <p className="boxTitle">List User</p>
                <br />
                <div className="filterData">
                    <p>Sort</p>
                    <BoxSortUser handlerFilter={handlerFilter} valueOption={valueOption}></BoxSortUser>
                    <div className="filterData_search">
                        <input className="search_input" type="text" id="searchName" name="name" defaultValue={searchValue} autoComplete="off" placeholder="enter value..." />
                        <div className="search_icon" onClick={() => handlerSearch2()}>
                            <box-icon name='search' color="#FFFFFF"></box-icon>
                        </div>
                    </div>
                </div>
                <div className="boxTable">

                    {
                        listUsers === null
                            ? <img src="" alt="" />
                            : listUsers.length === 0 ?
                                <p>Khong co user nao dang ky</p>
                                :
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>num</th>
                                            <th>name</th>
                                            <th>email</th>
                                            <th>admin</th>
                                            {/* <th>del</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            listUsers.map((item, index) =>
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td
                                                        onMouseOver={() => handlerToolTip(item)}
                                                        onMouseOut={() => document.getElementById("descriptionUser").style.right = "-350px"}
                                                    >{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>
                                                        {item.isAdmin
                                                            ? item.idUser === idUser
                                                                ? <button type="button" className="btn_table"
                                                                    style={{ backgroundColor: "#ffa34d", color: "#FFFFFF" }}
                                                                >admin</button>
                                                                : <button type="button" className="btn_table"
                                                                    style={{ backgroundColor: "#ffa34d", color: "#FFFFFF" }}
                                                                    onClick={() => HandlerPermission(item.idUser, false)}
                                                                >admin</button>
                                                            : <button type="button" className="btn_table"
                                                                onClick={() => HandlerPermission(item.idUser, true)}
                                                            >user</button>
                                                        }
                                                    </td>
                                                    {/* <td>
                                                        <button type="button" className="btn_table del">del</button>
                                                    </td> */}
                                                </tr>
                                            )}
                                    </tbody>
                                </table>
                    }
                </div>
                <div style={{ display: 'block' }}>
                    <div className="pagination">
                        <span onClick={() => handlerPaginationPrevious()}>«</span>
                        {listPagination.map((item, index) => {
                            if (numPagination === (index + 1)) {
                                return <span key={item.num} className="active" onClick={() => handlerPagination(item.num)}>{item.num}</span>
                            } else {
                                return <span key={item.num} onClick={() => handlerPagination(item.num)}>{item.num}</span>
                            }
                        }
                        )}
                        <span onClick={() => handlerPaginationNext()}>»</span>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div className="boxTable">

                    {
                        listReport === null
                            ? <img src="" alt="" />
                            : listReport.length === 0 ?
                                <p>Khong co report nao dang ky</p>
                                :
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>num</th>
                                            <th>name</th>
                                            <th>description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            listReport.map((item, index) =>
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.description}</td>
                                                    <td>
                                                        <button type="button" className="btn_table del"
                                                            onClick={() => handleDelReport(item.idReport)}
                                                        >del</button>
                                                    </td>
                                                </tr>
                                            )}
                                    </tbody>
                                </table>
                    }
                </div>
                <div style={{ display: 'block' }}>
                    <div className="pagination">
                        <span onClick={() => handlerPaginationPrevious2()}>«</span>
                        {listPagination2.map((item, index) => {
                            if (numPagination2 === (index + 1)) {
                                return <span key={item.num} className="active" onClick={() => handlerPagination2(item.num)}>{item.num}</span>
                            } else {
                                return <span key={item.num} onClick={() => handlerPagination2(item.num)}>{item.num}</span>
                            }
                        }
                        )}
                        <span onClick={() => handlerPaginationNext2()}>»</span>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div className="slider">
                </div>
                <div className="descriptionUser" id="descriptionUser">
                    <img src="" id="imageViewUser" alt="" />
                    <div className="descriptionUser_infor">
                        <p>name : <span id="nameViewUser"></span></p>
                        <p>email : <span id="emailViewUser"></span></p>
                        <p>permission : <span id="permissionViewUser"></span></p>
                        <p>status : <span id="statusViewUser"></span></p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
export default Dashboard

