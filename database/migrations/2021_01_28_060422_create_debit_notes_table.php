<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDebitNotesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('debit_notes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('purchase_id');
            $table->foreign('purchase_id')->references('id')->on('purchases')->onDelete('cascade');
            $table->integer('number');
            $table->string('reason')->default('Other');
            $table->text('remarks')->nullable();
            $table->double('total_amount');
            $table->double('paid_amount');
            $table->string('payment_mode')->default('cash')->comment('like cash, card, etc.');
            $table->string('txn_number')->nullable()->comment('or cheque no.');
            $table->unsignedBigInteger('user_id')->comment('school user id');
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
        Schema::dropIfExists('debit_notes');
    }
}
