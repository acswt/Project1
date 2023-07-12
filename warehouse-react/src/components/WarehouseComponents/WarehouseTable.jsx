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
                {tableData.map((warehouse) => {
                    return (
                        <tr key={warehouses.id}> 
                            <td>{warehouses.id}</td>
                            <td>{warehouses.name}</td>
                            <td>{warehouses.location}</td>
                            <td>{warehouses.currentCapacity}</td>
                            <td>{warehouses.warehouseLimit}</td>
                        </tr>
                    )
                })}
            </tbody>


        </Table>
        </>

    );

}
