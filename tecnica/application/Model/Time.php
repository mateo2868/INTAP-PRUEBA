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

class Time extends Model
{
    /**
     * Get all songs from database
     */
    public function getByActitity($activityId)
    {
      $sql = "SELECT * FROM time WHERE activityId = $activityId";
      $query = $this->db->prepare($sql);
      $query->execute();
      return $query->fetchAll();
    }
    
    public function timeTotal($userId)
    {
      $sql = "SELECT sum(t.hour) total FROM activities as a INNER JOIN time as t ON t.activityId=a.id WHERE a.userId = $userId";
      $query = $this->db->prepare($sql);
      $query->execute();
      return $query->fetch();
    }

    
    
    public function create($date, $hour, $activityId)
    {
      $sql = "INSERT INTO time(date, hour, activityId) VALUES('$date', $hour, $activityId)";
      $query = $this->db->prepare($sql);
      return $query->execute();
    }

    public function sumHour($activityId) {
      $sql = "SELECT sum(hour) sum FROM time where activityId = $activityId";
      $query = $this->db->prepare($sql);
      $query->execute();
      return $query->fetch();
    }

}
