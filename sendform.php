<?php
//Сбор данных из полей формы. 
$name = $_POST['name'];// Берём данные из input c атрибутом name="name"
$phone = $_POST['phone']; // Берём данные из input c атрибутом name="phone"
$message = $_POST['message']; // Берём данные из input c атрибутом name="message"

$token = "5526058062:AAHQoss786tCbmEGIZVSC__p0ScZo2fmLHY"; // Тут пишем токен
$chat_id = "-799377025"; // Тут пишем ID группы, куда будут отправляться сообщения
$sitename = "https://fineday1990.github.io/Theater_Darya_Baryshnikova/"; //Указываем название сайта

$arr = array(

  'Заявка с сайта: ' => $sitename,
  'Имя: ' => $name,
  'Телефон: ' => $phone,
  'Сообщение' => $message
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>