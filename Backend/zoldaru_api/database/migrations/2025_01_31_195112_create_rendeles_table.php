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
        Schema::create('rendelesek', function (Blueprint $table) {
            $table->id();
            $table->string('rendeles_ideje')->nullable();
            $table->foreignId('eladoId')->references('id')->on('felhasznalok');
            $table->integer('vasarloId');
            $table->integer('HirdetesId');
            $table->foreignId('TermekId')->references('id')->on('termekek');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rendeles');
    }
};
