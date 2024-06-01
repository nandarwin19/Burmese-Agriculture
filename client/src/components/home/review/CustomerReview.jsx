import Title from "../../common/Title";
import ReviewCard from "./ReviewCard";

export default function CustomerReview() {
  return (
    <div className="w-full min-h-screen">
      <div className="pt-20 max-container">
        <Title text="Customer Review" />
        <div className="flex flex-wrap items-center flex-col md:flex-row justify-between mt-10">
          <ReviewCard
            img="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3Jhd3BpeGVsX29mZmljZV8zNl9hX3Bob3RvX29mX2FfcG9ydHJhaXRfb2ZfYV9mYXNoaW9uYWJsZV9zbWlsaV8xYmRlMDQwNy01YTE4LTQ4MTItYmNjOS1lZjBhYWVmMTE3NmZfMS5qcGc.jpg"
            name="Vennly k"
            review=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo atque
          repellat quisquam veniam, ullam quia?"
          />
          <ReviewCard
            img="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3Jhd3BpeGVsX29mZmljZV8zNl9hX3Bob3RvX29mX2FfcG9ydHJhaXRfb2ZfYV9mYXNoaW9uYWJsZV9zbWlsaV8xYmRlMDQwNy01YTE4LTQ4MTItYmNjOS1lZjBhYWVmMTE3NmZfMS5qcGc.jpg"
            name="Vennly k"
            review=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo atque
          repellat quisquam veniam, ullam quia?"
          />
          <ReviewCard
            img="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3Jhd3BpeGVsX29mZmljZV8zNl9hX3Bob3RvX29mX2FfcG9ydHJhaXRfb2ZfYV9mYXNoaW9uYWJsZV9zbWlsaV8xYmRlMDQwNy01YTE4LTQ4MTItYmNjOS1lZjBhYWVmMTE3NmZfMS5qcGc.jpg"
            name="Vennly k"
            review=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo atque
          repellat quisquam veniam, ullam quia?"
          />
          <ReviewCard
            img="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3Jhd3BpeGVsX29mZmljZV8zNl9hX3Bob3RvX29mX2FfcG9ydHJhaXRfb2ZfYV9mYXNoaW9uYWJsZV9zbWlsaV8xYmRlMDQwNy01YTE4LTQ4MTItYmNjOS1lZjBhYWVmMTE3NmZfMS5qcGc.jpg"
            name="Vennly k"
            review=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo atque
          repellat quisquam veniam, ullam quia?"
          />
        </div>
      </div>
    </div>
  );
}
