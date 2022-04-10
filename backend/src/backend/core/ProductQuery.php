<?php

abstract class ProductQuery{

public static function ShowData(){

require 'config.php';

    $products = [];
    $sql = "SELECT * FROM products";

    $result = mysqli_query($db_conn,$sql);
    $cr = 0;
    while($row = mysqli_fetch_assoc($result)){
        $products[$cr]['id'] = $row['id'];
        $products[$cr]['sku'] = $row['sku'];
        $products[$cr]['name'] = $row['name'];
        $products[$cr]['price'] = $row['price'];
        $products[$cr]['type'] = $row['type'];
        $products[$cr]['attribute'] = $row['attribute'];
        $cr++;
     }
     echo json_encode(["success" => 1, "products" => $products]);
}

public static  function insertData(){
   
    $data = json_decode(file_get_contents("php://input"));

        if($data->item_weight){
            $book = new Book();
            $book->BookData($data);
        }else if($data->item_size){
            $disk = new Disk();
            $disk->DiskData($data);
        }else if($data->item_height){
            $furniture = new Furniture();
            $furniture->FurnitureData($data);
        }
}

public static function DeleteProducts(){
    require 'config.php';
        
    $data = json_decode(file_get_contents("php://input"));
    echo ($data->id);
    if (isset($data->id) && is_numeric($data->id)) {
        $deleteProduct = mysqli_query($db_conn, "DELETE FROM `products`");
        if ($deleteProduct) {
            echo json_encode(["success" => 1, "msg" => "Product Deleted"]);
        } else {
            echo json_encode(["success" => 0, "msg" => "Product Not Found!"]);
        }
    } else {
        echo json_encode(["success" => 0, "msg" => "Product Not Found!"]);
    }

}
    
}
