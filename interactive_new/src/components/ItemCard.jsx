import { ShoppingBasket } from "lucide-react";
import { Maximize2 } from "lucide-react";
import { PhilippinePeso } from "lucide-react";
import notavail from "../assets/notavail.webp";
import { useState } from "react";
import Modal from "./Modal";

export default function ItemCard({ items, setCartValue }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [modalToCart, setModalToCart] = useState(false);

  function handleShowMore(index) {
    setModalOpen(true);
    setSelectedItem(index);
  }

  function handleModalToCard(index) {
    setModalToCart(true);
    setModalOpen(false);
    setSelectedItem(index);
   }

  return (
    <>
      <div className={`fixed transition-all duration-200 ease-in ${modalToCart ? "opacity-1 z-50" : "opacity-0 z-0"}`}>
        <Modal propshow={setModalToCart} selectedItem={selectedItem} setCartValue={setCartValue}></Modal>
      </div>

      {/* modal div */}
      <div
        className={`fixed w-full h-[100dvh] top-0 bg-black/80 flex justify-center items-center 
                        ${modalOpen ? "opacity-1 z-50" : "opacity-0 z-0"}
                        transition-all duration-200 ease-in
                        `}
        onClick={() => setModalOpen(false)}
      >
        <div
          className="w-[40%] bg-[#e7e5e5] px-4 py-10 rounded-2xl flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={`itemImage/${selectedItem.ItemCode}.webp`}
            alt=""
            className=" rounded-2xl"
          />
          <div className="flex-[1] rounded-2xl w-full  px-6 flex flex-col justify-center mt-2 gap-1">
            <h4 className=" w-1/4 text-xs">{selectedItem.ItemCode}</h4>
            <p className=" ">{selectedItem.ItemName}</p>
            <div className=" w-1/2 flex items-center">
              <PhilippinePeso className="h-[0.75rem] w-[0.75rem]" />
              <p>{selectedItem.Price}</p>
            </div>

            <div className="flex justify-end gap-4 items-center">
              <ShoppingBasket
                className="text-[#3cb54c] hover:-translate-y-1 cursor-pointer"
                onClick={()=> handleModalToCard(selectedItem)}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-full px-20 py-4 flex gap-4 flex-wrap justify-evenly pt-20 z-0`}
      >
        {items.map((itm, index) => (
          <div
            key={index}
            onClick={() => handleShowMore(itm)}
            className={`
            h-[40%] rounded-2xl overflow-hidden flex flex-col gap-2
            w-full md:w-[calc(50%-10px)] lg:w-[calc(33%-10px)] xl:w-[calc(25%-20px)] 2xl:w-[calc(20%-20px)]
            mb-10 
                
            transform transition-transform duration-300 ease-out hover:scale-105 hover:z-10 relative  
           
            `}
          >
            <div className="bg-[#c8c6c6] flex-[5] rounded-2xl overflow-hidden shadow-md">
              <img
                src={`itemImage/${itm.ItemCode}.webp`}
                alt={itm.ItemName}
                onError={(e) => {
                  e.target.onerror = null; // prevent looping
                  e.target.src = notavail; // show fallback
                }}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-[1] rounded-2xl px-6 flex flex-col justify-evenly gap-1 mb-2">
              <h4 className="flex-1 w-1/4 text-xs">{itm.ItemCode}</h4>
              <p className="flex-1 truncate">{itm.ItemName}</p>
              <div className="flex-1 w-1/2 flex items-center">
                <PhilippinePeso className="h-[0.75rem] w-[0.75rem]" />
                <p>{itm.Price}</p>
              </div>

              <div
                className="flex justify-end gap-4 items-center"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <ShoppingBasket
                  className="text-[#3cb54c] hover:-translate-y-1 cursor-pointer"
                  onClick={()=> handleModalToCard(itm)}
                />
                {/* see more button */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
