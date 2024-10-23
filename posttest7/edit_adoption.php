<?php
require 'db.php';


if (isset($_GET['id'])) {
    $id = $_GET['id'];

  
    $sql = "SELECT * FROM adoptions WHERE id = $id";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
      
        $row = $result->fetch_assoc();
        $name = $row['name'];
        $phone = $row['phone'];
        $email = $row['email'];
        $reason = $row['reason'];
        $adoption_date = $row['adoption_date'];
        $bukti_pembayaran = $row['bukti_pembayaran'];
    } else {
        echo "<script>alert('Data tidak ditemukan.'); 
        window.location.href='adopsi.html';</script>";
        exit();
    }
}

if (isset($_POST["submit"])) {
    
    $id = $_POST['id'];
    $nama = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $reason = $_POST['reason'];
    $date = $_POST['date'];

    
    $sql_get_old = "SELECT bukti_pembayaran FROM adoptions WHERE id = $id";
    $result = $conn->query($sql_get_old);
    $row = $result->fetch_assoc();
    $old_bukti_pembayaran = $row['bukti_pembayaran'];

    
    if ($_FILES['files']['name'] != "") {
        $bukti_pembayaran = $_FILES['files']['name'];
        $dir = "img/";
        $tmp_file = $_FILES['files']['tmp_name'];
        $extensi = explode('.', $bukti_pembayaran);
        $extensi = strtolower(end($extensi));
        $name_baru = date('Y-m-d H.i.s').'.'.$extensi;

        $support = ['jpg', 'jpeg', 'png'];
        $size = $_FILES['files']['size'];
        $max_size = 1 * 1024 * 1024;

        if (in_array($extensi, $support)) {
            if ($size < $max_size) {
                if (move_uploaded_file($tmp_file, $dir.$name_baru)) {
                    
                    $old_file_path = "img/" . $old_bukti_pembayaran;
                    if (file_exists($old_file_path)) {
                        unlink($old_file_path);
                    }
                } else {
                    echo "<script>alert('Gagal mengunggah file baru'); 
                    window.location.href='edit_adoption.php?id=$id';</script>";
                    exit();
                }
            } else {
                echo "<script>alert('Ukuran file melebihi 1MB'); 
                window.location.href='edit_adoption.php?id=$id';</script>";
                exit();
            }
        } else {
            echo "<script>alert('Format file tidak didukung'); 
            window.location.href='edit_adoption.php?id=$id';</script>";
            exit();
        }
    } else {
        
        $name_baru = $old_bukti_pembayaran;
    }

    
    $sql_update = "UPDATE adoptions 
                   SET name='$nama', phone='$phone', email='$email', reason='$reason', adoption_date='$date', bukti_pembayaran='$name_baru' 
                   WHERE id = $id";

    if ($conn->query($sql_update) === TRUE) {
        echo "<script>alert('Data berhasil diupdate'); 
        window.location.href='crud_admin.php';</script>";
        exit();
    } else {
        echo "<script>alert('Gagal mengupdate data: " . $conn->error . "'); 
        window.location.href='edit_adoption.php?id=$id';</script>";
        exit();
    }
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Pengajuan Adopsi</title>
    <link rel="stylesheet" href="form.css">
</head>
<body>

    <div class="form-container">
        <h2>Edit Form Pengajuan Adopsi</h2>
        <form action="edit_adoption.php" method="POST" enctype="multipart/form-data">
            <input type="hidden" name="id" value="<?php echo $id; ?>">

            <label for="name">Nama Lengkap:</label>
            <input type="text" name="name" value="<?php echo $name; ?>" required>

            <label for="phone">Nomor Telepon:</label>
            <input type="tel" name="phone" value="<?php echo $phone; ?>" required>

            <label for="email">Email:</label>
            <input type="email" name="email" value="<?php echo $email; ?>" required>

            <label for="reason">Alasan Adopsi:</label>
            <textarea name="reason" rows="4" required><?php echo $reason; ?></textarea>

            <label for="date">Tanggal Adopsi:</label>
            <input type="date" name="date" value="<?php echo $adoption_date; ?>" required>

            <label for="bukti_pembayaran">Bukti Pembayaran:</label>
            <input type="file" name="files">
            <p>File saat ini: <?php echo $bukti_pembayaran; ?></p>

            <button type="submit" name="submit">Update</button>
        </form>
    </div>

</body>
</html>
