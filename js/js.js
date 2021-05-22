var submitMess = document.getElementById("submitMess");
var nameMess = document.getElementById("nameMess");
var contentMess = document.getElementById("contentMess");
var numberMess = 0;
console.log("chaohoang");
var dataRef = firebase.database().ref("/");

// var dbRef = firebase.database().ref("/");
dataRef.child('num').on('value', async function(snap) {
    // number tin nhan thay doi thi thuc hien cac ham
    var num = await snap.val();
    numberMess = num;
    console.log("số tin nhắn" + num);
    printMess();
});

function renderRowMess(item) {
    return `<tr class="rowMess">
  <td>${item.slice(0,item.indexOf(" said:"))}</td>
  <td>${item.slice(item.indexOf(" said:")+6,item.length)}</td>
  </tr>`
}

function printMess() {
    tableMess.innerHTML = "";
    // print ra toan bo tin nhan
    for (let index = 0; index <= numberMess; index++) {
        dataRef.child(index).child("mess").get().then((snapshot) => {
            if (snapshot.exists()) {
                console.log("tin:" + snapshot.val());
                tableMess.innerHTML += renderRowMess(snapshot.val())
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }
}

function submit1() {
    // gui tin nhan len firebase
    console.log(nameMess.value + " said: " + contentMess.value);
    var noidung = nameMess.value.toString() + " said: " + contentMess.value.toString();
    var name = numberMess.toString() + "/";


    if (contentMess.value.length == 0) {
        alert("Bạn không có gì để nói với mình à");
    } else if (nameMess.value.length == 0) {
        alert("Bạn không cho Hoàng biết tên à?");
    } else {
        alert("Hoàng sẽ phản hồi bạn sớm nhất có thể. Chúc bạn một ngày tốt lành");
    }
    console.log(name);

    firebase.database().ref(name).update({
        mess: noidung
    });
    console.log("xong");

}

function submit() {
    // khi gui tin nhan thi cap nhat so luong tin nhan
    numberMess++;
    firebase.database().ref("/").update({
        num: numberMess
    });
    submit1();
}
// Login
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "admin") {
        return true;
    } else {
        alert("Sai mật khẩu rồi nhé mày");
        return false;
    }
    return false;
}