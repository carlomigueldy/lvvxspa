<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Carlo Miguel Dy',
            'role_id' => 2,
            'email' => 'carlomigueldy@admin.com',
            'password' => bcrypt('password'),
        ]);
    }
}
