<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMenuLinksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('menu_links', function (Blueprint $table) {
            $table->id();
            $table->string('link', 191)->nullable();
            $table->string('label', 191)->nullable();
            $table->unsignedBigInteger('parent')->nullable();
            $table->foreign('parent')->references('id')->on('menu_links')->onDelete('set null');
            $table->bigInteger('sort_no')->default(0);
            $table->unsignedBigInteger('ml_id')->comment('menu location');
            $table->foreign('ml_id')->references('id')->on('menu_locations')->onDelete('cascade');
            $table->unsignedBigInteger('p_id')->comment('page ID')->nullable();
            $table->foreign('p_id')->references('id')->on('pages')->onDelete('cascade');
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
        Schema::dropIfExists('menu_links');
    }
}
