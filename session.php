<?php 
	session_start();
	
	if (!isset($_SESSION['login_user']) || !isset($_SESSION['username'])) {
		header("location: login.php");
		die();
	}
	$login_session = $_SESSION['login_user'];
	$user_session = $_SESSION['username'];
?>