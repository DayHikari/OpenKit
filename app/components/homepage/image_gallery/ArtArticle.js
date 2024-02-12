import Image from "next/image";

export default function ArtArticle({ data }) {
  const imageURL = data.primaryimageurl || "no_image_available.jpg";
  const imageAltText = data.title || "Placeholder image";
  const artistName = data.people ? data.people[0].displayname : "Unknown";
  const date = data.dated || "Unknown";

  return (
    <article className="border-4 border-amber-900 border-double rounded-md p-6 w-fit max-w-[350px] h-fill m-2">
      <Image
        src={imageURL}
        alt={imageAltText}
        unoptimized
        width={300}
        height={300}
        className="h-[300px]"
      />
      <div className="mt-2">
        <h2><span className="font-bold">Title:</span> {data.title}</h2>
        <p><span className="font-bold">Artist:</span> {artistName}</p>
        <p><span className="font-bold">Dated:</span> {date}</p>
      </div>
    </article>
  );
}
