import Card from "./card";

export default function GroupCataloge({data}) {
  return (
    <div className="grid grid-cols-4 gap-3 mt-10">
      {data.map((card) => (
        <Card key={card.id} title={card.title} img={card.img} width={card.width} height={card.height} />
      ))}
    </div>
  );
}
