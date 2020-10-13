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
            $table->integer('student_uid')->unsigned();
            $table->foreign('student_uid')->references('id')->on('users');
            $table->string('student_reg_no', 50)->unique();
            $table->string('student_roll_no', 50)->unique();
            $table->unsignedBigInteger('student_class');
            $table->unsignedBigInteger('student_department');
            $table->unsignedBigInteger('student_section');
            // $table->foreign('student_class')->references('id')->on('classes');
            // $table->foreign('student_department')->references('id')->on('departments');
            // $table->foreign('student_section')->references('id')->on('sections');
            $table->string('student_father_name');
            $table->string('student_father_mobile');
            $table->string('student_father_email');
            $table->string('student_father_occupation');
            $table->string('student_mother_name');
            $table->string('student_mother_mobile');
            $table->string('student_mother_email');
            $table->string('student_mother_occupation');
            $table->string('student_gaurdian_name');
            $table->string('student_gaurdian_occupation');
            $table->string('student_gaurdian_mobile');
            $table->string('student_gaurdian_email');
            $table->string('student_gaurdian_relation');
            $table->string('student_last_school');
            $table->string('student_address1');
            $table->string('student_address2');
            $table->unsignedBigInteger('student_country');
            $table->unsignedBigInteger('student_state');
            $table->unsignedBigInteger('student_city');
            $table->decimal('student_pincode', 6, 0)->unsigned();
            $table->foreign('student_country')->references('id')->on('countries');
            $table->foreign('student_state')->references('id')->on('states');
            $table->foreign('student_city')->references('id')->on('cities');
            $table->foreign('student_pincode')->references('pin_code')->on('pincodes');
            $table->enum('student_category', ['General', 'OBC', 'SC', 'ST', 'OTHER']);
            $table->unsignedBigInteger('student_religion');
            $table->unsignedBigInteger('student_cast');
            // $table->foreign('student_religion')->references('id')->on('religions');
            // $table->foreign('student_cast')->references('id')->on('casts');
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
