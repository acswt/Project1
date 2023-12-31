import { Button, Grid, GridContainer, Modal, ModalHeading, ModalToggleButton } from "@trussworks/react-uswds";
import ProductTable from "./ProductTable";
import { useEffect, useRef, useState } from "react";
import ProductForm from "./ProductForm";
import UpdateProductButton from "./UpdateProductButton";
import DeleteProductButton from "./DeleteProductButton"


export default function Products() {

    const url = 'http://localhost:8080/products/';

    // state for list of products
    const [products, setProducts] = useState([]);

    const modalRef = useRef(null);
    const modalRef2 = useRef(null);
    const modalRef9 = useRef(null);

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

                    <Grid col={2}>
                        <ModalToggleButton modalRef={modalRef2} opener>Update Product</ModalToggleButton>
                    </Grid>

                    <Grid col={2}>
                        <ModalToggleButton modalRef={modalRef9} opener>Delete Product</ModalToggleButton>
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

            <Modal id='product-update-modal' ref={modalRef2}>

                <ModalHeading id="product-form-update-heading">Update Product Details</ModalHeading>

                <UpdateProductButton handleNewProduct={handleNewProduct}></UpdateProductButton>

            </Modal>

            <Modal id='product-delete-modal' ref={modalRef9}>

                <ModalHeading id="product-form-delete-heading">Delete Product</ModalHeading>

                <DeleteProductButton handleNewProduct={handleNewProduct}></DeleteProductButton>

            </Modal>


        </>
    );
}