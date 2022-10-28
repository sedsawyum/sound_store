import {Route, Routes} from "react-router-dom";

import NavigationBar from "./components/navigationBar/NavigationBar.component";
import Authentication from "./routes/auth/Auth.component";
import Home from "./routes/home/Home.component";
import Shop from "./routes/shop/Shop.component"
import Cart from "./routes/cartPage/Cart.component";

function App() {
    return (
        <Routes>
            <Route path="/" element={<NavigationBar/>}>
                <Route path="/auth" element={<Authentication/>} />
                <Route index element={<Home/>}/>
                <Route path="shop/*" element={<Shop />} />
                <Route path="cart" element={<Cart/>}/>
            </Route>
        </Routes>
    );
}

export default App;
