import SearchBar from "./components/SearchBar";
import CategCard from "./components/CategCard";
import SkelitonCard from "./components/SkelitonCard";
import ItemCard from "./components/ItemCard";
import SubCateg from "./components/SubCateg";
import { ShoppingBasket } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "./assets/logo.png";
import categories from "./data/categories";

function App() {



  const [items, setItems] = useState([]); 
  const [view, setView] = useState("category")
  const [subCatVal, setSubCatVal] = useState([])
  // posible views
  //   - category
  //   - subcategories
  //   - loading
  //   - searchQuery
  //   - searching

  const [queryValue, setQueryValue] = useState("");

// original 
  useEffect(() => {
    if (!queryValue) return;

    // Start loading
    setView('loading'); 

    console.log(queryValue)
    // Fetch from backend
    fetch(`http://localhost:5000/items?q=${queryValue}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);

        // simulate short loading delay (optional)
        setTimeout(() => {
           setView('searchQuery'); 
        }, 1000); // 1 sec loading animation
      })
      .catch((err) => {
        console.error("Error fetching:", err);
        setView('category'); 
      });
  }, [queryValue]);

  const handleSubCategoryClick = (id) =>{
    // http://localhost:5000/items?group=3
    setView('loading'); 
    
    // Fetch from backend
    fetch(`http://localhost:5000/items?group=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);

        // simulate short loading delay (optional)
        setTimeout(() => {
           setView('searchQuery'); 
        }, 1000); // 1 sec loading animation
      })
      .catch((err) => {
        console.error("Error fetching:", err);
        setView('category'); 
      });
  }

  //to open subcategories
  function handleSubCateg(categ){
    setSubCatVal(categ);
    // setSubCatVal(categ);
    setView("subcategories")
  }

  function clickFunction() {
    alert("shopping");
  }

  return (
    <div className="w-full bg-[#f8f8f8] flex flex-col pt-10 relative overflow-y-hidden scrollbar-hide min-h-[100dvh]">
      <div className="absolute top-0 w-full flex justify-between p-10 z-40">
        <div>
          <img
            src={logo}
            alt="ILAW ATB"
            className="h-[30px]"
            onClick={() => {
              setView("category");
              setItems([]);
              queryValue("");
            }}
          />
        </div>
        <div onClick={clickFunction}>
          <ShoppingBasket className="w-8 h-8" />
        </div>
      </div>
      {/* MAINBODY */}
      <div className="m-auto w-full">
        <div
          className={`fixed left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ease-in-out ${
            view == "searching"
              ? "top-1/2 -translate-y-1/2 w-1/3 h-12"
              : "top-10 w-1/4 h-10"
          }`}
        >
          <SearchBar
            setView={setView}
            setQueryValue={setQueryValue}
          ></SearchBar>
        </div>

        {/* category list */}
        {view == "category" ? (
          <div
            className={`max-w-6xl mx-auto px-4 py-10 flex flex-wrap justify-center items-center gap-6 transition-all duration-500 ease-in-out 
          ${
            view == "category"
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          >
            {categories.map((categ, index) => (
              // <div>{categ.image}</div>
              <CategCard
                handleSubCateg={handleSubCateg}
                info={categ}
                key={index}
              ></CategCard>
            ))}
          </div>
        ) : null}

        {/* subcategory list */}
        {view == "subcategories" ? (
          <div
            className={`max-w-6xl mx-auto px-4 py-10 flex flex-wrap justify-center items-center gap-6 transition-all duration-500 ease-in-out 
          ${
            view == "subcategories"
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          >
            {categories
              .filter((value) => value.cname == subCatVal)
              .map((categ) =>
                categ.subcategories.map((sub, index) => (
                  <SubCateg info={sub} key={index} handleSubCategoryClick={handleSubCategoryClick}></SubCateg>
                ))
              )}
          </div>
        ) : null}

        {/* no item found msg */}
        {/* {items.length === 0 && (
          <div
            className={`${
              onLoad == false && onquery == true ? "opacity-1" : "opacity-0 h-0"
            }
            fixed -translate-x-1/2 left-1/2
            `}
          >
            ITEM NOT FOUND
          </div>
        )} */}

        {/* items on query */}
        <div
          className={` transition-opacity duration-700 ease-in-out ${
            view == "searchQuery" ? "opacity-1" : "opacity-0 h-0"
          }`}
        >
          <ItemCard items={items} />
        </div>

        {view === "searchQuery" && items.length === 0 && (
          <div className="text-center text-gray-500 mt-10 text-lg font-semibold">
            ITEM NOT FOUND
          </div>
        )}

        {/* skeliton loading */}
        <div
          className={`transition-all duration-700 ease-in-out ${
            view == "loading" ? "opacity-1" : "opacity-0 h-0"
          }`}
        >
          <SkelitonCard />
        </div>
      </div>
    </div>
  );
}

export default App;
