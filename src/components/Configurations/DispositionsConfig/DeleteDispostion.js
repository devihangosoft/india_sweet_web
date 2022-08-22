import React, { useState, useEffect } from 'react';
import useAxios from '../../hooks/useAxios';
import Swal from 'sweetalert2';
import { useDispatch } from "react-redux/es/exports";


const DeleteDispostion = ({rowData, callback}) => {
    const dispatch = useDispatch();
    
    const handleClose = () => dispatch({ type: "closeModal" });   

    const [apiState3, setapiState3] = useState(0);    
    const { response, loading, error } = useAxios({
        method: "post",
        url: "/deletedispostion",
        body: JSON.stringify({
            disposition_id: rowData.disposition_id,              
        }),
        apiState: apiState3,
    });

  
    
    useEffect(() => {
        if (response !== null) {
            // console.log(response);
            callback();            
            handleClose();

            Swal.fire({
                confirmButtonColor:'orange',
                icon: 'success',
                title: 'Success',
                text: 'Deleted Successfully !!',
              })
        }

        const resMessage =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
           
        console.log(resMessage);

    }, [response, error]);


    const handleDelete = ()=>{
        setapiState3(apiState3+1)
    }


    return (
        <div>

            <div className="card border-0 p-sm-3 p-2 justify-content-center">
                <div className="card-header pb-0 bg-white border-0 "><div className="row">
                <div className="col ml-auto">
                <button type="button" className="close" onClick={handleClose} aria-label="Close"> <span aria-hidden="true">&times;</span> </button></div> </div>
                    <p className="font-weight-bold mb-2"> Are you sure you wanna delete this ?</p>
                    {/* <p className="text-muted "> This change will reflect in your portal after an hour.</p>      */}
                    </div>
                <div className="card-body px-sm-4 mb-2 pt-1 pb-0">
                    <div className="row justify-content-end no-gutters">

                    <div className="col-auto">
                    <button type="button" className="btn btn-light text-muted" onClick={handleClose}>Cancel</button>
                    </div>

                    <div className="col-auto">
                    <button type="button" className="btn btn-danger px-4 ml-3" onClick={handleDelete}>Delete</button>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteDispostion;
