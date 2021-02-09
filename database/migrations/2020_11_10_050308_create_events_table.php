<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('name', 191);
            $table->string('slug', 191);
            $table->enum('type', ['custom', 'date-range', 'weekdays'])->default('custom');
            $table->text('dates')->nullable();
            $table->string('dates_text', 100)->nullable();
            $table->string('classes', 191)->nullable();
            $table->text('short_description')->nullable();
            $table->longText('description')->nullable();
            $table->integer('weekday')->nullable();
            $table->unsignedBigInteger('image')->nullable();
            $table->foreign('image')->references('id')->on('media');
            $table->unsignedBigInteger('session_id');
            $table->foreign('session_id')->references('id')->on('session')->onDelete('cascade');
            $table->unsignedBigInteger('school_id');
            $table->foreign('school_id')->references('id')->on('users')->onDelete('cascade');
            $table->unique(['slug', 'school_id']);
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
        Schema::dropIfExists('events');
    }
}
