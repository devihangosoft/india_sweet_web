import React from 'react'
import Edituserform from "./Edituserform";
import { useDispatch } from "react-redux/es/exports";
import * as Icon from "react-feather";

function EditButton(props) {
     const dispatch = useDispatch((store) => store.modalReducer);     

    const handleShow = () => {
        // console.log(props.row.id);
        dispatch({
          type: "openModal",
          payload : <Edituserform row={props.row} />    
        });        
    }

    return (
      <>
        <div className="mr-3" onClick={handleShow} row={props.row}>
          <Icon.Edit type="button" color="blue" width="20" />
        </div>
        {/* <button type="button" class="btn btn-primary mr-3" onClick={handleShow}>
          Edit
        </button> */}
      </>
    );

}

function DeleteButton(props) {
    const dispatch = useDispatch();

   const handleShow = () => {
       dispatch({
         type: "openModal",
         payload : <h2>hello</h2>
       });       
   }

   return (
     <>
       <Icon.Trash2 type="button" color="red" width="20" onClick={handleShow} />
       {/* <button type="button" class="btn btn-danger" onClick={handleShow}>
         Delete
       </button> */}
     </>
   );

}



export {EditButton, DeleteButton}