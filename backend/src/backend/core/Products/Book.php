<?php

class Book implements Validate{

    public  function BookData($data){
            require 'config.php';   
        if (
            isset($data->item_sku)
            && isset($data->item_name)
            && !empty(trim($data->item_sku))
            && !empty(trim($data->item_name))
        ) {
            $sku = mysqli_real_escape_string($db_conn, trim($data->item_sku));
            $name = mysqli_real_escape_string($db_conn, trim($data->item_name));
            $price = mysqli_real_escape_string($db_conn, trim($data->item_price));
            // $type = mysqli_real_escape_string($db_conn, trim($data->type));
        } else {
            echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
        }

        Book::validateAttributes($data);
    }

    public function validateAttributes($data){
        $attribute = $data->item_weight;

        if($data->item_weight){
            
            require 'config.php';
            $insertBook = mysqli_query($db_conn, "INSERT INTO `products`(`sku`,`name`,`price`,`type`,`attribute`)
            VALUES('$data->item_sku','$data->item_name','$data->item_price','Book','$attribute')");
            
           if ($insertBook) {
               $last_id = mysqli_insert_id($db_conn);
               echo json_encode(["success" => 1, "msg" => "Book Inserted.", "id" => $last_id]);
           } else {
               echo json_encode(["success" => 0, "msg" => "Book Not Inserted!"]);
           }    
        }else{
            echo json_encode(["success" => 0, "msg" => "Book Not Inserted!"]);
        }
       
    }  

}