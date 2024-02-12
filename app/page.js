import Image from "next/image";
import ImageGallery from "./components/homepage/image_gallery/ImageGallery";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <ImageGallery/>
    </main>
  );
}
