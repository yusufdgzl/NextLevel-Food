import SearchIcons from "../ui/icons/SearchIcons";

export default function MealsSearch() {
  return (
    <div className="flex w-full px-4 relative md:w-[400px]  ">
      <div className="absolute inset-y-0 items-center flex right-6 z-10 ">
        <SearchIcons />
      </div>

      <input
        className="input w-full py-2  "
        placeholder="Search the recipes"
        type="text"
        id="search"
        name="search"
      />
    </div>
  );
}
