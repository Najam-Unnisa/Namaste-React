import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const[showIndex, setShowIndex] = useState(0);


  if (resInfo === null) {
    return <Shimmer />;
  }
  const info = resInfo?.cards?.[2]?.card?.card?.info || {};
  const { name, cuisines = [], costForTwoMessage = "" } = info;
  const { itemCards = [] } =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card || {};
  console.log(itemCards);

  const Categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(Categories);

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold my-5">{name}</h1>
      <p className="font-bold text-lg">
        {" "}
        {cuisines.join(". ")}-{costForTwoMessage}
      </p>

      {/*category accordions*/}

      {Categories.map((Category, index) => (
        <RestaurantCategory
          key={Category?.card?.card.title}
          data={Category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={()=> setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
