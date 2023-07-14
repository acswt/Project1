import { Button, Table } from "@trussworks/react-uswds";

export default function WarehouseTable({ tableData }) {

    // function handleDelete(warehouse_id) {

    //     const [warehouses, setWarehouses] = useState([]);
    //     const [deleteConfirmation, setDeleteConfirmation] = useState([]);

    //     setDeleteConfirmation(warehouse_id);

    //     fetch(url + "/warehouse/" + warehouse_id, {
    //         method: "DELETE"
    //     })
    //         .then(response => {

    //             if (!response.ok) {
    //                 const updatedWarehouses = warehouses.filter
    //                     (warehouse => warehouse.id != warehouse_id);
    //             }
    //             setWarehouses(updatedWarehouses);
    //             // deleteConfirmation.target.reset();
    //             deleteConfirmation(warehouse_id)
    //         })
    //         .catch(error => console.log(error))
    // }


    return (

        <>

            <Table striped fullWidth className="bg-primary-lighter" >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Warehouse Name</th>
                        <th>Location</th>
                        <th>Current Capacity</th>
                        <th>Limit</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((warehouse) =>

                    (
                        <tr key={warehouse.id}>
                            <td>{warehouse.id}</td>
                            <td>{warehouse.warehouse_name}</td>
                            <td>{warehouse.warehouse_location}</td>
                            <td>{warehouse.warehouse_current_capacity}</td>
                            <td>{warehouse.warehouse_limit}</td>
                            {/* <Button onClick={() => handleDelete(warehouse_id)}>Delete Warehouse</Button> */}
                        </tr>
                    )
                    )
                    }
                </tbody>


            </Table>
        </>

    );


}

