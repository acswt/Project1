import { Table } from "@trussworks/react-uswds";


export default function ProductTable({tableData}) {

    return (

        <>
        <Table striped fullWidth className="bg-primary-lighter" >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((product) => 
                     (
                        <tr key={product.id}> 
                            <td>{product.id}</td>
                            <td>{product.product_name}</td>
                        </tr>
                    )
                )}
            </tbody>
        </Table>
        </>
    );
}