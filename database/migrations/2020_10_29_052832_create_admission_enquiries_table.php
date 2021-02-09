<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdmissionEnquiriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admission_enquiries', function (Blueprint $table) {
            $table->id();
            $table->string('name', 191);
            $table->string('father_name', 191);
            $table->string('mother_name', 191);
            $table->date('dob');
            $table->enum('gender', ['Male', 'Female', 'Other'])->default('Male');
            $table->string('email', 50)->nullable();
            $table->string('mobile', 20);
            $table->string('phone', 20)->nullable();
            $table->text('address')->nullable();
            $table->text('state', 191);
            $table->text('city', 191);
            $table->text('postcode', 6);
            $table->unsignedBigInteger('school_id');
            $table->foreign('school_id')->references('id')->on('users')->onDelete('cascade');
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
        Schema::dropIfExists('admission_enquiries');
    }
}
