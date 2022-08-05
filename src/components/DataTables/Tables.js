import React from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { columns, data } from "./data";

const customStyles = {
  rows: {
    style: {
      padding:"10px 0px",
      minHeight: "50px",
      fontSize: "15px",
      "&:hover": {
        background: "#f5f5f5",
      },
      // override the row height
    },
  },
  headCells: {
    style: {
      padding:"8px 20px",
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

function Tables() {
  const tableData = {
    columns,
    data,
  };

  return (
    <div className="main">
    {/* <DataTableExtensions {...tableData}> */}
        <DataTable
          columns={columns}
          data={data}
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
