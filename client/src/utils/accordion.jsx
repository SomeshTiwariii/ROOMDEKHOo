import { HiShieldCheck } from "react-icons/hi";
import { MdCancel, MdAnalytics } from "react-icons/md";

const data = [
  {
    icon: <HiShieldCheck className="text-blue-500" />,
    heading: "Verified Listings",
    detail:
      "Every property on RoomDekho goes through checks to ensure reliability, so you can search with confidence knowing the options are real and trustworthy.",
  },
  {
    icon: <MdCancel className="text-red-500" />,
    heading: "No Broker Hassles",
    detail:
      "Say goodbye to hidden charges and unreliable middlemen. With RoomDekho, you deal directly and transparently, saving time and money.",
  },
  {
    icon: <MdAnalytics className="text-green-500" />,
    heading: "Best Deals",
    detail:
      "Our platform helps you compare options quickly and find the right room or flat at the price that suits your budget without compromise.",
  },
];

export default data;
