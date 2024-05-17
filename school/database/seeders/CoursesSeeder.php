<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
class CoursesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('courses')->insert([
            'title' => Str::random(10),
            'description' => Str::random(50),
            'image' => 'https://cdn.langeek.co/photo/26023/thumb/any/350',
        ]);
    }
}
