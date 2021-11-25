/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function setpass(){
    var url = "http://ec2-52-197-183-181.ap-northeast-1.compute.amazonaws.com:8080/SNS/lostpass?id=" + document.form.id.value; // リクエスト先URL
    var request = new XMLHttpRequest();
    request.open('GET', url, false);
    request.onload = function () {
        setCookie("id", document.form.id.value);
        alert("仮メールアドレスを送信しました。");
        location.href = "index.html";
    };
    request.onerror = function() {
        alert("ネットワークに問題が発生しました。");
    };
    request.send(null);
}


