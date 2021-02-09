<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSalarySlipsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('salary_slips', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('employee_id')->comment('User ID');
            $table->foreign('employee_id')->references('id')->on('users')->onDelete('cascade');
            $table->bigInteger('slip_number')->nullable();
            $table->string('name', 100);
            $table->string('employee_no', 100)->nullable();
            $table->string('designation', 100)->nullable();
            $table->string('grade', 100)->nullable();
            $table->string('pan_no', 100)->nullable();
            $table->string('bank_name', 100)->nullable();
            $table->string('account_no', 30)->nullable();
            $table->string('ifsc_code', 30)->nullable();
            $table->integer('total_days')->nullable();
            $table->integer('days_paid')->nullable();
            $table->integer('total_leave')->nullable();
            $table->double('previous_due')->nullable();
            $table->double('basic_salary')->nullable();
            $table->integer('month');
            $table->integer('year');
            $table->unsignedBigInteger('user_id')->comment('School User ID');
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
        Schema::dropIfExists('salary_slips');
    }
}
