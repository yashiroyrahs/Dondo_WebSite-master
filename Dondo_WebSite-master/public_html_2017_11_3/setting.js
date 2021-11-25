/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    function jumpTimeLine(){
        location.href = "timeline.html";
    }
    
    function jumpProfile(){
        location.href = "profile.html";
    }
    
    function editprofile(){
        var ret = window.prompt("プロフィール文を入力", "");
        if (ret !== null){
            var url = "http://ec2-52-197-183-181.ap-northeast-1.compute.amazonaws.com:8080/SNS/setProfile?id=" + getCookie("id") + "&pass=" + getCookie("pass") + "&profile=" + ret; // リクエスト先URL
            var request = new XMLHttpRequest();
            request.open('GET', url, false);
            request.onload = function () {
                
            };
            request.onerror = function() {
                alert("ネットワークに問題が発生しました。");
            };
            request.send(null);
        }
    }
    
    function changename(){
        var ret = window.prompt("ユーザー名を入力", "");
        if (ret !== null){
            var url = "http://ec2-52-197-183-181.ap-northeast-1.compute.amazonaws.com:8080/SNS/changeName?id=" + getCookie("id") + "&pass=" + getCookie("pass") + "&name=" + ret; // リクエスト先URL
            var request = new XMLHttpRequest();
            request.open('GET', url, false);
            request.onload = function () {
                
            };
            request.onerror = function() {
                alert("ネットワークに問題が発生しました。");
            };
            request.send(null);
        }
    }

    function changepass(){
        var ret = window.prompt("新しいパスワードを入力", "");
        if (ret !== null){
            var url = "http://ec2-52-197-183-181.ap-northeast-1.compute.amazonaws.com:8080/SNS/changePass?id=" + getCookie("id") + "&pass=" + getCookie("pass") + "&newPass=" + ret; // リクエスト先URL
            setCookie("pass", ret, 1e6);
            var request = new XMLHttpRequest();
            request.open('GET', url, false);
            request.onload = function () {
                
            };
            request.onerror = function() {
                alert("ネットワークに問題が発生しました。");
            };
            request.send(null);
        }
    }
    
    function logout(){
        setCookie("id", "", 1e6);
        setCookie("pass", "", 1e6);
        location.href = "index.html";
    }

    function unsubscride(){
        if(window.confirm('アカウントを削除してもよろしいでしょうか')){
		    var url = "http://ec2-52-197-183-181.ap-northeast-1.compute.amazonaws.com:8080/SNS/unsubscride?id=" + getCookie("id") + "&pass=" + getCookie("pass");
            var request = new XMLHttpRequest();
            request.open('GET', url, false);
            request.onload = function () {
                setCookie("id", "", 1e6);
                setCookie("pass", "", 1e6);
                location.href = "index.html";
            };
            request.onerror = function() {
                alert("ネットワークに問題が発生しました。");
            };
            request.send(null);
	    }
    }

    function sendmail(){
        var ret = window.prompt("お問い合わせ内容を入力", "");
        if (ret !== null){
            var url = "http://ec2-52-197-183-181.ap-northeast-1.compute.amazonaws.com:8080/SNS/contact?id=" + getCookie("id") + "&pass=" + getCookie("pass") + "&con=" + ret; // リクエスト先URL
            var request = new XMLHttpRequest();
            request.open('GET', url, false);
            request.onload = function () {
                
            };
            request.onerror = function() {
                alert("ネットワークに問題が発生しました。");
            };
            request.send(null);
        }
    }