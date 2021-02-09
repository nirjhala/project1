<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddNewFieldsToSchools extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('schools', function (Blueprint $table) {
            $table->string('name', 50)->change();
            $table->string('registration_no', 50)->change();
            $table->string('logo', 100)->change();
            $table->string('favicon', 100)->change();
            $table->string('phone', 20)->change();
            $table->string('email', 30)->change();
            $table->string('board', 50)->nullable();
            $table->string('school_no', 20)->nullable();
            $table->string('affiliation_no', 20)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('schools', function (Blueprint $table) {
            $table->dropColumn('board');
            $table->dropColumn('school_no');
            $table->dropColumn('affiliation_no');
        });
    }
}
