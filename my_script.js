function hello(){
    document.write("<br><br><br>Hàm viết bên ngoài:<br>");
    let myname = "Y Chang Heo";
    document.write(myname);
    // Khi kết thúc khối lệnh biến myname sẽ được giải phóng khỏi bộ nhớ
}

function tinhDienTich(){
    let width = window.prompt("Nhập cạnh hình chữ vuông");
    let strResult = "";
    strResult += "Cạnh hình vuông là " + width + "m";
    // Nhóm toán tử: Toán Học, Luận lý - Logic, So sánh, Gán, Hỗn hợp....
    // document.write("Cạnh hình vuông là " + width + "m");
    // Tính diện tích
    // let a = c > b? true : false;
    let area = width * width;
    // document.write("<br>S = " + area);
    strResult += "<br>S = " + area;

    // Lấy thành phần element DOM trên trang web
    let boxRe = document.getElementById("boxResult");
    boxRe.innerHTML += strResult; // Chèn dữ liệu text HTML vào thẻ span
}

function onIncrease(){
    let mybox = document.getElementById("mybox");
    mybox.style.width = "200px";
    mybox.style.height = "200px";
    mybox.style.backgroundColor = "yellow";
}

function onRevert(){
    let mybox = document.getElementById("mybox");
    mybox.style.width = "100px";
    mybox.style.height = "100px";
    mybox.style.backgroundColor = "white";
}

function actionNo(){
    let btnNo = document.getElementById("btnNo");
    let btnYes = document.getElementById("btnYes");

    btnNo.innerHTML = "Có";
    btnYes.innerHTML = "Không";
}

function actionNoRevert(){
    let btnNo = document.getElementById("btnNo");
    let btnYes = document.getElementById("btnYes");

    btnNo.innerHTML = "Không";
    btnYes.innerHTML = "Có";
}

function actionMessage(){
    alert("Bạn NGU thật :D :D :D !");
}