/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    function jumpSetting(){
        location.href = "setting.html";
    }

    function jumpProfile(){
        location.href = "profile.html";
    }
    
    function delcon(obj){
        if(getCookie("id") === obj.parentNode.children[0].innerHTML){
            var ret = confirm("投稿を削除してよろしいでしょうか");
            if (ret === true){
                var url = "http://ec2-52-197-183-181.ap-northeast-1.compute.amazonaws.com:8080/SNS/deleteContribution?id=" + getCookie("id") + "&pass=" + getCookie("pass") + "&date=" + obj.parentNode.children[3].innerHTML; // リクエスト先URL
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
    }

    function getTimeline(){
        
        updatePlace();
        
        var url = "http://ec2-52-197-183-181.ap-northeast-1.compute.amazonaws.com:8080/SNS/getContribution?id=" + getCookie("id") + "&pass=" + getCookie("pass"); // リクエスト先URL
        
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.onload = function () {
            var data = request.responseText;
            var reg = /"[^,]+", "[^,]+", "[^,]+", "\d{4}\-\d{2}\-\d{2} \d{2}:\d{2}:\d{2}\.\d"(, "[^,]+", "[^,]+", "\d{4}\-\d{2}\-\d{2} \d{2}:\d{2}:\d{2}\.\d", "[^,]+", "[^,]+", "[^,]+", "[^,]+")?\n/g;
            var list = document.getElementById("list");
            
            var a = [];
            var m = [];
            
            a = data.match(reg);
            
            for(var i = 0; i < a.length; i++){
                var child = document.createElement("li");
                m = a[i].match(/"[^,]+"/g);
                var id = document.createElement("p");
                id.innerHTML = m[0].slice(1, -1);
                id.style.display = "none";
                var name = document.createElement("p");
                name.innerHTML = m[1].slice(1, -1);
                var contribution = document.createElement("p");
                contribution.innerHTML = m[2].slice(1, -1);
                var date = document.createElement("p");
                date.innerHTML = m[3].slice(1, -1);
                var del = document.createElement("p");
                del.id = "delete";
                del.innerHTML = "...";
                del.onclick = new Function("delcon(this);");
                child.appendChild(id);
                child.appendChild(name);
                child.appendChild(contribution);
                child.appendChild(date);
                child.appendChild(del);
                list.appendChild(child);
            }
            
        };
        
        request.onerror = function() {
            alert("ネットワークに問題が発生しました。");
        };
        
        request.send(null);
    }
    
    function post_con(){
        var ret = window.prompt("投稿内容を入力", "");
        if (ret !== null){
            var url = "http://ec2-52-197-183-181.ap-northeast-1.compute.amazonaws.com:8080/SNS/contribution?id=" + getCookie("id") + "&pass=" + getCookie("pass") + "&contribution=" + ret; // リクエスト先URL
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