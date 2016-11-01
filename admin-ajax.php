<?php
	if(isset($_POST))
	{	

		$site = $_SERVER['HTTP_HOST'];
	    
	    $subject = "Новая заявка с сайта $site";

	    $name = $_POST['name'];
	    $email = $_POST['email'];
	  	$content = $_POST['content'];

	    $text ='Имя: '.$name.' <br>'.'Email: '.$email.'<br> Заказ: ' . $content;
	   
	    $headers = "MIME-Version: 1.0" . "\r\n";
	    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
		$headers .= "From: $site <info@$site>"."\r\n";
		
		if ( mail('falenfal@gmail.com', $subject, $text, $headers) ) echo "Message Could not be sent";
	}
?> 