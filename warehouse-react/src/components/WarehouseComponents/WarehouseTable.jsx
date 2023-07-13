import { Table } from "@trussworks/react-uswds";

export default function WarehouseTable({tableData}) {


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
                            </tr>
                        )
                    )
                    }
                </tbody>


            </Table>
        </>

    );

}
