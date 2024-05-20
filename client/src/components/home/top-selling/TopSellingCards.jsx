import TopSellingCard from "./TopSellingCard";

export default function TopSellingCards() {
  return (
    <div className="flex flex-wrap mt-10 gap-5">
      <TopSellingCard
        img="/img/p4.png"
        title="Product 1"
        price="100"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati harum deserunt voluptatum maiores quae excepturi numquam molestias, natus reprehenderit recusandae."
      />

      <TopSellingCard
        img="/img/p5.png"
        title="Product 1"
        price="100"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati harum deserunt voluptatum maiores quae excepturi numquam molestias, natus reprehenderit recusandae."
      />
      <TopSellingCard
        img="/img/p1.png"
        title="Product 1"
        price="100"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati harum deserunt voluptatum maiores quae excepturi numquam molestias, natus reprehenderit recusandae."
      />

      <TopSellingCard
        img="/img/p2.png"
        title="Product 1"
        price="100"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati harum deserunt voluptatum maiores quae excepturi numquam molestias, natus reprehenderit recusandae."
      />
    </div>
  );
}
