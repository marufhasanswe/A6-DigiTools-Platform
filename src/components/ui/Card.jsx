import React from "react";
import { toast } from "react-toastify";

const Card = ({ cards, cart, setCart }) => {
  const handleBuyNow = (card) => {
    setCart([...cart, card]);
    toast.success("Successfully added to cart!");
  };
  return (
    <div className="grid md:grid-cols-3 gap-7">
      {cards.map((card) => (
        <div key={card.id} className="card w-full bg-base-100 shadow-sm ">
          <div className="card-body relative shadow space-y-2">
            <span
              className={`badge badge-xs ${card.tag === "new" ? "badge-success" : card.tag === "popular" ? "badge-info" : "badge-warning"} text-right absolute top-2 right-2 flex items-center`}
            >
              {card.tag.toUpperCase()}
            </span>
            <img src={card.icon} alt="" className="w-9 h-9 " />
            <h2 className="text-3xl font-bold">{card.name}</h2>

            <p className="text-[#627382FF]">{card.description}</p>
            <h3 className="text-2xl font-semibold ">
              ${card.price}
              <span className="text-sm text-[#627382FF] font-medium">
                /
                {card.period === "one-time"
                  ? "One-Time"
                  : card.period === "monthly"
                    ? "Mo"
                    : "Yearly"}
              </span>
            </h3>
            <ul className=" flex flex-col gap-2 text-xs">
              {card.features.map((feature, i) => (
                <li key={i}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-[#627382FF]">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <button
                type="button"
                className="btn btn-primary btn-block rounded-full"
                onClick={() => handleBuyNow(card)}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
