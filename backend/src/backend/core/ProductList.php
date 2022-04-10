<?php

class ProductList
{

    public static function show()
    {
        ProductQuery::ShowData();  
    }

    public static function add(): void 
    {
        ProductQuery::insertData();
    }

    public static function delete()
    {
        ProductQuery::DeleteProducts();
    }

};