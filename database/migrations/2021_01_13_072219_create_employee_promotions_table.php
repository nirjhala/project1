<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeePromotionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employee_promotions', function (Blueprint $table) {
            $table->id();
            $table->enum('employee_type', ['Staff', 'Teacher'])->default('Teacher');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('current_grade', 100)->default('NEW');
            $table->string('current_salary', 100)->default('NEW');
            $table->unsignedBigInteger('pay_grade_id');
            $table->foreign('pay_grade_id')->references('id')->on('pay_grades')->onDelete('cascade');
            $table->double('new_salary');
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
        Schema::dropIfExists('employee_promotions');
    }
}
