import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.admin} alt="" />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Vastrika is a modern fashion brand inspired by the rich heritage of
            India. Our goal is to blend traditional craftsmanship with
            contemporary designs to create clothing and accessories that are
            both stylish and meaningful. At Vastrika, we believe fashion is more
            than just clothing—it’s a way to express individuality, culture, and
            confidence.
          </p>
          <p>
            From carefully curated collections to attention to detail in every
            stitch, Vastrika strives to bring high-quality, sustainable, and
            vibrant fashion to our customers. Our vision is to make every person
            feel empowered and proud of their style, while keeping the spirit of
            Indian artistry alive in the modern world.s.
          </p>
          <b className="text-gray-800">Co-Founder of Vastrika</b>
          <p>
            Vastrika is a celebration of Indian culture blended with modern
            fashion. As the Co-Founder, our mission is to create a brand that
            brings traditional artistry, vibrant designs, and contemporary
            trends together in every outfit. We believe in empowering
            individuals to express their unique style while honoring the rich
            heritage of India. Through Vastrika, we aim to make fashion
            accessible, sustainable, and full of personality—offering
            collections that inspire confidence, creativity, and cultural pride.
          </p>
        </div>
      </div>

      <div className=" text-xl py-4">
        <Title text1={"WHY"} text2={"TRUST US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className=" text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className=" text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className=" text-gray-600">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
