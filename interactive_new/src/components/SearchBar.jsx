import { Search } from "lucide-react";
import { useRef, useState } from "react";

export default function SearchBar({setView, setQueryValue}) {
  const [searchData, setSearchData] = useState();
  const inputValue = useRef();
  const searchButRef = useRef();

  function handleKeyDown(e){
    if(e.key === "Enter"){
    searchButRef.current.click();
    }
  }

function getSearchData(){
setQueryValue(inputValue.current.value);
setSearchData(inputValue.current.value);

if (searchData == inputValue.current.value){
  setView('searchQuery');
}
}

  return (
    <div className="w-full h-[100%] flex justify-center rounded-2xl shadow-md">
      <input
        type="text"
        ref={inputValue}
        className="bg-white rounded-l-2xl focus:outline-none px-4 flex-1 min-w-1"
        onClick={()=>setView('searching')}
        onKeyDown={handleKeyDown}
      />
      
      <button className="flex items-center justify-center bg-[#3cb54c] text-white w-12 rounded-r-2xl" onClick={getSearchData} ref={searchButRef}>
         {/* onClick={closeBar} */}
        <Search />
      </button>
    </div>
  );
}
