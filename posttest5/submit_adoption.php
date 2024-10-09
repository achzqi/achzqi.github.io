<!-- submit_adoption.php
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hasil Pengajuan Adopsi</title>
    <link rel="stylesheet" href="form.css">
</head>
<body>

    <div class="form-container">
        <h2>Hasil Pengajuan Adopsi</h2>
        <p><strong>Nama Lengkap:</strong> <?php echo htmlspecialchars($_POST['name']); ?></p>
        <p><strong>Alamat:</strong> <?php echo htmlspecialchars($_POST['address']); ?></p>
        <p><strong>Nomor Telepon:</strong> <?php echo htmlspecialchars($_POST['phone']); ?></p>
        <p><strong>Email:</strong> <?php echo htmlspecialchars($_POST['email']); ?></p>
        <p><strong>Usia:</strong> <?php echo htmlspecialchars($_POST['age']); ?></p>
        <p><strong>Pekerjaan:</strong> <?php echo htmlspecialchars($_POST['occupation']); ?></p>
        <p><strong>Alasan Adopsi:</strong> <?php echo htmlspecialchars($_POST['reason']); ?></p>
    </div>

</body>
</html> -->

<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $reason = $_POST['reason'];
    $date = $_POST['date'];

    $sql = "INSERT INTO adoptions (name, phone, email, reason, adoption_date)
            VALUES ('$name', '$phone', '$email', '$reason', '$date')";

    if (mysqli_query($conn, $sql)) {
        echo "Data berhasil disimpan!";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    mysqli_close($conn);
}
?>

