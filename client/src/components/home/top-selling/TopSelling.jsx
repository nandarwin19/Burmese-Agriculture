import Title from "../../common/Title";
import TopSellingCards from "./TopSellingCards";

export default function TopSelling() {
  return (
    <div className="h-full py-20 lg:py-24">
      <div className="max-container pt-20">
        <Title text="Our Top Selling" />
        <TopSellingCards />
      </div>
    </div>
  );
}
