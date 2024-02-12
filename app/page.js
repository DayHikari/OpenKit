import ImageGallery from "./components/homepage/image_gallery/ImageGallery";
import SearchBar from "./components/homepage/search_bar/SearchBar";

export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <SearchBar />
      <ImageGallery/>
    </main>
  );
}
