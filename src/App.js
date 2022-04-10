import { Provider } from "./Context";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProduct from './components/product-add';
import { BrowserRouter as Router, Routes , Route, Link } from 'react-router-dom';
import ProductList from './components/product-list';
import history from './history';

import { Actions } from "./Actions";
function App() {
  const data = Actions();
  
  return (
    <Router history={history}>
      <Provider value={data}>
        <Routes>
          <Route  path='/' element={<ProductList/>}/>
          <Route  path='/addproduct' element={<AddProduct/>}/>
        </Routes> 
        </Provider>
   </Router>
  );
}

export default App;
