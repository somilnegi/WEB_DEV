<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
</head>
<body>
    <h2>Login Page</h2>

    <form method="post">
        <label for="email">Email: </label>
        <input type="email" name="email" id="email" required>
        <br>
        <br>
        <label for="password">Password: </label>
        <input type="password" name="password" id="password" required>
        <br>
        <br>
        <input type="submit" value="Login">
    </form>

    <?php
        session_start();
        $valid_email="somilnegi@gmail.com";
        $valid_pwd="somilnegi";

        if($_SERVER["REQUEST_METHOD"]=="POST") {
            $user_email=$_POST['email'];
            $user_pwd=$_POST['password'];

            if($user_email==$valid_email && $user_pwd==$valid_pwd) {
                $_SESSION['email']=$user_email;
                $_SESSION['loggedin']=true;
                header("Location: Welcome.php");
                exit();
            }
            else {
                $error_message="Invalid Credentials";
            }
        }
    ?>
</body>
</html>