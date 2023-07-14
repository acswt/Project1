import { Grid, Modal, ModalHeading, ModalToggleButton } from "@trussworks/react-uswds";
import { GridContainer } from "@trussworks/react-uswds";
import InventoryTable from "./InventoryTable";
import { useEffect, useRef, useState } from "react";
import InventoryForm from "./InventoryForm";
import UpdateInventoryButton from "./UpdateInventoryButton";
import DeleteInventoryButton from "./DeleteInventoryButton";

export default function Inventories() {


    const url = 'http://localhost:8080/inventories';

    // state for list of inventories
    const [inventories, setInventories] = useState([]);

    const modalRef = useRef(null);
    const modalRefInv = useRef(null);
    const modalRefInv2 = useRef(null);

    useEffect(() => {
        fetch(url)
            .then(data => data.json())
            .then(returnedData => {
                setInventories(returnedData)
            })
            .catch(error => console.error(error))
    }, []);


    function handleNewInventory(newInventory) {
        setInventories((oldState) => {
            return [...oldState, newInventory]
        });

    }

    return (

        <>
            <GridContainer>
                <Grid row>
                    <Grid col={10}>
                        <h1 className='text-centered'>All Inventories</h1>
                    </Grid>
                    <Grid col={2}>
                        <ModalToggleButton modalRef={modalRef} opener>New Inventory</ModalToggleButton>
                    </Grid>

                    <Grid col={2}>
                        <ModalToggleButton modalRef={modalRefInv} opener>Update Inventory</ModalToggleButton>
                    </Grid>

                    <Grid col={2}>
                        <ModalToggleButton modalRef={modalRefInv2} opener>Update Inventory</ModalToggleButton>
                    </Grid>

                </Grid>
                <Grid row>
                    <Grid col>
                        <InventoryTable tableData={inventories}></InventoryTable>
                    </Grid>
                </Grid>
            </GridContainer>

            <Modal id='inventory-form-modal' ref={modalRef}>

                <ModalHeading id="inventory-form-modal-heading">Enter New Inventory Details</ModalHeading>

                <InventoryForm handleNewInventory={handleNewInventory}></InventoryForm>

            </Modal>

            <Modal id='inventory-update-modal' ref={modalRefInv}>

                <ModalHeading id="inventory-update-modal-heading">Update Inventory</ModalHeading>

                <UpdateInventoryButton handleNewInventory={handleNewInventory}></UpdateInventoryButton>

            </Modal>

            <Modal id='inventory-delete-modal' ref={modalRefInv2}>

                <ModalHeading id="inventory-delete-modal-heading">Delete Inventory</ModalHeading>

                <DeleteInventoryButton handleNewInventory={handleNewInventory}></DeleteInventoryButton>

            </Modal>


        </>
    );
}