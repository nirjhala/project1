<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSchoolsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schools', function (Blueprint $table) {
            $table->id();
            $table->integer('school_uid')->unsigned();
            $table->foreign('school_uid')->references('id')->on('users');
            $table->string('school_name');
            $table->enum('school_medium', ['Hindi', 'English']);
            $table->string('school_address');
            $table->unsignedBigInteger('school_country');
            $table->unsignedBigInteger('school_state');
            $table->unsignedBigInteger('school_city');
            $table->decimal('school_pincode', 6, 0)->unsigned();
            // $table->foreign('school_country')->references('id')->on('countries');
            // $table->foreign('school_state')->references('id')->on('states');
            // $table->foreign('school_city')->references('id')->on('cities');
            // $table->foreign('school_pincode')->references('pin_code')->on('pincodes');
            $table->string('school_logo');
            $table->string('school_favicon');
            $table->string('school_reg_number', 50)->unique();
            $table->decimal('school_phone', 12, 0);
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
        Schema::dropIfExists('schools');
    }
}
