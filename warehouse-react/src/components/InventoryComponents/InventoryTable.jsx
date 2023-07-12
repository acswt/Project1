import { Table } from "@trussworks/react-uswds";

export default function InventoryTable({tableData}) {

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
                    return (
                        <tr key={inventory.id}> 
                            <td>{inventory.id}</td>
                            <td>{product.id}</td>
                            <td>{warehouse.id}</td>
                            <td>{inventory.quantity}</td>
                        </tr>
                    )
                })}
            </tbody>


        </Table>
        </>

    );

}