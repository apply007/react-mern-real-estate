import React from "react";

export default function () {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-7 border-b-2 md:border-r-2 md:h-screen">
        <form className="flex flex-col gap-8">
          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap">Search Term</label>
            <input
              type="text"
              id="searchTerm"
              placeholder="Search..."
              className="border rounded-lg w-full p-3"
            />
          </div>

          <div className="flex gap-2 flex-wrap items-center">
            <label className="font-semibold">Type : </label>
            <div className="flex gap-2">
              <input type="checkbox" id="all" className="w-5" />
              <span>Rent and Sale</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="rent" className="w-5" />
              <span>Rent</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="sale" className="w-5" />
              <span>Sale</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="offer" className="w-5" />
              <span>Offer</span>
            </div>
          </div>
          {/* aminities */}
          <div className="flex gap-2 flex-wrap items-center">
            <label className="font-semibold">Amenities : </label>
            <div className="flex gap-2">
              <input type="checkbox" id="parking" className="w-5" />
              <span>Parking</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="furnished" className="w-5" />
              <span>Furnished</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <label className="font-semibold">Sort : </label>
            <select className="border rounded-lg p-3" id="sort_order">
              <option value="">Price high to low</option>
              <option value="">Latest</option>
              <option value="">Oldest</option>
            </select>
          </div>
          <button className="bg-slate-700 text-white p-2 uppercase italic hover:opacity-85 rounded-lg font-semibold">Search</button>
        </form>
      </div>
      <div className="">
        <h1 className="text-3xl font-semibold p-3 text-slate-700 mt-5">Listing Results :</h1>
      </div>
    </div>
  );
}
