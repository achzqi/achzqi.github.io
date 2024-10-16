<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Adopsi</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }

        table {
            border-collapse: collapse;
            width: 80%;
            margin: 20px 0;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        th, td {
            padding: 12px;
            text-align: left;
        }

        th {
            background-color: #FCCD2A;
            color: #fff;
        }

        tr:nth-child(even) {
            background-color: #f9f9f9;
        }

        tr:nth-child(odd) {
            background-color: #fff;
        }

        td {
            border-bottom: 1px solid #ddd;
        }

        tr:hover {
            background-color: #f1f1f1;
        }

        a {
            color: #347928;
            text-decoration: none;
            font-weight: bold;
        }

        a:hover {
            color: #1f561d;
        }

        .action-btn {
            text-align: center;
            padding: 10px;
        }

        h2 {
            text-align: center;
            color: #347928;
        }
    </style>
</head>
<body>

    <div>
        <h2>Data Pengajuan Adopsi</h2>

        <?php
        include 'db.php';

        $result = mysqli_query($conn, "SELECT * FROM adoptions");

        echo "<table border='1'>
        <tr>
        <th>Nama</th>
        <th>Telepon</th>
        <th>Email</th>
        <th>Alasan</th>
        <th>Tanggal Adopsi</th>
        <th>Bukti Pembayaran</th>
        <th class='action-btn'>Aksi</th>
        </tr>";

        while ($row = mysqli_fetch_assoc($result)) {
            echo "<tr>";
            echo "<td>" . $row['name'] . "</td>";
            echo "<td>" . $row['phone'] . "</td>";
            echo "<td>" . $row['email'] . "</td>";
            echo "<td>" . $row['reason'] . "</td>";
            echo "<td>" . $row['adoption_date'] . "</td>";
            if (!empty($row['bukti_pembayaran'])) {
                echo "<td> <img src='img/{$row['bukti_pembayaran']}' width='100px' alt='Bukti Pembayaran'> </td>";
            } else {
                echo "<td> Tidak ada bukti pembayaran </td>";
            }
            echo "<td class='action-btn'><a href='edit_adoption.php?id=" . $row['id'] . "'>Edit</a> | <a href='delete_adoption.php?id=" . $row['id'] . "'>Hapus</a></td>";
            echo "</tr>";
        }

        echo "</table>";

        mysqli_close($conn);
        ?>
    </div>

</body>
</html>
