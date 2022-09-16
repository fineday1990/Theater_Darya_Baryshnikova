<?php
//Сбор данных из полей формы. 
$name = $_POST['name'];// Берём данные из input c атрибутом name="name"
$phone = $_POST['phone']; // Берём данные из input c атрибутом name="phone"
$email = $_POST['email']; // Берём данные из input c атрибутом name="mail"
$message = $_POST['message'];

$token = "5643222195:AAHNiav9EmhF9KXA9RrxeUT3hqeEJXUTmjg"; // Тут пишем токен
$chat_id = "-702925992"; // Тут пишем ID группы, куда будут отправляться сообщения
$sitename = "teatrnovocheboksarsk.ru"; //Указываем название сайта

$arr = array(

  'Заказ с лучшего сайта: ' => $sitename,
  'Имя: ' => $name,
  'Телефон: ' => $phone,
  'Почта: ' => $email,
  'Сообщение: ' => $message
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");


?>