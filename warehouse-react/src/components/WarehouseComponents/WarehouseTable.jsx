import { Table } from "@trussworks/react-uswds";

export default function WarehouseTable({tableData}) {

    console.log(tableData);

    if (!Array.isArray(tableData)) {
        console.log("Not an array");
        
        return null;
      } 

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
                        <tr key={warehouse.id}> 
                            <td>{warehouse.id}</td>
                            <td>{warehouse.warehouseName}</td>
                            <td>{warehouse.warehouseLocation}</td>
                            <td>{warehouse.currentCapacity}</td>
                            <td>{warehouse.warehouseLimit}</td>
                        </tr>
                    )
                })}
            </tbody>


        </Table>
        </>

    );

}
