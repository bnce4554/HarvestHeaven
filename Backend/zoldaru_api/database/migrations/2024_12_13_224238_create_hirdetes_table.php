<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('hirdetesek', function (Blueprint $table) {
            $table->id();
            $table->foreignId('Felhasznalok')->references('id')->on('felhasznalok');
            $table->foreignId('Termek')->references('id')->on('termekek');
            $table->string('termek_egysege');
            $table->integer('Termek_mennyisege');
            $table->integer('brutto_egysegar');
            $table->integer('netto_egysegar')->nullable();
            $table->string('leiras')->nullable();
            $table->string('rendeles_ideje')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hirdetesek');
    }
};
