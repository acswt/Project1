import { Button, Form, Label, TextInput } from "@trussworks/react-uswds";


export default function UpdateInventoryButton({handleNewInventory}) {

  const url = 'http://localhost:8080/inventories';

  function handleSubmit(event) {

    event.preventDefault();

    const data = new FormData(event.target)

    const newInventory = {
        id: data.get("id"),
        product_id: Number(data.get("product_id")),
        warehouse_id: Number(data.get("warehouse_id")),
        product_quantity: Number(data.get("product_quantity")) 
      }

    fetch(url + "/inventory", {
      method : "PUT",
      headers : {
        "Content-type" : "application/json"
      },
      body : JSON.stringify(newInventory)
    })
    .then(data => data.json())
    .then(returnedData => {
      handleNewProduct(returnedData);

      event.target.reset();
    })
    .catch(error => console.log(error))
  }

  return (

    <>

      <Form onSubmit={handleSubmit}>
        <Label htmlFor="inventory-id-input">Product Id</Label>
        <TextInput id="inventory-id-input" name="id" type="text"></TextInput>

        <Label htmlFor="product-id-input">Product Id</Label>
        <TextInput id="product-id-input" name="product_id" type="text"></TextInput>

        <Label htmlFor="warehouse-id-input">Warehouse Id</Label>
        <TextInput id="warehouse-id-input" name="warehouse_id" type="text"></TextInput>

        <Label htmlFor="product-quantity-input">Product Quantity</Label>
        <TextInput id="product-quantity-input" name="product_quantity" type="text"></TextInput>

        <Button type="submit" data-close-modal='true'>Submit</Button>

      </Form>

    </>

  );

}