<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $role = $_POST['role'];
    
    $file = 'usuarios.txt';
    $users = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    
    $userExists = false;
    
    foreach ($users as $user) {
        list($storedUsername, $storedPassword, $storedEmail, $storedRole) = explode(":", $user);
        if ($username === $storedUsername || $email === $storedEmail) {
            $userExists = true;
            break;
        }
    }
    
    if ($userExists) {
        echo "El nombre de usuario o el correo electrónico ya están registrados.";
        header('Location: crear_cuenta.html');
    } else {
        $newUser = $username . ":" . $password . ":" . $email . ":" . $role . "\n";
        file_put_contents($file, $newUser, FILE_APPEND);
        echo "Cuenta creada exitosamente. Bienvenido, $username!";
        header('Location: main_page.html'); 
    }
} else {
    echo "Método de solicitud no válido.";
}
?>
