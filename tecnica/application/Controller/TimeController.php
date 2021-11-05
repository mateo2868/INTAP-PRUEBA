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

use Mini\Model\Time;

class TimeController
{
  protected $objData;

	public function __construct() {
		session_start();
		$fileData = file_get_contents("php://input");
		$this->objData = json_decode($fileData);
	}

  public function timeTotal() {
    $Time = new Time();

    $time = $Time->timeTotal($_GET['userId']);
    if ($time) {
      echo json_encode($time);   
    } else {
      echo json_encode([]);   
    }
  }

  public function getByActitity() {
    $Time = new Time();

    $time = $Time->getByActitity($_GET['id']);
    if ($time) {
      echo json_encode($time);   
    } else {
      echo json_encode([]);   
    }
  }

  public function create()
  {
    
    $Time = new Time();
    $activityId = $this->objData->activityId;
    
    $sum = $Time->sumHour($activityId);
    if (($sum->sum + $this->objData->hour) > 8 ) {
      echo json_encode(["msg" => 'No puede agregar mas de 8 horas', "status" => false]);
    } else {
      $time = $Time->create($this->objData->date, $this->objData->hour, $this->objData->activityId);
      if($time) {
        echo json_encode(["msg" => 'ok', "status" => true]);
      } else {
        echo json_encode(["msg" => 'ERROR', "status" => false]);
      }
    }
    // echo $user;
  }

}
