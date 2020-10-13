<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLibraryPassesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('library_passes', function (Blueprint $table) {
            $table->id();
            $table->string('name', 191);
            $table->string('mobile', 20);
            $table->string('mobile2', 20)->nullable();
            $table->enum('type', ['student', 'teacher', 'other']);
            $table->text('address');
            $table->string('barcode', 191)->nullable();
            $table->unsignedBigInteger('school');
            $table->foreign('school')->references('id')->on('users');
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
        Schema::dropIfExists('library_passes');
    }
}
