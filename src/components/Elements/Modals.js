import React from "react";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";


function Modals() {
  const { isOpen } = useSelector((store) => store.modalReducer);
  const { content } = useSelector((store) => store.modalReducer);
  const dispatch = useDispatch();
  
  const handleClose = () => 
    dispatch({
      type: "closeModal",            
    });

  
  return (
    <>
      <Modal
        show={isOpen}
        onHide={handleClose}
      >        
        {  content   }        
      </Modal>
    </>
  );
}

export default Modals;
