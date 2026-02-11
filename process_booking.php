<?php
// Database configuration
$host = 'localhost';
$username = 'root';
$password = 'password';
$dbname = 'events_db';

// Create a connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}

// Process booking
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $event_id = $_POST['event_id'];
    $user_name = $_POST['user_name'];
    $user_email = $_POST['user_email'];
    $number_of_tickets = $_POST['number_of_tickets'];

    // Prepare and bind
    $stmt = $conn->prepare('INSERT INTO bookings (event_id, user_name, user_email, number_of_tickets) VALUES (?, ?, ?, ?)');
    $stmt->bind_param('isss', $event_id, $user_name, $user_email, $number_of_tickets);

    // Execute the statement
    if ($stmt->execute()) {
        echo 'Booking successful!';
    } else {
        echo 'Error: ' . $stmt->error;
    }

    // Close the statement
    $stmt->close();
}

// Close the connection
$conn->close();
?>