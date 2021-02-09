<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransferCertificatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transfer_certificates', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->bigInteger('tc_number');
            $table->string('name', 191);
            $table->string('class', 191);
            $table->string('section', 191);
            $table->string('roll_no', 191);
            $table->string('admission_no', 191);
            $table->date('admission_date');
            $table->string('father_name', 191);
            $table->string('mother_name', 191);
            $table->date('dob');
            $table->string('dob_words', 191);
            $table->string('nationality', 191)->default('Indian');
            $table->string('cast_category', 10)->default('General');
            $table->date('apply_date');
            $table->date('issue_date');
            $table->string('admitted_class', 191);
            $table->enum('class_promotion', ['yes', 'no'])->default('no');
            $table->string('promoting_class', 191);
            $table->string('reason', 191);
            $table->string('paid_month', 191);
            $table->string('fee_concession', 191);
            $table->enum('is_ncc', ['yes', 'no'])->default('no');
            $table->enum('is_game', ['yes', 'no'])->default('no');
            $table->enum('result', ['Pass', 'Fail'])->default('pass');
            $table->integer('total_working_days');
            $table->integer('total_present_days');
            $table->string('conduct', 191);
            $table->string('remarks', 191);
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
        Schema::dropIfExists('transfer_certificates');
    }
}
