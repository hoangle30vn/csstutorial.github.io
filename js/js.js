var submitMess = document.getElementById("submitMess");
var nameMess = document.getElementById("nameMess");
var contentMess = document.getElementById("contentMess");
console.log("chaohoang");

function submit() {
    console.log(nameMess.value + " đã gửi 1 tin nhắn: " + contentMess.value);
    if (contentMess.value.length == 0) {
        alert("Bạn không có gì để nói với mình à");
    } else if (nameMess.value.length == 0) {
        alert("Bạn không cho Hoàng biết tên à?");
    } else {
        alert("Hoàng sẽ phản hồi bạn sớm nhất có thể. Chúc bạn một ngày tốt lành");
    }
}

window.onload = (() => {
    console.log("Hello");
})