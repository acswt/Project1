import { useState } from "react";
import WarehouseTable from "./components/WarehouseComponents/WarehouseTable";
import Navbar from "./components/layout/Navbar";
import WarehouseForm from "./components/WarehouseComponents/WarehouseForm";

export default function App() {

    const [shouldRender, setShouldRender] = useState(true);

    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <body>
                <div class="block">
                    <div class="form" id="warehouse-form-div">
                        <WarehouseForm></WarehouseForm>
                    </div>
                    <div id="warehouse-table-div">
                        <WarehouseTable class="table"></WarehouseTable>
                    </div>
                </div>

                <div class="block">
                    <div class="form" id="warehouse-form-div">
                        <WarehouseForm></WarehouseForm>
                    </div>
                    <div id="warehouse-table-div">
                        <WarehouseTable class="table"></WarehouseTable>
                    </div>
                </div>

                <div class="block">
                    <div class="form" id="warehouse-form-div">
                        <WarehouseForm></WarehouseForm>
                    </div>
                    <div id="warehouse-table-div">
                        <WarehouseTable class="table"></WarehouseTable>
                    </div>
                </div>

            </body>
        </>
    );
}


