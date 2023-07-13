import { Table } from "@trussworks/react-uswds";

export default function InventoryTable({tableData}) {

    console.log(tableData)

    return (

        <>
        <Table striped fullWidth className="bg-primary-lighter" >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Product Id</th>
                    <th>Warehouse Id</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((inventory) => {
                     
                        <tr key={inventory.id}> 
                            <td>{inventory.id}</td>
                            <td>{inventory.product_id}</td>
                            <td>{inventory.warehouse_id}</td>
                            <td>{inventory.product_quantity}</td>
                        </tr>
                    
                })}
            </tbody>
        </Table>
        </>
    );
}