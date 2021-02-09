<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePayrollMastersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payroll_masters', function (Blueprint $table) {
            $table->id();
            $table->string('name', 191);
            $table->string('short_name', 10);
            $table->enum('type', ['allowance', 'deduction'])->default('allowance');
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
        Schema::dropIfExists('payroll_masters');
    }
}
