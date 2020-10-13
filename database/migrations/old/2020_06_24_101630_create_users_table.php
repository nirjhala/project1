<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('login', 100);
            $table->string('password', 191)->nullable();
            $table->string('api_token', 191)->nullable();
            $table->enum('title', ['Mr.', 'Ms.', 'Mrs.']);
            $table->string('fname', 50);
            $table->string('lname', 50)->nullable();
            $table->string('name', 100);
            $table->decimal('mobile', 10, 0);
            $table->string('email', 100)->nullable();
            $table->enum('gender', ['Male', 'Female', 'Other'])->default('Male');
            $table->date('dob')->nullabe();
            $table->string('image', 191)->nullabe();
            $table->string('address1', 100)->nullable();
            $table->string('address2', 100)->nullable();
            $table->integer('pin_code')->nullable();
            $table->unsignedBigInteger('role')->nullable();
            $table->unsignedBigInteger('school')->nullable();
            $table->string('remember_token', 100)->nullable();
            $table->enum('deleted', ['Y', 'N'])->default('N');
            $table->foreign('pin_code')->references('pincode')->on('pincodes');
            $table->foreign('role')->references('id')->on('roles')->onDelete('cascade');
            $table->foreign('school')->references('id')->on('users')->onDelete('cascade');
            // Unique Constrants
            $table->unique(['login', 'school']);
            $table->unique(['mobile', 'school']);
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
        Schema::dropIfExists('users');
    }
}
