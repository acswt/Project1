import { Button, Grid, GridContainer, Modal, ModalHeading, ModalToggleButton } from "@trussworks/react-uswds";
import ProductTable from "./ProductTable";
import { useEffect, useRef, useState } from "react";
import ProductForm from "./ProductForm";

export default function Products() {

    const url = 'http://localhost:8080/products/';

    // state for list of products
    const [products, setProducts] = useState([]);

    const modalRef = useRef(null);

    useEffect(() => {
        fetch(url)
            .then(data => data.json())
            .then(returnedData => {
                console.log(returnedData)
                setProducts(returnedData)
            })
            .catch(error => console.error(error))
    }, []);


    function handleNewProduct(newProduct) {
        setProducts((oldState) => {
            return [...oldState, newProduct]
        })
    }

    return (

        <>
            <GridContainer>
                <Grid row>
                    <Grid col={10}>
                        <h1 className='text-centered'>All Products</h1>
                    </Grid>
                    <Grid col={2}>
                        <ModalToggleButton modalRef={modalRef} opener>New Product</ModalToggleButton>
                    </Grid>

                </Grid>
                <Grid row>
                    <Grid col>
                        <ProductTable tableData={products}></ProductTable>
                    </Grid>
                </Grid>
            </GridContainer>

            <Modal id='product-form-modal' ref={modalRef}>

                <ModalHeading id="product-form-modal-heading">Enter New Product Details</ModalHeading>

                <ProductForm handleNewProduct={handleNewProduct}></ProductForm>

            </Modal>


        </>
    );
}