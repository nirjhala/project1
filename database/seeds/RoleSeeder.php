<?php

use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->insert([
            'name'      => 'Admin',
            'school'    => 0,
        ]);

        DB::table('roles')->insert([
            'name'      => 'School',
            'school'    => 0,
        ]);

        DB::table('roles')->insert([
            'name'      => 'Teacher',
            'school'    => 0,
        ]);

        DB::table('roles')->insert([
            'name'      => 'Student',
            'school'    => 0,
        ]);

        DB::table('roles')->insert([
            'name'      => 'Staff',
            'school'    => 0,
        ]);

        DB::table('roles')->insert([
            'name'      => 'Parents',
            'school'    => 0,
        ]);

        DB::table('roles')->insert([
            'name'      => 'Driver',
            'school'    => 0,
        ]);
    }
}
