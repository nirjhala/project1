<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTimetablesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('timetables', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('department');
            $table->foreign('department')->references("id")->on('departments')->onDelete('cascade');
            $table->unsignedBigInteger('section');
            $table->foreign('section')->references("id")->on('sections')->onDelete('cascade');
            $table->unsignedBigInteger('shift');
            $table->foreign('shift')->references("id")->on('shift')->onDelete('cascade');
            $table->unsignedBigInteger('weekday');
            $table->foreign('weekday')->references("id")->on('weekdays')->onDelete('cascade');
            $table->unsignedBigInteger('timeslot');
            $table->foreign('timeslot')->references("id")->on('class_timing')->onDelete('cascade');
            $table->unsignedBigInteger('subject');
            $table->foreign('subject')->references("id")->on('subjects')->onDelete('cascade');
            $table->unsignedBigInteger('teacher');
            $table->foreign('teacher')->references("id")->on('users')->onDelete('cascade');
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
        Schema::dropIfExists('timetables');
    }
}
