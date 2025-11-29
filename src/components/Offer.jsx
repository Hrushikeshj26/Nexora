import { Tag, BadgePercent, ShoppingCart } from "lucide-react";

export default function Offers() {
  const offers = [
    {
      id: 1,
      title: "10% OFF on First Purchase",
      code: "FIRST10",
      icon: <BadgePercent className="w-12 h-12" />,
    },
    {
      id: 2,
      title: "Buy 2 Get 1 Free Case ",
      code: "B2G1",
      icon: <Tag className="w-12 h-12" />,
    },
    {
      id: 3,
      title: "Free Delivery on Orders Above 499$",
      code: "FREESHIP",
      icon: <ShoppingCart className="w-12 h-12" />
    },
    {
      id: 4,
      title: "Extra 5% OFF on UPI Payments",
      code: "UPI5",
      icon: <BadgePercent className="w-12 h-12" />,
    },
  ];

  return (
    <div className="w-full bg-(--color-secondary) shadow-sm rounded-2xl p-5 flex flex-col gap-4 text-white">
      <h2 className="text-2xl font-bold">Available Offers</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="flex items-center gap-3 bg-(--color-bg-page) p-3 border-4 border-green-500 rounded-xl hover:shadow-md transition-all cursor-pointer text-black"
          >
            <div className="text-black">{offer.icon}</div>
            <div>
              <p className="font-medium">{offer.title}</p>
              <p className="text-sm text-gray-800">Use Code: {offer.code}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
