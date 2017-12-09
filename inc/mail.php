<?php


   if(isset($_POST['send']))
   {
     $name = $_POST['name'];
     $company = $_POST['company'];
     $email = $_POST['email'];
     $query = $_POST['query'];

     $formcontent = "From: $name \n Message: $query";
     $recipient = "emma@coffeeandcuriosity.net";
     $subject = "Email query from website";
     $mailheader = "From: $email \r\n";

     if (mail($recipient, $subject, $formcontent, $mailheader))
     {

       echo '<p>Thank you. Message sent successfully!</p>';
     } else {
       echo '<p>Something went wrong! Please try again</p>';
     }
   }

?>
