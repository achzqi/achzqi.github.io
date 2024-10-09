<?php
include 'db.php';

$id = $_GET['id'];
$result = mysqli_query($conn, "SELECT * FROM adoptions WHERE id=$id");
$row = mysqli_fetch_assoc($result);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $reason = $_POST['reason'];
    $date = $_POST['date'];

    $sql = "UPDATE adoptions SET name='$name', phone='$phone', email='$email', reason='$reason', adoption_date='$date' WHERE id=$id";

    if (mysqli_query($conn, $sql)) {
        echo "Data berhasil diperbarui!";
        header('Location: crud_admin.php');
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}
?>

<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
    }

    .form-container {
        background-color: white;
        border: 2px solid #347928;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        width: 400px;
    }

    .form-container h2 {
        color: #347928;
        margin-bottom: 20px;
        text-align: center;
    }

    input[type="text"], input[type="email"], input[type="date"], textarea {
        width: calc(100% - 20px);
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }

    textarea {
        resize: vertical;
    }

    button {
        background-color: #FCCD2A;
        color: white;
        padding: 10px 15px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
    }

    button:hover {
        background-color: #e5b922;
    }

    label {
        color: #347928;
        font-weight: bold;
    }
</style>

<div class="form-container">
    <h2>Edit Data Adopsi</h2>
    <form method="POST">
        <label for="name">Nama:</label>
        <input type="text" id="name" name="name" value="<?php echo htmlspecialchars($row['name']); ?>" required><br>

        <label for="phone">Telepon:</label>
        <input type="text" id="phone" name="phone" value="<?php echo htmlspecialchars($row['phone']); ?>" required><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" value="<?php echo htmlspecialchars($row['email']); ?>" required><br>

        <label for="reason">Alasan:</label>
        <textarea id="reason" name="reason" required><?php echo htmlspecialchars($row['reason']); ?></textarea><br>

        <label for="date">Tanggal Adopsi:</label>
        <input type="date" id="date" name="date" value="<?php echo htmlspecialchars($row['adoption_date']); ?>" required><br>

        <button type="submit">Update</button>
    </form>
</div>
