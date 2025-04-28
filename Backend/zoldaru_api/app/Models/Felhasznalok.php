<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Felhasznalok extends Model
{
    use HasFactory;
    public $table="felhasznalok";
    public $timestamps=false;
    public $guarded = [];
}
