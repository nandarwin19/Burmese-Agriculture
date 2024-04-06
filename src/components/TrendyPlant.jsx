import Title from "./Title";
import TrendyPlantCard from "./TrendyPlantCard";

export default function TrendyPlant() {
  return (
    <div className="w-full relative min-h-screen max-container">
      <div className="trendy-plant-bg"></div>
      <div className="pt-16 absolute inset-0 w-full h-full">
        <Title text="Our Trendy Plant" />
        <TrendyPlantCard
          image={`/img/p1.png`}
          title="Sansevieria Trifasciata"
          description="The Snake Plant is an easy-to-care-for houseplant with stiff, sword-like leaves that grow upright."
          price="39.99"
        />

        <div className="lg:ml-[50%] w-full">
          <TrendyPlantCard
            image={`/img/p3.png`}
            title="Monstera Deliciosa (Swiss Cheese Plant)"
            description="The Monstera Deliciosa is a popular houseplant with large, glossy, and uniquely perforated leaves. "
            price="59.99"
          />
        </div>
      </div>
    </div>
  );
}
