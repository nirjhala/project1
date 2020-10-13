<?php

use Illuminate\Database\Seeder;

class SchoolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('schools')->insert([
            'uid'       => 2,
            'name'      => 'Demo School',
            'weburl'    => 'demo',
            'logo'      => '',
            'favicon'   => '',
        ]);
    }
}
