<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('user_login', 100)->unique();
            $table->string('password');
            $table->string('user_title');
            $table->char('user_fname');
            $table->char('user_mname');
            $table->char('user_lname');
            $table->string('user_name');
            $table->string('user_email');
            $table->decimal('user_mobile', 10, 0)->unique();
            $table->date('user_dob');
            $table->integer('user_role')->unsigned();
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
