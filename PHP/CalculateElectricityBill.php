<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculate Bill</title>
</head>
<body>
    <h1>Calculate the electricity bill</h1>

    <form method="post">
        <label for="prev">Previous Reading: </label>
        <input type="number" name="prev" id="prev" required>
        <br>
        <label for="curr">Current Reading: </label>
        <input type="number" name="curr" id="curr" required>
        <input type="submit" value="Calculate Bill">
    </form>

    <?php
        // Function to calculate bill
        function calculate($prev, $curr) {
            if($curr>=$prev) {
                $diff=$curr-$prev;
                $bill=0;
                if($diff<=100) {
                    $bill=($diff*3);
                }
                else if($diff>100 && $diff<=200) {
                    $bill=(100*3)+(($diff-100)*4);
                }
                else if($diff>200 && $diff<=300) {
                    $bill=(100*3)+(100*4)+(($diff-200)*5);
                }
                else {
                    $bill=(100*3)+(100*4)+(100*5)+(($diff-300)*6);
                }
                return [
                    'units'=>$diff,
                    'bill'=>$bill
                ];
            }
        }

        $result=null;
        if($_SERVER["REQUEST_METHOD"]=="POST") {
            $prevReading=$_POST['prev'];
            $currReading=$_POST['curr'];
            $result=calculate($prevReading, $currReading);
        }

        if(isset($result)) {
            if(is_array($result)) {
                echo "<h3>Units Consumed: {$result['units']}</h3>";
                echo "<h3>Total Bill: {$result['bill']}</h3>";
            }
            else {
                echo "<h3 style='color:red;'>Error</h3>";
            }
        }

    ?>
</body>
</html>