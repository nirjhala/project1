<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLmsSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lms_settings', function (Blueprint $table) {
            $table->id();
            // Student
            $table->double('student_issue_book_limit')->nullable();
            $table->double('student_issue_time_limit')->nullable()->comment('in days');
            $table->double('student_fine_per_day')->nullable();
            // Teacher
            $table->double('teacher_issue_book_limit')->nullable();
            $table->double('teacher_issue_time_limit')->nullable()->comment('in days');
            $table->double('teacher_fine_per_day')->nullable();
            // Other
            $table->double('other_issue_book_limit')->nullable();
            $table->double('other_issue_time_limit')->nullable()->comment('in days');
            $table->double('other_fine_per_day')->nullable();

            $table->unsignedBigInteger('school');
            $table->foreign('school')->references('id')->on('users');
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
        Schema::dropIfExists('lms_settings');
    }
}
