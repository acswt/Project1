import { Button, Form, Label, TextInput } from "@trussworks/react-uswds";


export default function InventoryForm({handleNewInventory}) {

  const url = 'http://localhost:8080/inventories';

  function handleSubmit(event) {

    event.preventDefault();

    const data = new FormData(event.target)

    console.log(data + "This is the data");

  //   const newInventory =     {
  //     id: data.get("id"),
  //     product_id: {
  //         id: data.get("id")
  //         // product_name: data.get("product_name")
  //     },
  //     warehouse_id: {
  //         id: data.get("id")
  //         // warehouse_name: data.get("warehouse_name"),
  //         // warehouse_location: data.get("warehouse_location"),
  //         // warehouse_current_capacity: data.get("warehouse_current_capacity"),
  //         // warehouse_limit: data.get("warehouse_limit")
  //     },
  //     product_quantity: data.get("product_quantity")
  // }

  const newInventory = {
    id: data.get("id"),
    product_id: data.get("product_id.id"),
    warehouse_id: data.get("warehouse_id.id"),
    product_quantity: data.get("product_quantity") 
  }

  

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
        <TextInput id="inventory-input" name="id" type="text"></TextInput>

        <Label htmlFor="product-name-input">Product Id</Label>
        <TextInput id="inventory-input" name="product_id" type="text"></TextInput>

        <Label htmlFor="warehouse-id-input">Warehouse Id</Label>
        <TextInput id="inventory-input" name="warehouse_id" type="text"></TextInput>

        <Label htmlFor="inventory-quantity-input">Inventory Quantity</Label>
        <TextInput id="inventory-input" name="product_quantity" type="text"></TextInput>

        <Button type="submit" data-close-modal='true'>Submit</Button>

      </Form>

    </>
  );
}