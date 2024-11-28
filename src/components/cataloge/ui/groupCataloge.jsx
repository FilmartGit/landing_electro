import Card from "./card";

export default function GroupCataloge({data}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 lg:gap-3 sm:gap-2 gap-2 mt-10 px-2 sm:px-0">
      {data.map((card) => (
        <Card key={card.id} title={card.title} img={card.img} width={card.width} height={card.height} />
      ))}
    </div>
  );
}
