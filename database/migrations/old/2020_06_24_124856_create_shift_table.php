<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShiftTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shift', function (Blueprint $table) {
            $table->id();
            $table->string('shift_name', 191);
            $table->time('shift_opening_time');
            $table->time('shift_closing_time');
            $table->unsignedBigInteger('shift_school')->nullable();
            $table->foreign('shift_school')->references('id')->on('users')->onDelete('cascade');
            $table->enum('shift_is_deleted', ['N','Y'])->default('N');
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
        Schema::dropIfExists('shift');
    }
}
