<?php

/**
 * Class HomeController
 *
 * Please note:
 * Don't use the same name for class and method, as this might trigger an (unintended) __construct of the class.
 * This is really weird behaviour, but documented here: http://php.net/manual/en/language.oop5.decon.php
 *
 */

namespace Mini\Controller;

use Mini\Model\User;
use Mini\Model\Song;
class LoginController
{
  protected $objData;

	public function __construct() {
		session_start();
		$fileData = file_get_contents("php://input");
		$this->objData = json_decode($fileData);
	}

  public function index()
  {
    // Instance new Model (Song)
    // $User = new User();
    $User = new User();

    $user = $User->validateUserPass($this->objData->userName, $this->objData->password);
    if($user) {
      $_SESSION["userId"] = $user->id;
      echo json_encode(["msg" => 'ok', "status" => true, "userId" => $user->id ]);
    } else {
      echo json_encode(["msg" => 'Usuario o contraseña incorrectos', "status" => false]);
    }
    // echo $user;
  }

}
