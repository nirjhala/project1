<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('news', function (Blueprint $table) {
            $table->id();
            $table->string('title', 191);
            $table->string('slug', 191);
            $table->unsignedBigInteger('image_id')->nullable();
            $table->foreign('image_id')->references('id')->on('media')->onDelete('set null');
            $table->longText('description')->nullable();
            $table->unsignedBigInteger('school_id');
            $table->foreign('school_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('seo_title', 191)->nullable();
            $table->string('seo_keywords', 191)->nullable();
            $table->text('seo_description')->nullable();
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
        Schema::dropIfExists('news');
    }
}
