<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSuppliersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('suppliers', function (Blueprint $table) {
            $table->id();
            $table->string('organization_name', 191);
            $table->string('name', 191);
            $table->string('email', 191)->nullable();
            $table->string('phone', 20)->nullable();
            $table->string('mobile', 20);
            $table->unsignedBigInteger('user_id')->comment('school user id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->unique(['mobile', 'user_id']);
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
        Schema::dropIfExists('suppliers');
    }
}
