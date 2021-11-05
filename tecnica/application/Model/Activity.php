<?php

/**
 * Class Songs
 * This is a demo Model class.
 *
 * Please note:
 * Don't use the same name for class and method, as this might trigger an (unintended) __construct of the class.
 * This is really weird behaviour, but documented here: http://php.net/manual/en/language.oop5.decon.php
 *
 */

namespace Mini\Model;

use Mini\Core\Model;

class Activity extends Model
{
  public function getAll($userId) {
    $sql = "SELECT * FROM activities WHERE userId = $userId";
    $query = $this->db->prepare($sql);
    $query->execute();
    return $query->fetchAll();
  }

  public function create($desc, $userId)
  {
    $sql = "INSERT INTO activities(description, userId) VALUES('$desc', $userId)";
    $query = $this->db->prepare($sql);
    return $query->execute();
  }

}
