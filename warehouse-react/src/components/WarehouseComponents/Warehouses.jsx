import { Button, Grid, GridContainer, Modal, ModalHeading, ModalToggleButton } from "@trussworks/react-uswds";
import WarehouseTable from "./WarehouseTable";
import { useEffect, useRef, useState } from "react";
import WarehouseForm from "./WarehouseForm";

export default function Warehouses() {

    const url = 'http://localhost:8080/warehouses';

    // state for list of warehouses
    const [warehouses, setWarehouses] = useState([]);

    const modalRef = useRef(null);

    useEffect(() => {
        fetch(url)
            .then(data => {
                data.json
            })
            .then(returnedData => {
                setWarehouses(returnedData)
            })
            .catch(error => console.error(error))
    }, []);


    function handleNewWarehouse(newWarehouse) {
        setWarehouses((oldState) => {
            return [...oldState, newWarehouse]
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

                    <Grid row>
                        <Grid col>
                            <WarehouseTable tableData={warehouses}></WarehouseTable>
                        </Grid>
                    </Grid>
                </Grid>
            </GridContainer>

            <Modal id='warehouse-form-modal' ref={modalRef}>

                <ModalHeading id="warehouse-form-modal-heading">Enter New Warehouse Details</ModalHeading>

                <WarehouseForm handleNewWarehouse={handleNewWarehouse}></WarehouseForm>

            </Modal>

        </>

    );

}