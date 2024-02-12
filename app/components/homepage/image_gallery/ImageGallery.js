import Image from "next/image";
import ArtArticle from "./ArtArticle";

async function getArt() {
  const url = `https://api.harvardartmuseums.org/object?sort=random&hasimage=1&fields=primaryimageurl,division,period,classification,technique,description,title,dated,department,people,url&apikey=${process.env.API_KEY}`;

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    console.error(`Error: ${res.ok}`);
  }

  return res.json();
}

export default async function ImageGallery() {
  const data = await getArt();

  return (
    <section className="w-9/12 min-w-[350px]">
      Image Gallery
      <div className="flex flex-wrap">
        {data &&
          data.records.map((obj, index) => {
            return (
              <ArtArticle data={obj} key={index} />
            );
          })}
      </div>
    </section>
  );
}
