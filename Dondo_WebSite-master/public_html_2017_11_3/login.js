/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    function login(){
        
        var url = "http://ec2-52-197-183-181.ap-northeast-1.compute.amazonaws.com:8080/SNS/login?id=" + document.form.id.value + "&pass=" + document.form.pass.value; // リクエスト先URL
        var request = new XMLHttpRequest();
        request.open('GET', url, false);
        request.onload = function () {
            if(request.responseText.match(/true\n/)){
                if(document.form.save.value){
                    setCookie("id", document.form.id.value, 1e6);
                    setCookie("pass", document.form.pass.value, 1e6);
                }else{
                    setCookie("id", document.form.id.value);
                    setCookie("pass", document.form.pass.value);
                }
                location.href = "timeline.html";
            }else{
                alert("メールアドレスかパスワードが間違っています。");
            }
        };
        request.onerror = function() {
            alert("ネットワークに問題が発生しました。");
        };
        request.send(null);
    }
    
    function load(){
        var url = "http://ec2-52-197-183-181.ap-northeast-1.compute.amazonaws.com:8080/SNS/login?id=" + getCookie("id") + "&pass=" + getCookie("pass"); // リクエスト先URL
        var request = new XMLHttpRequest();
        request.open('GET', url, false);
        request.onload = function () {
            if(request.responseText.match(/true\n/)){
                location.href = "timeline.html";
            }else{
                document.getElementById('id').value = getCookie("id");
                document.getElementById('pass').value = getCookie("pass");
            }
        };
        request.onerror = function() {
            alert("ネットワークに問題が発生しました。");
        };
        request.send(null);
    }