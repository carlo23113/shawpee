<?php

use Illuminate\Database\Seeder;
use App\ProductCategory;

class ProductCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data =  [
            [
              'name' => 'Audio'
            ],
            [
              'name' => 'Video'
            ],
            [
              'name' => 'Gaming'
            ],
            [
              'name' => 'Future'
            ],
            [
              'name' => 'PC'
            ],
            [
              'name' => 'Mobile Phones'
            ],
            [
              'name' => 'Robots'
            ],
            [
              'name' => 'Security'
            ],
            [
              'name' => 'Wearable Technology'
            ],
            [
              'name' => 'Travel'
            ]
          ];

          ProductCategory::insert($data);
    }
}