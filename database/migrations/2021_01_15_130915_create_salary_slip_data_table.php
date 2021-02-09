<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSalarySlipDataTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('salary_slip_data', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('salary_slip_id');
            $table->foreign('salary_slip_id')->references('id')->on('salary_slips')->onDelete('cascade');
            $table->string('name', 100);
            $table->double('amount');
            $table->enum('type', ['allowance', 'deduction']);
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
        Schema::dropIfExists('salary_slip_data');
    }
}
