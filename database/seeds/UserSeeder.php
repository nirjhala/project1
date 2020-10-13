<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'login'     => 'school_administrator',
            'password'  => Hash::make('P@ssw0rd#Adm1n'),
            'email'     => Str::random(10).'@gmail.com',
            'fname'     => 'Joe',
            'lname'     => 'Due',
            'name'      => 'Joe Due',
            'mobile'    => '1234567890',
            'role'      => 1,
        ]);

        DB::table('users')->insert([
            'login'     => 'demo',
            'password'  => Hash::make('admin123'),
            'email'     => Str::random(10).'@gmail.com',
            'fname'     => 'Joe',
            'lname'     => 'Due',
            'name'      => 'Joe Due',
            'mobile'    => '9087456123',
            'role'      => 2,
        ]);
    }
}
