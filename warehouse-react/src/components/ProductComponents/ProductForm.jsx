import { Button, Form, Label, TextInput } from "@trussworks/react-uswds";


export default function ProductForm(handleNewProduct) {

  const url = 'http://localhost:8080/products';

  function handleSubmit(event) {

    event.preventDefault();

    const data = new FormData(event.target)

    const newProduct = {
      id : data.get("productId"),
      name : data.get("productName")
    }

    fetch(url + "/product", {
      method : "POST",
      headers : {
        "Content-type" : "application/json"
      },
      body : JSON.stringify(newProduct)
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
        <Label htmlFor="product-id-input">Product Id</Label>
        <TextInput id="product-input" name="productId" type="text"></TextInput>

        <Label htmlFor="product-name-input">Product Name</Label>
        <TextInput id="product-input" name="productName" type="text"></TextInput>

        <Button type="submit" data-close-modal='true'>Submit</Button>

      </Form>

    </>

  );

}