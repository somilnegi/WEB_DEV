<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Variable Handling Functions</title>
</head>
<body>
    <h1>Variable Handling Functions</h1>
    <hr>
    <h2>gettype() & settype()</h2>
    <?php
        $var=42;
        echo "Initial value of \$var: $var";
        echo "<br>";
        echo "Initial type: ".gettype($var);
        echo "<br>";
        
        settype($var, "string");
        echo "After settype to string: $var";
        echo "<br>";
        echo "Type now: ".gettype($var);
        echo "<br>";
        
        settype($var, "float");
        echo "After settype to float: $var";
        echo "<br>";
        echo "Type now: ".gettype($var);
        echo "<br>";
        ?>
    <hr>
    <h2>isset() & unset()</h2>
    <?php
        $name="John";
        $age=null;
        $email="John12@gmail.com";
        
        echo "Is \$name set?".(isset($name)? "Yes": "No");
        echo "<br>";
        echo "Is \$age set?".(isset($age)? "Yes": "No");
        echo "<br>";
        echo "Is \$email set?".(isset($email)? "Yes": "No");
        echo "<br>";
        
        $city="Delhi";
        echo "city before unset: $city";
        echo "<br>";
        unset($city);
        echo "Is \$city set after unset: ".(isset($city)? "Yes": "No");
    ?>

</body>
</html>