<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rendeles extends Model
{
    use HasFactory;
    public $table="rendelesek";
    public $timestamps=false;
    public $guarded = [];
}
