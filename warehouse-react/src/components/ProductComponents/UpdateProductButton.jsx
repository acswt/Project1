import { Button, Form, Label, TextInput } from "@trussworks/react-uswds";


export default function UpdateProductButton({handleNewProduct}) {

  const url = 'http://localhost:8080/products';

  function handleSubmit(event) {

    event.preventDefault();

    const data = new FormData(event.target)

    const newProduct = {
      id : data.get("id"),
      product_name : data.get("product_name")
    }

    fetch(url + "/product", {
      method : "PUT",
      headers : {
        "Content-type" : "application/json"
      },
      body : JSON.stringify(newProduct)
    })
    .then(data => data.json())
    .then(returnedData => {
      handleNewProduct(returnedData);

      event.target.reset();
      window.location.reload();

    })
    .catch(error => console.log(error))
  }

  return (

    <>

      <Form onSubmit={handleSubmit}>
        <Label htmlFor="product-id-input">Product Id</Label>
        <TextInput id="product-id-input" name="id" type="text"></TextInput>

        <Label htmlFor="product-name-input">Product Name</Label>
        <TextInput id="product-name-input" name="product_name" type="text"></TextInput>

        <Button type="submit" data-close-modal='true'>Submit</Button>

      </Form>

    </>

  );

}