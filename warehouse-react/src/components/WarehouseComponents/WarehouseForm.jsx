import { Button, Form, Label, TextInput } from "@trussworks/react-uswds";


export default function WarehouseForm(handleNewWarehouse) {

  const url = 'http://localhost:8080/warehouses';

  async function handleSubmit(event) {

    event.preventDefault();

    const data = new FormData(event.target)

    const newWarehouse = {
      id : data.get("id"),
      warehouse_name : data.get("warehouse_name"),
      warehouse_location : data.get("warehouse_location"),
      warehouse_current_capacity : parseInt(data.get("warehouse_current_capacity")),
      warehouse_warehouse_limit : parseInt(data.get("warehouse_limit"))
    }

  //   fetch(url + "/warehouse", {
  //     method : "POST",
  //     headers : {
  //       "Content-type" : "application/json"
  //     },
  //     body : JSON.stringify(newWarehouse)
  //   })
  //   .then(data => data.json())
  //   .then(returnedData => {
  //     handleNewWarehouse(returnedData);

  //     event.target.reset();
  //     window.location.reload();
  //   })
  //   .catch(error => console.log(error))
  // }

  try {
    const response = await fetch(url + "/warehouse", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newWarehouse),
    });

    if (response.ok) {
      const returnedData = await response.json();
      handleNewWarehouse(returnedData);
      event.target.reset();
      window.location.reload();
    } else {
      throw new Error("Network response was not ok.");
    }
  } catch (error) {
    console.log(error);
  }
}

  return (

    <>

      <Form onSubmit={handleSubmit}>
        {/* <Label htmlFor="warehouse-id-input">Warehouse Id</Label>
        <TextInput id="warehouse-input" name="warehouse_id" type="text"></TextInput> */}

        <Label htmlFor="warehouse-name-input">Warehouse Name</Label>
        <TextInput id="warehouse-input" name="warehouse_name" type="text"></TextInput>

        <Label htmlFor="warehouse-location-input">Warehouse Location</Label>
        <TextInput id="warehouse-input" name="warehouse_location" type="text"></TextInput>

        <Label htmlFor="warehouse-capacity-input">Warehouse Current Capacity</Label>
        <TextInput id="warehouse-input" name="warehouse_current_capacity" type="number" placeholder="Set this equal to 0 to start!"></TextInput>

        <Label htmlFor="warehouse-limit-input">Warehouse Capacity Limit</Label>
        <TextInput id="warehouse-input" name="warehouse_limit" type="number"></TextInput>

        <Button type="submit" data-close-modal='true'>Submit</Button>

      </Form>

    </>

  );

}