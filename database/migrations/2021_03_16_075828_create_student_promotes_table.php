<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentPromotesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('student_promotes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->comment('Student User ID');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->unsignedBigInteger('from_section');
            $table->foreign('from_section')->references('id')->on('sections')->onDelete('cascade');
            $table->unsignedBigInteger('to_section');
            $table->foreign('to_section')->references('id')->on('sections')->onDelete('cascade');
            $table->text('remarks')->nullable();
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
        Schema::dropIfExists('student_promotes');
    }
}