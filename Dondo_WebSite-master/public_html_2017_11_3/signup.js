/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function signup(){
    var url = "http://ec2-52-197-183-181.ap-northeast-1.compute.amazonaws.com:8080/SNS/createUser?id=" + document.form.id.value + "&name=" + document.form.name.value + "&latitude=26.526671999999998&longitude=128.0299934"; // リクエスト先URL
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

