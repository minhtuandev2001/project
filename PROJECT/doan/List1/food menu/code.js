  // code tạo ra mess chat
  var send = document.getElementById("send").addEventListener("click", send_mess);

  function send_mess() {
      var text = document.getElementById("mess_text__body__text_mess");
      var mess = document.getElementById("text").value;
      text.innerHTML += "<br>" + "<br>" + "<p class=" + "mess_text__body__mess" + ">" + mess + "</p>";
      document.getElementById("text").value = "";
  }

  function message() {
      let element = document.getElementById("message");
      if (element.style.visibility.match("hidden")) {
          element.style.visibility = "visible";
      } else {
          element.style.visibility = "hidden";
      }
  }
  //code phone 
  document.getElementById("phone").addEventListener("click",confir_m);
  function confir_m() {
      confirm("Liên Hệ Trực Tiếp Với Chúng Tôi Qua "+
      "Email : bmtuan.20it1@vku.udn" +
      "SDT : 0396104572");
  }
 // bình luận bằng sao 
 function danh_gia() {
    document.getElementById("danhgia_form_star").innerHTML = "<span" + " class=\"fa fa-star\" " + "onclick=\"danh_gia();\"" +
        " ></span>" +
        " <span" + " class=\"far fa-star\" " + "onclick=\"danh_gia2();\"" + " ></span>" +
        " <span" + " class=\"far fa-star\" " + "onclick=\"danh_gia3();\"" + " ></span>" +
        " <span" + " class=\"far fa-star\" " + "onclick=\"danh_gia4();\"" + " ></span>" +
        " <span" + " class=\"far fa-star\" " + "onclick=\"danh_gia5();\"" + " ></span>";
    document.getElementById("star_chose").innerHTML = "Tôi Không Thích Món Này Cho lắm";
}

function danh_gia2() {
    document.getElementById("danhgia_form_star").innerHTML = "<span" + " class=\"fa fa-star\" " + "onclick=\"danh_gia();\"" +
        " ></span>" +
        " <span" + " class=\"fa fa-star\" " + "onclick=\"danh_gia2();\"" + " ></span>" +
        " <span" + " class=\"far fa-star\" " + "onclick=\"danh_gia3();\"" + " ></span>" +
        " <span" + " class=\"far fa-star\" " + "onclick=\"danh_gia4();\"" + " ></span>" +
        " <span" + " class=\"far fa-star\" " + "onclick=\"danh_gia5();\"" + " ></span>";
    document.getElementById("star_chose").innerHTML = " Cũng Tạm được > < ";
}

function danh_gia3() {
    document.getElementById("danhgia_form_star").innerHTML = "<span" + " class=\"fa fa-star\" " + "onclick=\"danh_gia();\"" +
        " ></span>" +
        " <span" + " class=\"fa fa-star\" " + "onclick=\"danh_gia2();\"" + " ></span>" +
        " <span" + " class=\"fa fa-star\" " + "onclick=\"danh_gia3();\"" + " ></span>" +
        " <span" + " class=\"far fa-star\" " + "onclick=\"danh_gia4();\"" + " ></span>" +
        " <span" + " class=\"far fa-star\" " + "onclick=\"danh_gia5();\"" + " ></span>";
    document.getElementById("star_chose").innerHTML = "Món Này Nhìn Rất Hấp Dẫn";
}

function danh_gia4() {
    document.getElementById("danhgia_form_star").innerHTML = "<span" + " class=\"fa fa-star\" " + "onclick=\"danh_gia();\"" +
        " ></span>" +
        " <span" + " class=\"fa fa-star\" " + "onclick=\"danh_gia2();\"" + " ></span>" +
        " <span" + " class=\"fa fa-star\" " + "onclick=\"danh_gia3();\"" + " ></span>" +
        " <span" + " class=\"fa fa-star\" " + "onclick=\"danh_gia4();\"" + " ></span>" +
        " <span" + " class=\"far fa-star\" " + "onclick=\"danh_gia5();\"" + " ></span>";
    document.getElementById("star_chose").innerHTML = "Trên Cả Tuyệt Vời";
}

