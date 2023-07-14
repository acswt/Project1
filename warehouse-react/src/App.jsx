import Navbar from "./components/layout/Navbar";
import Warehouses from "./components/WarehouseComponents/Warehouses"
import Products from "./components/ProductComponents/Products"
import Inventories from "./components/InventoryComponents/Inventories"
import '@trussworks/react-uswds/lib/index.css';
import './App.css';
import { GridContainer } from "@trussworks/react-uswds";

export default function App() {

    return (
        <>
            <Navbar class="navbar"></Navbar>

            <Warehouses class="warehouses"></Warehouses>
            <Products class="products"></Products>
            <Inventories class="inventories"></Inventories>

        </>
    );
}


