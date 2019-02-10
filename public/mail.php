<?php
//process.php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $user_email = $_POST["email"];
    $message = $_POST["msg"];

    $email = "seong0814@naver.com"; // 받는 메일 주소
    $title = "=?EUC-KR?B?".base64_encode(iconv("UTF-8","EUC-KR","[포폴] 문의 메일"))."?=";
    $message = "n이름 : ". $name . "\n이메일 : ". $user_email. "\n문의내용 : ". $message;
    $mailheader = "From:" . $user_email . "\r\nContent-Type: text/html; charset=utf-8";

    mail($email, $title, iconv("UTF-8","EUC-KR",$message), $mailheader);
}
?>