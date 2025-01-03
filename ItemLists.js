import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemLists = ({ items }) => {
  console.log(items);


  const dispatch = useDispatch();

const handleAddItem = (item) => {
  //dispatch an action
  dispatch(addItem(item)); // whatever goes inside addItem is our "action.payload"...
};


  return (
    <div>
      {items.map((item) => (
        <div
          className="m-2 p-2 border-gray-300 border-b-2 flex justify-between"
          key={item.card.info.id}
        >
          <div className="w-9/12">
            <div className="flex justify-between py-2 my-4">
              <span>{item.card.info.name}</span>
              <span>
                ₹{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="p-2 absolute rounded-lg bg-white shadow-lg  m-auto" 
              onClick={() => handleAddItem(item)}>
                Add+
              </button>
            </div>

            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name || "Product Image"}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemLists;
