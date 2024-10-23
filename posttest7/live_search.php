<?php
require 'db.php';
if (isset($_POST['query'])) {
    $query = $_POST['query'];
    $sql = "SELECT * FROM cats WHERE name LIKE '%$query%'";
    $result = mysqli_query($conn, $sql);
    while ($cat = mysqli_fetch_assoc($result)) {
        echo "<p>" . $cat['name'] . "</p>";
    }
}
?>
