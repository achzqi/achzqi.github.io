<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    require 'db.php';  // Hubungkan ke database
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);  // Hash password

    // Masukkan pengguna baru dengan role 'user' secara default
    $sql = "INSERT INTO users (username, password, role) VALUES ('$username', '$password', 'user')";
    if (mysqli_query($conn, $sql)) {
        echo "<div class='message'>Registrasi berhasil</div>";
    } else {
        echo "<div class='message'>Error: " . $sql . "<br>" . mysqli_error($conn) . "</div>";
    }
    mysqli_close($conn);
}
?>

<style>
/* Styling form registrasi */
form {
    width: 300px;
    margin: 50px auto;
    padding: 20px;
    background-color: #f2f2f2;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

input[type="text"], input[type="password"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: #f9f9f9;
}

button[type="submit"] {
    width: 100%;
    background-color: #347928;
    color: white;
    padding: 14px 20px;
    margin: 10px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

button[type="submit"]:hover {
    background-color: #18570d;
}

.message {
    margin-top: 20px;
    font-size: 14px;
    color: #4caf50;
    text-align: center;
}
</style>

<form method="POST" action="register.php">
    <input type="text" name="username" placeholder="Username" required>
    <input type="password" name="password" placeholder="Password" required>
    <button type="submit">Registrasi</button>
</form>
