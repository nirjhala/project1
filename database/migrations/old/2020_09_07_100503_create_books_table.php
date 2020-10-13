<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('isbn', 191)->nullable();
            $table->string('title', 191);
            $table->string('subtitle', 191)->nullable();
            $table->string('author', 191);
            $table->string('edition', 191);
            $table->integer('edition_year');
            $table->integer('no_of_copies');
            $table->unsignedBigInteger('cover_image')->nullable();
            $table->foreign('cover_image')->references('id')->on('media');
            $table->enum('physical_form', ['Book', 'Journal', 'CD/DVD', 'Manuscript', 'Other'])->default('Book');
            $table->string('publisher', 191)->nullable();
            $table->string('series', 191)->nullable();
            $table->enum('size', ['medium', 'large', 'huge', 'small', 'tiny'])->default('medium');
            $table->double('price')->nullable();
            $table->unsignedBigInteger('category');
            $table->foreign('category')->references('id')->on('book_categories');
            $table->string('editor', 191)->nullable();
            $table->integer('publication_year')->nullable();
            $table->string('publication_place')->nullable();
            $table->integer('total_pages')->nullable();
            $table->enum('book_source', ['local purchase', 'university', 'world bank donation', 'personal donation', 'other'])->default('other');
            $table->text('notes')->nullable();
            $table->string('pdf_file', 191)->nullable();
            $table->string('pdf_link', 191)->nullable();
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
        Schema::dropIfExists('books');
    }
}
