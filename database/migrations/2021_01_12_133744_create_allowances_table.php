<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAllowancesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('allowances', function (Blueprint $table) {
            $table->id();
            $table->string('name', 191);
            $table->enum('gender', ['Male', 'Female', 'Other'])->default('Male');
            $table->double('from_amount')->nullable();
            $table->double('to_amount')->nullable();
            $table->enum('type', ['percent', 'fixed'])->default('fixed');
            $table->double('percent')->nullable();
            $table->double('amount')->comment('upto amount');
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
        Schema::dropIfExists('allowances');
    }
}
