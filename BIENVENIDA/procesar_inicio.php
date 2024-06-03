<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    $file = 'usuarios.txt';
    $users = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    
    $validUser = false;
    
    foreach ($users as $user) {
        list($storedUsername, $storedPassword, $email, $role) = explode(":", $user);
        if ($username === $storedUsername && $password === $storedPassword) {
            $validUser = true;
            break;
        }
    }
    
    if ($validUser) {
        echo "Inicio de sesión exitoso. Bienvenido, $username!";
        header('Location: main_page.html'); 
    } else {
        $errorMessage = "Nombre de usuario o contraseña incorrectos.";
        header('Location: iniciar_sesion.html?error=' . urlencode($errorMessage)); 
    }
} else {
    echo "Método de solicitud no válido.";
}
?>
