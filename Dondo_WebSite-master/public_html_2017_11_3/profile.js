    function jumpTimeLine(){
        location.href = "timeline.html";
    }

    function jumpSetting(){
        location.href = "setting.html";
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


function getProfile(){
    var url = "http://ec2-52-197-183-181.ap-northeast-1.compute.amazonaws.com:8080/SNS/getMyUserData?id=" + getCookie("id") + "&pass=" + getCookie("pass"); // リクエスト先URL
    
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function () {
        
        var data = request.responseText;
        var reg = /"[^,]+", "[^,]+", "[^,]+", "[^,]+", "[^,]+"\n/g;
        var list = document.getElementById("list");
        
        var a = [];
        var m = [];

        a = data.match(reg);
        if(a != null){
        var child = document.createElement("li");
        m = a[0].match(/"[^,]+"/g);
        var id = document.createElement("p");
        id.innerHTML = m[0].slice(1, -1);
        id.style.display = "none";
        var name = document.createElement("p");
        name.innerHTML = m[1].slice(1, -1);
        var contribution = document.createElement("p");
        contribution.innerHTML = m[4].slice(1, -1);
        child.appendChild(id);
        child.appendChild(name);
        child.appendChild(contribution);
        list.appendChild(child);
        }

        var url_2 = "http://ec2-52-197-183-181.ap-northeast-1.compute.amazonaws.com:8080/SNS/getUserContribution?id=" + getCookie("id") + "&pass=" + getCookie("pass") + "&contributor=" + getCookie("id"); // リクエスト先URL
        var request_2 = new XMLHttpRequest();
        request_2.open('GET', url_2);
        request_2.onload = function () {
            var data = request_2.responseText;
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
        
        request_2.onerror = function() {
            alert("ネットワークに問題が発生しました。");
        };
        
        request_2.send(null);
            
    };
    
    request.onerror = function() {
        alert("ネットワークに問題が発生しました。");
    };
    
    request.send(null);
}