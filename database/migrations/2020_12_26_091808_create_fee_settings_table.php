<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFeeSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fee_settings', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->comment('school user id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->integer('fee_day')->default('1')->comment('Date of month');
            $table->enum('penalty_type', ['daily', 'weekly', 'monthly'])->default('monthly');
            $table->double('penalty_amount')->default(0);
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
        Schema::dropIfExists('fee_settings');
    }
}
