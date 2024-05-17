<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
class StudentsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('students')->insert([
            'name' => Str::random(10),
            'email' => Str::random(10).'@example.com',
            'image' => 'https://cdn.langeek.co/photo/26023/thumb/any/350',
        ]);
    }
}
