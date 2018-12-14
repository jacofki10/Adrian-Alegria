<?php
if(!$_POST['p']) die("0");
$p = (int)$_POST['p'];
if(file_exists('subCat/p_'.$p.'.html'))
echo file_get_contents('subCat/p_'.$p.'.html');
?>