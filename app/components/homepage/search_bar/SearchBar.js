"use client";

import { useRef, useState } from "react";
import ArtArticle from "../image_gallery/ArtArticle";

const getArt = async (url) => {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
    next: { revalidate: 0 },
  });

  if (!response.ok) {
    console.error(`Error: ${res.ok}`);
    return false;
  }

  return response.json();
};

export default function SearchBar() {
  const [searchResults, setSearchResults] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const searchData = new FormData(form.current);

    const selectedOption =
      searchData.get("selectedOption") === "Artist" ? "person" : "exact_title";
      
    const searchValue =
      selectedOption === "person"
        ? searchData.get("searchValue").replace(" ", "-")
        : searchData.get("searchValue");

    const url = `https://api.harvardartmuseums.org/object?hasimage=1&${selectedOption}=${searchValue}&fields=primaryimageurl,division,period,classification,technique,description,title,dated,department,people,url&apikey=${process.env.NEXT_PUBLIC_API_KEY}`;

    const data = await getArt(url);

    data
      ? setSearchResults(data.records)
      : setErrorMessage("Error occurred during search, try again later.");

    e.target.reset();
  };

  return (
    <div className="text-center mb-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold">Search Something Specific</h1>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="flex flex-col text-center justify-center items-center"
      >
        <label className="p-2">
          Artist or Art?
          <select
            name="selectedOption"
            id="selected_option"
            className="border-2 border-amber-900 m-2 px-2"
          >
            <option value="Artist">Artist</option>
            <option value="Art">Art</option>
          </select>
        </label>
        <label>
          Search:
          <input
            type="text"
            name="searchValue"
            required
            id="search_alue"
            className="border-2 border-amber-900 rounded-md ml-2"
          />
        </label>
        <input
          type="submit"
          value="Submit"
          id="input-submit"
          className="border-2 border-amber-900 bg-amber-900 rounded-xl py-2 px-4 my-2 font-black text-white"
        />
      </form>
      {errorMessage && <p className="font-bold text-red-700">{errorMessage}</p>}
      <div className="flex flex-wrap justify-center w-9/12 min-w-[350px]">
        {searchResults &&
          searchResults.map((obj, index) => {
            return <ArtArticle data={obj} key={`${index}s`} />;
          })}
      </div>
    </div>
  );
}
