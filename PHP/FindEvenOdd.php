<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Find Even/Odd</title>
</head>
<body>
    <h1>Find the number is even or odd</h1>

    <form method="post" >
        <label for="number">Enter a number to check the number is ODD or EVEN: </label>
        <input type="number" name="number" id="number" placeholder="Enter number">
        <br>
        <label for="maximum">Enter three numbers to find the maximum among them: </label>
        <input type="number" name="a" placeholder="Enter 1st number">
        <input type="number" name="b" placeholder="Enter 2nd number">
        <input type="number" name="c" placeholder="Enter 3rd number">
        <br>
        <input type="submit" value="Submit">
    </form>

    <?php
        if($_SERVER["REQUEST_METHOD"]=="POST") {
            // Find even or odd
            $num=$_POST['number'];
            if($num%2==0) {
                echo "<p>$num is even</p>";
            }
            else {
                echo "<p>$num is odd</p>";
            }

            // Max of three
            $a=$_POST['a'];
            $b=$_POST['b'];
            $c=$_POST['c'];
            $max=$a;
            if($max<$b) {
                $max=$b;
            }
            if($max<$c) {
                $max=$c;
            }
            echo "<p>The maximum among $a, $b and $c is $max</p>";
        }
    ?>

</body>
</html>