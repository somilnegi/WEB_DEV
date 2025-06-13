<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome Page</title>
</head>
<body>
    <?php
        session_start();
        if(!isset($_SESSION['loggedin']) || $_SESSION['loggedin']!==true) {
            header("Location: Login.php");
            exit();
        }
    ?>
    <h2>Welcome,
         <?php 
            if(isset($_SESSION['email'])) {
                echo $_SESSION['email'];
            }
        ?> 
    </h2>
    <p>You're Logged In</p>
    <a href="Logout.php">Logout</a>

</body>
</html>