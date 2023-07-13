import { Button, Form, Label, TextInput } from "@trussworks/react-uswds";


export default function InventoryForm(handleNewInventory) {

  const url = 'http://localhost:8080/inventories';

  function handleSubmit(event) {

    event.preventDefault();

    const data = new FormData(event.target)

    const newInventory = {
      id : data.get("id"),
      productId : data.get("productId"),
      warehouseId : data.get("warehouseId"),
      quantity : data.get("productQuantity")
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
        <TextInput id="inventory-input" name="inventoryId" type="text"></TextInput>

        <Label htmlFor="product-name-input">Product Id</Label>
        <TextInput id="inventory-input" name="productId" type="text"></TextInput>

        <Label htmlFor="warehouse-id-input">Warehouse Id</Label>
        <TextInput id="inventory-input" name="warehouseId" type="text"></TextInput>

        <Label htmlFor="inventory-quantity-input">Inventory Quantity</Label>
        <TextInput id="inventory-input" name="inventoryQuantity" type="text"></TextInput>

        <Button type="submit" data-close-modal='true'>Submit</Button>

      </Form>

    </>
  );
}