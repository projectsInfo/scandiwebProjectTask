<?php

class Disk implements Validate{

    public  function DiskData($data){
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

        Disk::validateAttributes($data);
    }

    public function validateAttributes($data){
        $attribute = $data->item_size;
        
        if($data->item_size){

            require 'config.php';
            $insertDisk = mysqli_query($db_conn, "INSERT INTO `products`(`sku`,`name`,`price`,`type`,`attribute`)
            VALUES('$data->item_sku','$data->item_name','$data->item_price','DVD','$attribute')");
            
           if ($insertDisk) {
               $last_id = mysqli_insert_id($db_conn);
               echo json_encode(["success" => 1, "msg" => "Disk Inserted.", "id" => $last_id]);
           } else {
               echo json_encode(["success" => 0, "msg" => "Disk Not Inserted!"]);
           }    
        }else{
            echo json_encode(["success" => 0, "msg" => "Disk Not Inserted!"]);
        }
       
    }
}