import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {
      cloudinaryImageId,
      name,
      cuisines,
      costForTwo,
      avgRating,
      sla: { deliveryTime },
    } = resData?.info;
    return (
      <div className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-pink-200 ">
        <img
          className="rounded-lg"
          alt="food "
          src={
            CDN_URL +
            cloudinaryImageId
          }
        ></img>
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{deliveryTime} mins</h4>
      </div>
    );
  };
  
export default RestaurantCard;
