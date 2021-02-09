<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDebitNoteItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('debit_note_items', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('debit_note_id');
            $table->foreign('debit_note_id')->references('id')->on('debit_notes')->onDelete('cascade');
            $table->unsignedBigInteger('item_id');
            $table->foreign('item_id')->references('id')->on('items')->onDelete('cascade');
            $table->integer('qty');
            $table->double('price');
            $table->double('discount_amt')->nullable();
            $table->double('discount_per')->nullable();
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
        Schema::dropIfExists('debit_note_items');
    }
}
