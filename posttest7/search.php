<?php
require 'db.php';
if (isset($_GET['query'])) {
    $searchQuery = $_GET['query'];
    $stmt = $conn->prepare("SELECT * FROM cats WHERE name LIKE ?");
    $likeQuery = "%$searchQuery%";
    $stmt->bind_param("s", $likeQuery);
    $stmt->execute();
    $result = $stmt->get_result();
}
?>
<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #f8f9fa;
        margin: 0;
        padding: 20px;
    }

    form {
        margin-bottom: 20px;
    }

    input[type="text"] {
        padding: 10px;
        border: 1px solid #ced4da;
        border-radius: 4px;
        width: 300px; /* Ubah sesuai kebutuhan */
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    button {
        padding: 10px 15px;
        border: none;
        border-radius: 4px;
        background-color: #007bff;
        color: white;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    button:hover {
        background-color: #0056b3;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        padding: 10px;
        background-color: #ffffff;
        border: 1px solid #ced4da;
        border-radius: 4px;
        margin-bottom: 10px;
        transition: background-color 0.3s;
    }

    li:hover {
        background-color: #f1f1f1;
    }

    p {
        color: #dc3545; /* Warna merah untuk pesan error */
    }
</style>


<form method="GET" action="search.php">
    <input type="text" name="query" placeholder="Cari kucing...">
    <button type="submit">Cari</button>
</form>

<?php if (isset($result) && mysqli_num_rows($result) > 0) { ?>
    <ul>
        <?php while ($cat = mysqli_fetch_assoc($result)) { ?>
            <li><?php echo htmlspecialchars($cat['name']); ?></li>
        <?php } ?>
    </ul>
<?php } else if (isset($result)) { ?>
    <p>Tidak ada kucing ditemukan.</p>
<?php } ?>
