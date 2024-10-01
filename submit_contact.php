<?php
  if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Send the email (PHP's mail function can be used, but SMTP is recommended for better reliability)
    $to = "your-email@example.com";
    $subject = "New Contact from $name";
    $body = "Name: $name\nEmail: $email\n\nMessage: $message";

    if(mail($to, $subject, $body)){
      echo "Message sent successfully!";
    } else {
      echo "Message failed to send.";
    }
  }
?>