function danh_gia5() {
    document.getElementById("danhgia_form_star").innerHTML = "<span" + " class=\"fa fa-star\" " + "onclick=\"danh_gia();\"" +
        " ></span>" +
        " <span" + " class=\"fa fa-star\" " + "onclick=\"danh_gia2();\"" + " ></span>" +
        " <span" + " class=\"fa fa-star\" " + "onclick=\"danh_gia3();\"" + " ></span>" +
        " <span" + " class=\"fa fa-star\" " + "onclick=\"danh_gia4();\"" + " ></span>" +
        " <span" + " class=\"fa fa-star\" " + "onclick=\"danh_gia5();\"" + " ></span>";
    document.getElementById("star_chose").innerHTML = "Không Còn Gì Để Nói AMAZING";
}
// code comment 
function create_cmt() {
    var text = document.getElementById("name").value;
    var textEmail = document.getElementById("Email").value;
    var mess = document.getElementById("message").value;
    var star = document.getElementById("danhgia_form_star").innerHTML;
    var today = new Date();
    var date = today.getDate() + '/' + (today.getMonth()) + '/' + today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes();

    var checkbox = document.getElementsByName("gender");
    var i, data;
    for (i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked === true) {
            data = checkbox[i].value;
        }
    }
    if (text != ("") && mess != ("")&& textEmail!=("") && data != null) {
        if (data === ("Nam")) {

            var element = document.getElementById("box_comment");
            element.innerHTML +=
                '<div class="comment">' +
                ' <div class="comment_img">' +
                ' <img src="img/avatar2.png" alt="">' +
                ' </div>' +
                ' <div class="box_comment_text">' +
                '<div class="ten_nguoi_commnet">' +
                ' <span>' + text + '</span>' + '<span>' + time + ' ' + date + ' </span>' +
                '<p>'+textEmail+'</p>' +
                ' </div>' +
                ' <div class="sao_danh_gia">' +
                star +
                ' </div>' +
                ' <div class="noidung_comment">' +
                '<p>' + mess + '</p>' +
                '  </div>' +
                '</div>' +
                '</div>'

        }
        if (data === ("Nu")) {

            var element = document.getElementById("box_comment");
            element.innerHTML +=
                '<div class="comment">' +
                ' <div class="comment_img">' +
                ' <img src="img/avatar5.png" alt="">' +
                ' </div>' +
                ' <div class="box_comment_text">' +
                '<div class="ten_nguoi_commnet">' +
                ' <span>' + text + '</span>' + '<span>' + time + ' ' + date + ' </span>' +
                '<p>'+textEmail+'</p>' +
                ' </div>' +
                ' <div class="sao_danh_gia">' +
                star +
                ' </div>' +
                ' <div class="noidung_comment">' +
                '<p>' + mess + '</p>' +
                '  </div>' +
                '</div>' +
                '</div>'

        }
        if (data === ("Khac")) {

            var element = document.getElementById("box_comment");
            element.innerHTML +=
                '<div class="comment">' +
                ' <div class="comment_img">' +
                ' <img src="img/avatar1.png" alt="">' +
                ' </div>' +
                ' <div class="box_comment_text">' +
                '<div class="ten_nguoi_commnet">' +
                ' <span>' + text + '</span>' + '<span>' + time + ' ' + date + ' </span>' +
                '<p>'+textEmail+'</p>' +
                ' </div>' +
                ' <div class="sao_danh_gia">' +
                star +
                ' </div>' +
                ' <div class="noidung_comment">' +
                '<p>' + mess + '</p>' +
                '  </div>' +
                '</div>' +
                '</div>'
        }
    } else {
        alert("không được để trống ô nào");
    }

}