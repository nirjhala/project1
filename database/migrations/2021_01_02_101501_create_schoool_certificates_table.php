<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSchooolCertificatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schoool_certificates', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('sr_no');
            $table->enum('type', ['character', 'event', 'sport']);
            $table->string('name', 100);
            $table->string('father_name', 100);
            $table->string('mother_name', 100);
            $table->string('from', 20)->nullable()->comment('for character');
            $table->string('to', 20)->nullable()->comment('for character');
            $table->string('c_name', 191)->nullable()->comment('event / sport');
            $table->string('class', 50);
            $table->date('organized_at')->nullable();
            $table->string('rank', 50)->nullable();
            $table->enum('gender', ['Male', 'Female', 'Other'])->default('Male');
            $table->string('admission_no')->nullable();
            $table->unsignedBigInteger('user_id')->comment('school uid');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->softDeletes();
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
        Schema::dropIfExists('schoool_certificates');
    }
}
