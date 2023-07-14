import { Button, Form, Label, TextInput } from "@trussworks/react-uswds";


export default function DeleteInventoryButton({handleNewInventory}) {

  const url = 'http://localhost:8080/inventories';

  function handleSubmit(event) {

    event.preventDefault();

    const data = new FormData(event.target)

    const newInventory = {
      id : data.get("id")
    }

    fetch(url + "/inventory/" + data.get("id"), {
      method : "DELETE",
      headers : {
        "Content-type" : "application/json"
      },
      body : JSON.stringify(newInventory)
    })
    .then(data => data.json())
    .then(returnedData => {
      handleNewWarehouse(returnedData);

      event.target.reset();
    })
    .catch(error => console.log(error))
  }

  return (

    <>

      <Form onSubmit={handleSubmit}>
        <Label htmlFor="inventory-id-input">Inventory Id</Label>
        <TextInput id="inventory-id-input" name="id" type="text"></TextInput>

        <Button type="submit" data-close-modal='true'>Submit</Button>

      </Form>

    </>

  );

}

