<?php
if(isset($_POST['email'])) {

	// EDIT THE 2 LINES BELOW AS REQUIRED
	$email_to = "mallibu97@gmail.com";
	$email_subject = "Email from Christos Portfolio";

	function died($error) {
		// your error code can go here
		echo "We are very sorry, but there were error(s) found with the form you submitted. ";
		echo "These errors appear below.<br /><br />";
		echo $error."<br /><br />";
		echo "Please go back and fix these errors.<br /><br />";
		die();
	}

	// validation expected data exists
	if(!isset($_POST['name']) ||
		!isset($_POST['email']) ||
		!isset($_POST['comment'])) {
		died('We are sorry, but there appears to be a problem with the form you submitted.');

	}

	$name = $_POST['name']; // required
	$email = $_POST['email']; // required
	$comment = $_POST['comment']; // required

	$error_message = "";

	if(strlen($error_message) > 0) {
		died($error_message);
	}
	$email_message = "Form details below.\n\n";

	function clean_string($string) {
		$bad = array("content-type","bcc:","to:","cc:","href");
		return str_replace($bad,"",$string);
	}

	$email_message .= "Name: ".clean_string($name)."\n";
	$email_message .= "Email: ".clean_string($email)."\n";
	$email_message .= "Comments: ".clean_string($comment)."\n";


// create email headers
	$headers = 'From: '.$email."\r\n".
		'Reply-To: '.$email."\r\n" .
		'X-Mailer: PHP/' . phpversion();
	@mail($email_to, $email_subject, $email_message, $headers);


	/*<!-- include your own success html here -->*/

}
?>

<div class="row">
	<div class="eight column centered">
		<h3> Thank you for contacting with me </h3>
		<a href="index.html"> Back to main page </a>
	</div>
</div>


















