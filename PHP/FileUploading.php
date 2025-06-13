<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Upload</title>
</head>
<body>
    <h1>File Uploading in PHP</h1>

    <form method="post" enctype="multipart/form-data">
        <label for="file">Select the file to upload: </label>
        <input type="file" name="uploadedFile" id="file">
        <input type="submit" name="submit" value="Upload">
    </form>

    <?php
        if(isset($_POST['submit'])) {
            // Directory to upload the file
            $targetDir="uploads/";
            if(!is_dir($targetDir)) {
                mkdir($targetDir);
            }
            
            $file=$_FILES['uploadedFile'];
            $filename=ba`sename($file['name']);
            $targetFilePath=$targetDir.$filename;
            $fileType=strtolower(pathinfo($targetFilePath, PATHINFO_EXTENSION));

            $allowedTypes=['jpg', 'jpeg', 'png', 'pdf'];
            $maxSize=2*1024*1024;

            if(in_array($fileType, $allowedTypes)) {
                if($file['size']<=$maxSize) {
                    if(move_uploaded_file($file['tmp_name'], $targetFilePath)) {
                        echo "<p style='color:green;'>File uploaded successfully</p>";
                    }
                    else {
                        echo "<p style='color:red:'>Error uploading the file</p>";
                    }
                }
                else {
                    echo "<p style='color:red:'>File is too large, maximum allowed size is 2MB</p>";
                }
            }
            else {
                echo "<;p style='color:red:'>Invalid file type</p>";
            }
        }
    ?>
</body>
</html>