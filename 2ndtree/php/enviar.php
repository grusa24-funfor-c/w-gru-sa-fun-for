<?php 

// Tomo todos los valores enviados desde el formulario
$nombre = $_POST["nombre"];

$telefono = $_POST["telefono"];

$email = $_POST["email"];

$mensaje = $_POST["mensaje"];






// Se verifica que los datos han sido enviados desde el formulario



if ( $nombre != "" 
	&& $telefono != "" 
	&& $email != "" && $mensaje != "" ) 
{


// Se incluye la librería necesaria para el envio
require_once("fzo.mail.php");

$mail = new SMTP("localhost","","");



// Se configuran los parametros necesarios para el envío

$de = "secretaria@gruposaludcordoba.com";



$a = "secretaria@gruposaludcordoba.com"; // email al que llegarán los contactos


$asunto = "Contacto via web";


$cc = "";
$bcc = "";



$header = $mail->make_header( $de, $a, $asunto, $cc, $bcc );



$cuerpo = "<div style='width:600px;border:2px solid #D5F0D0; border-radius:5px;background:#A9E59D; padding:10px;box-shadow:0 3px 7px #333; color:#333;text-shadow: 0 1px 3px #fff'><strong>" . $nombre . "</strong><br>";
$cuerpo .= "<strong>telefono:</strong> " . $telefono . "<br>";
$cuerpo .= "<strong>e-mail: </strong>" . $email ."</div>";

$cuerpo .= "<div style='width:600px;margin-top:10px;border:2px solid #d1e1e6;border-radius:5px;padding:10px;box-shadow:0 3px 7px #333;display:block;background:#91b9da; color:#22425C;text-shadow: 0 1px 3px #fff'><strong>Mensaje: </strong><br />" . $mensaje . "</div>";


// Pueden definirse más encabezados. Tener en cuenta la terminación de la linea con (\r\n)

$header .= "Content-Type: text/html; charset=\"iso-8859-1\" \r\n";
$header .= "Content-Transfer-Encoding: 8bit \r\n";
$header .= "MIME-Version: 1.0 \r\n";

// Se envia el correo y se verifica el error
 $error = $mail->smtp_send($de, $a, $header, $cuerpo, $cc, $bcc);




if ($error == "0") 
	{	
		echo "<script>alert('e-mail enviado correctamente');location.href = 'http://www.gruposaludcordoba.com';</script>";
 	}
	else 
	{ echo '<style>
	body {height: 100%; width:100%;	background: -moz-linear-gradient(top,#ddd 20%,#999);	background: -o-linear-gradient(top,#ddd 20%,#999);	background: -webkit-linear-gradient(top,#ddd 20%,#999)}
	strong {background: #eee}
	p {color: green; font-size: 16px; background:#eee; font-family:arial, sans-serif; text-align:center; margin: 100px auto 0 auto; width: 80%; border: solid #eee 2px; box-shadow: 0 2px 30px #000; padding: 15px 3px}
	a {text-decoration:none;float:right; margin: 50px 20px 0 0; background: green; font-weight:bold; color: #eee; text-align:center; padding: 2px 7px; border: solid 2px #90ee90; border-radius:5px; font-family: arial, tahoma, verdana, sans-serif; font-size:14px}
	a:hover {border-color:#eee; background:#90ee90; color:green; box-shadow: 0 1px 5px #000}
	</style>
	<body><p> Hubo un error al enviar el e-mail. <br/> Puede comunicarse con nosotros a través de este e-mail <strong>secretaria@gruposaludcordoba.com</strong></p>
<a  href="http://www.gruposaludcordoba.com"> Regresar </a></body>';

//"<script>alert('Hubo un error al enviar el e-mail, puede comunicarse con nosotros a través de este mail contacto@gruposaludcba.com.ar');location.href = 'http://www.gruposaludcordoba.com.ar/contacto.php';</script>"; 
}



}



?>
