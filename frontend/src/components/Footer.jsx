import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.vastrika} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Celebrating Indian trends with a modern touch – shop the looks
            you’ll love. From timeless ethnic wear to contemporary western
            styles, we bring you a carefully curated collection designed for
            every occasion. Quality fabrics, latest designs, and affordable
            fashion – because your style deserves nothing less.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <i class="fa-solid fa-house"></i>Home
            </li>
            <li>
              {" "}
              <i class="fa-solid fa-user"></i>About us
            </li>
            <li>
              <i class="fa-solid fa-truck"></i>Delivery
            </li>
            <li>
              {" "}
              <i class="fa-solid fa-copyright"></i>Privacy policy
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              {" "}
              <i class="fa-solid fa-phone"></i> 8871807465
            </li>
            <li>
              {" "}
              <i class="fa-solid fa-square-envelope"></i>Arshitjain7@gmail.com
            </li>
            <li>
              <a
                href="https://www.instagram.com/Arshitjain_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-instagram"></i> Arshitjain
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025 vastrika@gmail.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
