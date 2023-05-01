import Icons from "./Icons";

const Searchbar = () => (
  <div className="search-box z-[1000] h-10 rounded-[40px] group hover:border dark:hover:border-white hover:border-black">
    <input
      className="search-text float-left p-0 text-white leading-10 w-0 caret-transparent bg-transparent border-none outline-none group-hover:w-[240px] group-hover:px-4"
      type="text"
      placeholder="Search..."
    />
    <div className="search-btn">
      <Icons
        type="search"
        color="w-[24px] h-[24px] object-contain dark:stroke-white stroke-black"
      />
    </div>
  </div>
);

export default Searchbar;
