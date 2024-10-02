<!-- submit_adoption.php -->
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
</html>
