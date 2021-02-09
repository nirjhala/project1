<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateFeeInstallmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('fee_installments', function (Blueprint $table) {
            $table->double('penalty_amount')->default(0);
            $table->double('paid_amount')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('fee_installments', function (Blueprint $table) {
            $table->dropColumn('penalty_amount');
            $table->dropColumn('paid_amount');
        });
    }
}
