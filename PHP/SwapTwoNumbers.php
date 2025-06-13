<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Swap Numbers</title>
</head>
<body>
    <h1>Swap two numbers</h1>

    <form method="post">
        <label for="num1">Enter 1st number: </label>
        <input type="number" name="num1" id="num1">
        <label for="num2">Enter 2nd number: </label>
        <input type="number" name="num2" id="num2">
        <input type="submit" value="Submit">
    </form>

    <?php
        if($_SERVER["REQUEST_METHOD"]=="POST") {
            $num1=$_POST['num1'];
            $num2=$_POST['num2'];
            echo "<p>Before swapping => Number 1: $num1 & Number 2: $num2</p>";
            $temp=$num1;
            $num1=$num2;
            $num2=$temp;
            echo "<p>After swapping => Number 1: $num1 & Number 2: $num2</p>";
        }
    ?>
</body>
</html>