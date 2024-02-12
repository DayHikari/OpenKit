import Image from "next/image";

async function getArt() {
  const url = `https://api.harvardartmuseums.org/object?sort=random&hasimage=1&fields=primaryimageurl,division,period,classification,technique,description,title,dated,department,people,url&apikey=${process.env.API_KEY}`;

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
    next: {revalidate: 0}
  });

  if(!res.ok) {
    console.error(`Error: ${res.ok}`)
  };
  
  return res.json();
};

export default async function ImageGallery () {
  const data = await getArt();
  
  return (
   <section>
    Image Gallery
    {data && data.records.map((obj, index) => {
      console.log("obj", obj)
      return (
        <div key={index}>
          <img src={obj.primaryimageurl} alt={"text"} width={300} height={300}/>
        </div>
      )
    })}
   </section>
  )
}