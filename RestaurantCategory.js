import { useState } from "react";
import ItemLists from "./ItemLists";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {

 
    const handleClick = () =>{
        setShowIndex();
    }
    return <div>
        {/*Header */}
        <div className="w-6/12 my-4 mx-auto p-4 bg-gray-200 shadow-lg">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
        {/* <span>=></span> */}
        
        </div>
 
        
        {/*Accordion Body*/}

        {showItems && <ItemLists items={data.itemCards}/> }
        </div>
    </div>
}

export default RestaurantCategory;