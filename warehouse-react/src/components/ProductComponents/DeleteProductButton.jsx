import { Button, Form, Label, TextInput } from "@trussworks/react-uswds";


export default function UpdateProductButton({handleNewProduct}) {

  const url = 'http://localhost:8080/products';

  function handleSubmit(event) {

    event.preventDefault();

    const data = new FormData(event.target)

    const newProduct = {
      id : data.get("id")
    }

    fetch(url + "/product/" + data.get("id"), {
      method : "DELETE",
      headers : {
        "Content-type" : "application/json"
      },
      body : JSON.stringify(newProduct)
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
        <Label htmlFor="product-id-input">Warehouse Id</Label>
        <TextInput id="product-id-input" name="id" type="text"></TextInput>

        <Button type="submit" data-close-modal='true'>Submit</Button>

      </Form>

    </>

  );

}

