import React from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";

interface SpecialProductProps {
  discount: number;
  imageUrl: string;
  title: string;
  subtitle: string;
  price1: number;
  price2: number;
  volume1: number;
  volume2: number;
  textAboutPrice: string;
}

export default function SpecialProduct({
  discount,
  imageUrl,
  title,
  subtitle,
  price1,
  price2,
  volume1,
  volume2,
  textAboutPrice,
}: SpecialProductProps) {
  return (
    <div className="relative flex flex-col">
      <div className="absolute text-white font-semibold text-xl bg-[#762580] rounded-lg px-2 py-1 tracking-tighter -left-3 top-3">
        -{discount}%
      </div>

      <img className="" src={imageUrl} height={600} width={400} />

      <div className="self-center text-center max-w-full break-words mt-3">
        <h3 className="text-xl tracking-normal break-words">{title}</h3>
        <h3 className="text-base break-words tracking-normal">{subtitle}</h3>

        <div className="flex flex-row justify-evenly">
          <div className="flex flex-col-reverse justify-center mt-2 text-xl ">
            <p className="text-base">
              {price1} <span>лв./ {volume1} ML</span>
            </p>
            <p className="line-through text-base">
              {price1 * (1 + discount / 100)} <span>лв./ {volume1} ML</span>
            </p>
          </div>

          <div className="flex flex-col-reverse justify-center mt-2 text-xl">
            <p className="text-base">
              {price2} <span>лв./ {volume2} ML</span>
            </p>
            <p className="line-through text-base">
              {price2 * (1 + discount / 100)} <span>лв./ {volume2} ML</span>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-2 text-xs text-center flex flex-row gap-1 self-center">
        <BsFillInfoCircleFill className="self-center" />
        <p className="">{textAboutPrice}</p>
      </div>
      <div className="flex flex-row justify-evenly w-full">
        <button className="text-xl p-2 px-10 bg-gray-500 text-white mt-2 hover:bg-gray-600">
          ДОБАВИ
        </button>
        <button className="text-xl p-2 px-10 bg-gray-500 text-white mt-2 hover:bg-gray-600">
          ДОБАВИ
        </button>
      </div>
    </div>
  );
}
