<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $fillable = [
        'name',
    ];

    public $timestamps = false;

    /**
     * A role can have one or 
     * many users.
     */
    public function users()
    {
        return $this->hasMany('App\User');
    }
}
