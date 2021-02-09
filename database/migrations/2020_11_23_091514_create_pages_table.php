<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pages', function (Blueprint $table) {
            $table->id();
            $table->string('title', 191);
            $table->string('slug', 191);
            $table->unsignedBigInteger('image_id')->nullable();
            $table->foreign('image_id')->references('id')->on('media')->onDelete('cascade');
            $table->text('excerpt')->nullable();
            $table->longText('description')->nullable();
            $table->string('template_name', 191)->nullable();
            $table->foreign('template_name')->references('name')->on('page_templates')->onDelete('set null');
            $table->string('seo_title', 191)->nullable();
            $table->string('seo_keywords', 191)->nullable();
            $table->text('seo_description')->nullable();
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
        Schema::dropIfExists('pages');
    }
}
