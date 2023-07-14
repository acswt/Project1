import { Button, Form, Label, TextInput } from "@trussworks/react-uswds";


export default function InventoryForm({handleNewInventory}) {

  const url = 'http://localhost:8080/inventories';

  async function handleSubmit(event) {

    event.preventDefault();

    const data = new FormData(event.target)

  const newInventory = {
    id: data.get("id"),
    product_id: Number(data.get("product_id")),
    warehouse_id: Number(data.get("warehouse_id")),
    product_quantity: Number(data.get("product_quantity")) 
  }

  //   const newInventory = {
  //   id: data.get("id"),
  //   product_id: {
  //     id: Number(data.get("product_id"))
  //   },
  //   warehouse_id: {
  //     id: Number(data.get("warehouse_id"))
  //   },
  //   product_quantity: Number(data.get("product_quantity"))
  // }

  // const newInventory = {
  //   id: data.get("id"),
  //   product_id: Number(data.get("product_id")),
  //   warehouse_id: Number(data.get("warehouse_id")),
  //   product_quantity: Number(data.get("product_quantity")) 
  // }

    fetch(url + "/inventory", {
      method : "POST",
      headers : {
        "Content-type" : "application/json"
      },
      body : JSON.stringify(newInventory)
    })
    .then(data => data.json())
    .then(returnedData => {
      handleNewInventory(returnedData);

      event.target.reset();

    })
    .catch(error => console.log(error))
  }

  return (

    <>

      <Form onSubmit={handleSubmit}>
        <Label htmlFor="inventory-id-input">Inventory Id</Label>
        <TextInput id="inventory-id-input" name="id" type="text"></TextInput>

        <Label htmlFor="product-name-input">Product Id</Label>
        <TextInput id="product-name-input" name="product_id" type="number"></TextInput>

        <Label htmlFor="warehouse-id-input">Warehouse Id</Label>
        <TextInput id="warehouse-id-input" name="warehouse_id" type="number"></TextInput>

        <Label htmlFor="inventory-quantity-input">Inventory Quantity</Label>
        <TextInput id="inventory-quantity-input" name="product_quantity" type="number"></TextInput>

        <Button type="submit" data-close-modal='true'>Submit</Button>

      </Form>

    </>
  );
}