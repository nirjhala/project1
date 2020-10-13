<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWeekdaysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('weekdays', function (Blueprint $table) {
            $table->id();
            $table->enum('Monday', ['Y','N'])->default('Y');
            $table->enum('Tueday', ['Y','N'])->default('Y');
            $table->enum('Wednesday', ['Y','N'])->default('Y');
            $table->enum('Thursday', ['Y','N'])->default('Y');
            $table->enum('Friday', ['Y','N'])->default('Y');
            $table->enum('Saturday', ['Y','N'])->default('Y');
            $table->enum('Sunday', ['Y','N'])->default('N');
            $table->unsignedBigInteger('school');
            $table->foreign('school')->references('id')->on('users')->onDelete('cascade');
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
        Schema::dropIfExists('weekdays');
    }
}
