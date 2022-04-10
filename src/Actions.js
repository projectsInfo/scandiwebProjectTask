import { useEffect, useState } from "react";

export const Actions = () => {
  
  let [users, setUsers] = useState([]);
  let [products, setPoducts] = useState([]);
    //productLength is for showing the Data Loading message.
    let [productLength, setproductLength] = useState(null);
    useEffect(() => {
         fetch("https://www.scandiweb.careemeg.com/backend/products/get")
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            if (data.success) {
              setPoducts(data.products.reverse());
              setproductLength(true);
            } else {
                setproductLength(0);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

  
  // Inserting a new data into the database.
  const insertProduct =   (newProduct) => {
     fetch("https://www.scandiweb.careemeg.com/backend/products/add", {
      method: "POST",
      headers: {
      //   "Content-Type": "application/json",
      //   "Access-Control-Allow-Origin":"*",
      //  mode: "cors",       
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => {
         console.log(res)
        return res.json();
      })
      .then((data) => {
        if (data.id) {
          setUsers([
            {
              id: data.id,
              ...newProduct,
            },
            ...products,
          ]);
          setproductLength(true);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
        console.log('err' + err);
      });
  };

  // Deleting a data.
  const deleteProduct = (theID) => {
    // filter outing the user.
  let productDeleted = products.filter((product) => {
    return product.id !== theID;
  });
      
  fetch("https://www.scandiweb.careemeg.com/backend/products/delete", {
    method: "POST",
    headers: {
      // "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: theID }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.success) {
        setUsers(productDeleted);
        if (products.length === 1) {
          setproductLength(0);
        }
      } else {
        alert(data.msg);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

  return {
     products,
     insertProduct,
     deleteProduct,
  };
};