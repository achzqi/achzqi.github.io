<?php
require 'db.php';

if (isset($_GET['id'])) {
    $id = $_GET['id'];

    $sql = "SELECT bukti_pembayaran FROM adoptions WHERE id = $id";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $bukti_pembayaran = $row['bukti_pembayaran'];

        
        $file_path = "img/" . $bukti_pembayaran;

      
        if (file_exists($file_path)) {
            if (unlink($file_path)) {
               
                $sql_delete = "DELETE FROM adoptions WHERE id = $id";

                if ($conn->query($sql_delete) === TRUE) {
                    echo "<script>alert('Data dan file berhasil dihapus.'); 
                    window.location.href='crud_admin.php';</script>";
                } else {
                    echo "<script>alert('Gagal menghapus data dari database: " . $conn->error . "'); 
                    window.location.href='crud_admin.php   ';</script>";
                }
            } else {
                echo "<script>alert('Gagal menghapus file dari direktori.'); 
                window.location.href='crud_admin.php';</script>";
            }
        } else {
            echo "<script>alert('File tidak ditemukan.'); 
            window.location.href='crud_admin.php';</script>";
        }
    } else {
        echo "<script>alert('Data tidak ditemukan di database.'); 
        window.location.href='crud_admin.php';</script>";
    }
} else {
    echo "<script>alert('ID tidak ditemukan.'); 
    window.location.href='crud_admin.php';</script>";
}

?>
