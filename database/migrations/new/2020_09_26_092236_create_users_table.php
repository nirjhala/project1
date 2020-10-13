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
            $table->string('password', 191);
            $table->string('title');
            $table->char('fname');
            $table->char('lname');
            $table->string('name');
            $table->decimal('mobile', 10, 0);
            $table->string('email', 100)->nullable();
            $table->date('dob');
            $table->unsignedBigInteger('role');
            $table->foreign('role')->references('id')->on('roles');
            $table->enum('deleted', ['N', 'Y'])->default('N');
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
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
