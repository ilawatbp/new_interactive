import { useRef } from "react";
export default function Modal({ propshow, selectedItem, setCartValue }) {
  function handleSubmit(item) {
    setCartValue((prev) => [
      ...prev,
      {
        id_no: `${item.ItemCode}`,
        quant: quantValue.current.value,
        discount: discountValue.current.value,
        price: `${item.Price}`,
        area: "",
        note: "",
      },
    ]);


    propshow();
    quantValue.current.value = 0;
    discountValue.current.value = 0;
  }

  const quantValue = useRef();
  const discountValue = useRef();

  return (
    <div
      className="fixed h-screen w-full top-0 bg-black/80 flex justify-center items-center"
      onClick={() => propshow(false)}
    >
      <div
        className="bg-[#e7e5e5] w-[90%] lg:w-[70%] 2xl:w-[60%] h-[30%] rounded-2xl p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full gap-2">
          <div className="flex-1 flex flex-col justify-start gap-4">
            <div>{selectedItem.ItemCode}</div>
            <div>{selectedItem.ItemName}</div>
            <div> {selectedItem.Price} Php</div>
          </div>
          <div className="flex justify-start items-center">
            <div className="w-24">
              <p>QUANTITY</p>
            </div>
            <input
              type="number"
              className="h-10 w-1/2 rounded-2xl px-4 shadow-xl"
              ref={quantValue}
              defaultValue={1}
            />
          </div>
          <div className="flex justify-start items-center">
            <div className="w-24">
              <p>DISCOUNT</p>
            </div>
            <input
              type="number"
              className="h-10 w-1/2 rounded-2xl px-4 shadow-xl"
              ref={discountValue}
              defaultValue={0}
            />
            <button
              className="h-10 bg-[#3cb54c] rounded-2xl px-6 shadow-xl ml-auto"
              onClick={() => handleSubmit(selectedItem)}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
