import { Button, Grid, GridContainer, Modal, ModalHeading, ModalToggleButton } from "@trussworks/react-uswds";
import WarehouseTable from "./WarehouseTable";
import { useEffect, useRef, useState } from "react";
import WarehouseForm from "./WarehouseForm";
import UpdateWarehouseButton from "./UpdateWarehouseButton";
import DeleteWarehouseButton from "./DeleteWarehouseButton";

export default function Warehouses() {

    const url = 'http://localhost:8080/warehouses';

    // state for list of warehouses
    const [warehouses, setWarehouses] = useState([]);

    const modalRef = useRef(null);
    const modalRef3 = useRef(null);
    const modalRef4 = useRef(null);

    useEffect(() => {
        fetch(url)
            .then(data => data.json())
            .then(returnedData => {
                setWarehouses(returnedData);
            })
            .catch(error => console.error(error));
    }, []);


    function handleNewWarehouse(newWarehouse) {
        setWarehouses((oldState) => {
            return [...oldState, newWarehouse];
        })

    }

    return (

        <>
            <GridContainer>
                <Grid row>
                    <Grid col={10}>
                        <h1 className='text-centered'>All Warehouses</h1>
                    </Grid>
                    
                    <Grid col={2}>
                        <ModalToggleButton modalRef={modalRef} opener>New Warehouse</ModalToggleButton>
                    </Grid>

                    <Grid col={2}>
                        <ModalToggleButton modalRef={modalRef3} opener>Update Warehouse</ModalToggleButton>
                    </Grid>

                    <Grid col={2}>
                        <ModalToggleButton modalRef={modalRef4} opener>Delete Warehouse</ModalToggleButton>
                    </Grid>

                </Grid>
                <Grid row>
                    <Grid col>
                        <WarehouseTable tableData={warehouses}></WarehouseTable>
                    </Grid>
                </Grid>
            </GridContainer>

            <Modal id='warehouse-form-modal' ref={modalRef}>

                <ModalHeading id="warehouse-form-modal-heading">Enter New Warehouse Details</ModalHeading>

                <WarehouseForm handleNewWarehouse={handleNewWarehouse}></WarehouseForm>

            </Modal>

            <Modal id='warehouse-form-modal' ref={modalRef3}>

                <ModalHeading id="warehouse-form-modal-heading">Update Warehouse Details</ModalHeading>

                <UpdateWarehouseButton handleNewWarehouse={handleNewWarehouse}></UpdateWarehouseButton>

            </Modal>

            <Modal id='warehouse-form-modal' ref={modalRef4}>

                <ModalHeading id="warehouse-form-modal-heading">Delete Warehouse</ModalHeading>

                <DeleteWarehouseButton handleNewWarehouse={handleNewWarehouse}></DeleteWarehouseButton>

            </Modal>

        </>

    );

}