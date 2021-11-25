/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function updatePlace(){
    navigator.geolocation.getCurrentPosition(function successFunc( position ){
            var url = "http://ec2-52-197-183-181.ap-northeast-1.compute.amazonaws.com:8080/SNS/updatePlace?id=" + getCookie("id") + "&pass=" + getCookie("pass") + "&latitude=" + position.coords.latitude + "&longitude=" + position.coords.longitude;
            var request = new XMLHttpRequest();
            request.open('GET', url, false);
            request.onload = function () {};
            request.onerror = function() {
                alert("ネットワークに問題が発生しました。");
            };
            request.send(null);
        },
        function errorFunc( error ){
            // エラーコードのメッセージを定義
            var errorMessage = {
                0: "原因不明のエラーが発生しました。" ,
                1: "位置情報の取得が許可されませんでした。" ,
                2: "電波状況に問題が発生しました。" ,
                3: "タイムアウトしました。" 
            };

            // エラーコードに合わせたエラー内容をアラート表示
            //alert( errorMessage[error.code] ) ;
        },
        {
            "enableHighAccuracy": false ,
            "timeout": 8000 ,
            "maximumAge": 5000
        }
    );
}