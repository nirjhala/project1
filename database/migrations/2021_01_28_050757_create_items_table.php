<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('items', function (Blueprint $table) {
            $table->id();
            $table->string('name', 191);
            $table->text('description', 191)->nullable();
            $table->string('image', 191)->nullable();
            $table->double('purchase_price');
            $table->double('margin');
            $table->double('sale_price');
            $table->double('gst_rate')->default(0);
            $table->enum('type', ['inc', 'excl'])->default('inc');
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
        Schema::dropIfExists('items');
    }
}
