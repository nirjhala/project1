<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePincodesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pincodes', function (Blueprint $table) {
            $table->id();
            $table->decimal('pin_code', 6, 0)->unique();
            $table->unsignedBigInteger('pin_country');
            $table->unsignedBigInteger('pin_state');
            $table->unsignedBigInteger('pin_city');
            $table->foreign('pin_country')->references('id')->on('countries');
            $table->foreign('pin_state')->references('id')->on('states');
            $table->foreign('pin_city')->references('id')->on('cities');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pincodes');
    }
}
