<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOnlineClassStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('online_class_students', function (Blueprint $table) {
            $table->unsignedBigInteger('online_class_id');
            $table->foreign('online_class_id')->references('id')->on('online_classes')->onDelete('cascade');
            $table->unsignedBigInteger('user_id')->comment('Student User ID');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('online_class_students');
    }
}
