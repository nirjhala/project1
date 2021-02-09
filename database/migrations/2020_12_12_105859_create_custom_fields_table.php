<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomFieldsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('custom_fields', function (Blueprint $table) {
            $table->id();
            $table->string('name', 191);
            $table->string('short_name', 191)->nullable();
            $table->string('roles', 191)->comment('Comma seperated roles');
            $table->enum('type', ['text', 'textarea', 'dropdown', 'relation'])->default('text');
            $table->string('relative_table')->nullable();
            $table->string('relative_table_id')->nullable();
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
        Schema::dropIfExists('custom_fields');
    }
}
