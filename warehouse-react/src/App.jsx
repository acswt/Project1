import Navbar from "./components/layout/Navbar";
import Warehouses from "./components/WarehouseComponents/Warehouses"
import Products from "./components/ProductComponents/Products"
import Inventories from "./components/InventoryComponents/Inventories"
import '@trussworks/react-uswds/lib/index.css';
import './App.css';

export default function App() {

    return (
        <>
            <header><Navbar class="navbar"></Navbar></header>
            <div>
                <Warehouses class="warehouses"></Warehouses>
                <Products class="products"></Products>
                <Inventories class="inventories"></Inventories>
            </div>
        </>
    );
}


