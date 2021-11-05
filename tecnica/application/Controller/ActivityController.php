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

use Mini\Model\Activity;

class ActivityController
{
  protected $objData;

	public function __construct() {
		session_start();
		$fileData = file_get_contents("php://input");
		$this->objData = json_decode($fileData);
	}

  public function getAll() {
    $Activity = new Activity();

    $activity = $Activity->getAll($_GET['userId']);
    echo json_encode($activity);   
  }

  public function create()
  {
    $Activity = new Activity();

    $activity = $Activity->create($this->objData->description, $this->objData->userId);
    if($activity) {
      echo json_encode(["msg" => 'ok', "status" => true]);
    } else {
      echo json_encode(["msg" => 'ERROR', "status" => false]);
    }
    // echo $user;
  }

}
