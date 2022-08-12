import React from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { columns, data } from "./data";
import { EditButton, DeleteButton } from "./HandleModal";

const customStyles = {
  style: {
    background: '#f5f5f5'
  },
  rows: {
    style: {
      padding: "5px 0px",
      minHeight: "50px",
      fontSize: "15px",
      margin: "0 0 10px 0",
      background: "#f5f5f5",
      borderBottom: '0px solid!important',
      "&:hover": {
        background: "#f5f5f5",
      },
      // override the row height
    },
  },
  headCells: {
    style: {
      padding: "8px 20px",
      fontSize: "16px",
      fontWeight: "600",
    },
  },
  cells: {
    style: {
      //paddingLeft: "15px", 
      //paddingRight: "15px",
    },
  },
};

function Tables(props) {

  let tData = props.data;

  let tcolumns = [];
  if (tData != null) {
    tcolumns = ((Object.keys(tData[0]))).map((item, index) => {
      console.log(item);
      return {
        name: item,
        selector: item,
        sortable: true,
        width: "150px"
      }
    })
  }


  let tabledata;
  if (tData != null) {
    tabledata = tData.map((item, index) => {
      return {
        product_id: item.product_id,
        product_name: item.product_name,
        product_details: item.product_details,
        quantity: item.quantity,
        price: item.price
      }
    })
  }

  return (
    <div className="main">
      {/* <DataTableExtensions {...tableData}> */}
      <DataTable
        columns={tcolumns}
        data={tabledata}
        noHeader
        defaultSortField="id"
        defaultSortAsc={false}
        pagination
        highlightOnHover
        customStyles={customStyles}
      />
      {/* </DataTableExtensions> */}

    </div>
  );
}

export default Tables;
