import { Button, Form, Label, TextInput } from "@trussworks/react-uswds";


export default function UpdateWarehouseButton({ handleNewWarehouse }) {

  const url = 'http://localhost:8080/warehouses';

  function handleSubmit(event) {

    event.preventDefault();

    const data = new FormData(event.target)

    const newWarehouse = {
      id: data.get("id"),
      warehouse_name: data.get("warehouse_name"),
      warehouse_location: data.get("warehouse_location"),
      warehouse_current_capacity: Number(data.get("warehouse_current_capacity")),
      warehouse_limit: Number(data.get("warehouse_limit"))
      // warehouse_current_capacity : parseInt(data.get("warehouse_current_capacity")),
      // warehouse_limit : parseInt(data.get("warehouse_limit"))
    }

    fetch(url + "/warehouse", {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(newWarehouse)
    })
      .then(data => data.json())
      .then(returnedData => {
        handleNewWarehouse(returnedData);

        event.target.reset();
        // window.location.reload();
      })
      .catch(error => console.log(error))
  }

  return (

    <>

      <Form onSubmit={handleSubmit}>
        <Label htmlFor="warehouse-id-input">Warehouse Id</Label>
        <TextInput id="warehouse-id-input" name="id" type="text"></TextInput>

        <Label htmlFor="warehouse-name-input">Warehouse Name</Label>
        <TextInput id="warehouse-name-input" name="warehouse_name" type="text"></TextInput>

        <Label htmlFor="warehouse-location-input">Warehouse Location</Label>
        <TextInput id="warehouse-location-input" name="warehouse_location" type="text"></TextInput>

        <Label htmlFor="warehouse-limit-input">Warehouse Capacity Limit</Label>
        <TextInput id="warehouse-limit-input" name="warehouse_limit" type="number"></TextInput>

        <Button type="submit" data-close-modal='true'>Submit</Button>

      </Form>

    </>

  );

}

{/* <Label htmlFor="warehouse-capacity-input">Warehouse Current Capacity</Label>
        <TextInput id="warehouse-capacity-input" name="warehouse_current_capacity" type="text" placeholder="Set this equal to 0 to start!"></TextInput> */}