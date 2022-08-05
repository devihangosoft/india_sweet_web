import "./styles.css";
import React, { useState } from "react";
import { Search } from "react-feather";

export default function Filterlist() {
    const itemList = [
        "Apple",
        "Orange",
        "Banana",
        "Cherry",
        "Milk",
        "Peanuts",
        "Butter",
        "Apple",
        "Orange",
        "Banana",
        "Cherry",
        "Milk",
    ];

    const [filteredList, setFilteredList] = new useState(itemList);

    const filterBySearch = (event) => {
        // Access input value
        const query = event.target.value;
        // Create copy of item list
        var updatedList = [...itemList];
        // Include all elements which includes the search query
        updatedList = updatedList.filter((item) => {
            return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        // Trigger render with updated values
        setFilteredList(updatedList);
    };

    return (
        <div className="mainfilter col-md-12">
          
                <div class="form-group has-search">
                    <span class="fa fa-search form-control-feedback">
                        <Search />
                    </span>
                    <input placeholder="Search" className="form-control " onChange={filterBySearch} />
                </div>


            <div id="item-list">
                <ol className="custom-scrollbar">
                    {filteredList.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
}