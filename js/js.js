var submitMess = document.getElementById("submitMess");
var nameMess = document.getElementById("nameMess");
var contentMess = document.getElementById("contentMess");
var numberMess = 0;
console.log("chaohoang");
var dataRef = firebase.database().ref("/");
dataRef.child('num').on('value', async function(snap) {
    var num = await snap.val();
    numberMess = num;
    console.log(num);
    submit1();
});

function submit1() {
    console.log(nameMess.value + " said: " + contentMess.value);
    var noidung = nameMess.value.toString() + " said: " + contentMess.value.toString();
    var name = nameMess.value.toString() + numberMess.toString() + "/";


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
    numberMess++;
    firebase.database().ref("/").update({
        num: numberMess
    });
}