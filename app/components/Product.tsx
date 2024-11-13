import React from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

interface ProductProps {
  discount: number;
  imageUrl: string;
  title: string;
  subtitle: string;
  price: number;
  textAboutPrice: string;
}

export default function Product({
  discount,
  imageUrl,
  title,
  subtitle,
  price,
  textAboutPrice,
}: ProductProps) {
  return (
    <div className="relative flex flex-col">
      <div className="absolute text-white font-semibold text-xl bg-[#762580] rounded-lg px-2 py-1 tracking-tighter -left-3 top-3">
        -{discount}%
      </div>

      <img className="" src={imageUrl} height={600} width={400} />

      <div className="self-center text-center max-w-full break-words mt-3">
        <h3 className="text-xl tracking-normal break-words">{title}</h3>
        <div className="flex flex-row self-center justify-center items-center">
          <FaStar size={15} className="text-yellow-400" />
          <FaStar size={15} className="text-yellow-400" />
          <FaStar size={15} className="text-yellow-400" />
          <FaStar size={15} className="text-yellow-400" />
          <FaStar size={15} className="text-yellow-400" />
          <p className="font-light ml-2 text-sm">758 мнения</p>
        </div>

        <h3 className="text-base break-words tracking-normal">{subtitle}</h3>

        <div className="flex flex-row justify-center mt-2 text-xl gap-4">
          <p>
            {price} <span>лв.</span>
          </p>
          <p className="line-through">
            {price * (1 + discount / 100)} <span>лв.</span>
          </p>
        </div>
      </div>
      <div className="mt-2 text-xs text-center flex flex-row gap-1 self-center">
        <BsFillInfoCircleFill className="self-center" />
        <p className="">{textAboutPrice}</p>
      </div>
      <button className="text-xl p-2 bg-gray-500 text-white mt-2 hover:bg-gray-600">
        ДОБАВИ
      </button>
    </div>
  );
}
