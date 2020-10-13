<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('uid');
            $table->foreign('uid')->references('id')->on('users')->onDelete('cascade');
            $table->string('roll_no', 191)->nullable();
            $table->string('reg_no', 191)->nullable();
            $table->enum('blood_group', ['A+','A-','B+','B-','AB+','AB-','O+','O-','Do not know'])->default('Do not know');
            $table->unsignedBigInteger('religion')->nullable();
            $table->foreign('religion')->references('id')->on('religions');
            $table->string('cast', 191)->nullable();
            $table->enum('category', ['General', 'OBC','ST','SC', 'SBC', 'Other'])->default('General');
            $table->unsignedBigInteger('section');
            $table->foreign('section')->references('id')->on('sections');
            $table->text('short_bio')->nullable();
            $table->unsignedBigInteger('father')->nullable();
            $table->foreign('father')->references('id')->on('users');
            $table->unsignedBigInteger('mother')->nullable();
            $table->foreign('mother')->references('id')->on('users');
            $table->unsignedBigInteger('guardian')->nullable();
            $table->foreign('guardian')->references('id')->on('users');
            $table->string('guardian_relation', 191)->comment('father,mother,warden,brother,sister etc.');
            $table->date('admission_date')->nullable();
            $table->string('signature', 191)->nullable();
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
        Schema::dropIfExists('students');
    }
}
