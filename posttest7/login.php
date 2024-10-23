<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    require 'db.php';  // Hubungkan ke database
    $username = $_POST['username'];
    $password = $_POST['password'];
    $role = $_POST['role'];

    // Ambil data pengguna dari database
    $stmt = $conn->prepare("SELECT * FROM users WHERE username=? AND role=?");
    $stmt->bind_param("ss", $username, $role);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();

    // Periksa apakah pengguna ada dan password cocok
    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['user'] = $user['username'];
        $_SESSION['role'] = $user['role'];

        // Redirect sesuai dengan role
        if ($user['role'] == 'admin') {
            header("Location: crud_admin.php");  
        } else {
            header("Location: index.html");  
        }
        exit; // Pastikan script berhenti setelah redirect
    } else {
        echo "Login gagal. Cek username, password, atau role Anda.";
    }
    mysqli_close($conn);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <style>
        /* Styling form login */
        form {
            width: 300px;
            margin: 100px auto;
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        input[type="text"], input[type="password"], select {
            width: 100%;
            padding: 12px;
            margin: 8px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
            font-size: 16px;
        }
        button[type="submit"] {
            width: 100%;
            background-color: #4CAF50;
            color: white;
            padding: 14px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s ease;
        }
        button[type="submit"]:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>

<form method="POST" action="login.php">
    <h2>Login</h2>
    <input type="text" name="username" placeholder="Username" required>
    <input type="password" name="password" placeholder="Password" required>
    <select name="role" required>
        <option value="user">User</option>
        <option value="admin">Admin</option>
    </select>
    <button type="submit">Login</button>
</form>

</body>
</html>
