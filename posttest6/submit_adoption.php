<?php
require 'db.php';

if (isset($_POST["submit"])) {
    
    $nama = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $reason = $_POST['reason'];
    $date = $_POST['date'];
    $bukti_pembayaran = $_FILES['files']['name'];
    $dir = "img/"; 
    $tmp_file = $_FILES['files']['tmp_name'];
    $extensi = explode('.', $bukti_pembayaran);
    $extensi = strtolower(end($extensi));
    date_default_timezone_set('Asia/Makassar');
    $name_baru = date('Y-m-d H.i.s').'.'.$extensi; 

    
    $support = ['jpg', 'jpeg', 'png'];
    $size = $_FILES['files']['size'];
    $max_size = 1 * 1024 * 1024; 

    if(in_array($extensi, $support)) {
        if($size < $max_size) {
            
            if(move_uploaded_file($tmp_file, $dir.$name_baru)){
             
                $sql = "INSERT INTO adoptions (name, phone, email, reason, adoption_date, bukti_pembayaran) 
                VALUES ('$nama', '$phone', '$email', '$reason', '$date', '$name_baru')"; 
                
                if ($conn->query($sql) === TRUE) {
                    echo "<script>alert('Data berhasil disimpan'); 
                    window.location.href='adopsi.html';
                    </script>";
                } else {
                    echo "<script>alert('Gagal menyimpan data: " . $conn->error . "'); 
                    window.location.href='adopsi.html';
                    </script>";
                }

            } else {
                echo "<script>alert('Gagal mengunggah file'); 
                window.location.href='adopsi.html';
                </script>";
            }
        } else {
            echo "<script>alert('Ukuran file melebihi 1MB'); 
            window.location.href='adopsi.html';
            </script>";
        }
    } else {
        echo "<script>alert('Format file tidak didukung'); 
        window.location.href='adopsi.html';
        </script>";
    }
}
?>
