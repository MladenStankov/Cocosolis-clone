import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { FaCartShopping, FaPaw, FaRegUser } from "react-icons/fa6";
import Product from "./components/Product";
import SpecialProduct from "./components/SpecialProduct";
import { FaStar } from "react-icons/fa6";

import { FaLeaf } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import SectionsNav from "./components/SectionsNav";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 bg-white shadow-md flex flex-col divide-y-2">
        <nav className="text-zinc-600">
          <ul className="flex flex-row gap-10 px-20 justify-center">
            <li>
              <Link href="#">
                <img
                  src="https://cocosolis.com/wp-content/uploads/cocosolis-logo.svg"
                  className="h-[100px] w-[200px]"
                />
              </Link>
            </li>
            <div className="flex flex-row gap-10 m-10">
              <li>
                <Link href="#" className="hover:text-amber-200">
                  НАЧАЛО
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-200">
                  ПРОДУКТИ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-200">
                  CLUB
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-200">
                  ЗА НАС
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-200">
                  КОНТАКТИ
                </Link>
              </li>
              <li>
                <RxHamburgerMenu size={30} />
              </li>
              <li>
                <CiSearch size={25} className="hover:cursor-pointer" />
              </li>
              <li className="relative hover:cursor-pointer">
                <FaCartShopping className="absolute" size={25} />
                <div className="absolute w-4 text-xs text-center h-4 bg-red-400 rounded-full text-white items-center left-3 -top-2">
                  0
                </div>
              </li>
              <li>
                <div className="flex flex-row">
                  <FaRegUser size={20} />
                  <p className="hover:text-amber-200 ml-2 -mb-1">
                    ВЛЕЗ В ПРОФИЛ
                  </p>
                </div>
              </li>
            </div>
          </ul>
        </nav>
        <SectionsNav />
      </header>

      <section className="bg-orange-100 p-10 justify-center flex flex-col gap-5 py-40">
        <div className="flex gap-2 justify-center">
          <div className="text-orange-100 bg-[#762580] text-center content-center text-8xl p-5 min-w-32">
            B
          </div>
          <div className="text-orange-100 bg-[#762580] text-center content-center text-8xl p-5 min-w-32">
            U
          </div>
          <div className="text-orange-100 bg-[#762580] text-center content-center text-8xl p-5 min-w-32">
            N
          </div>
          <div className="text-orange-100 bg-[#762580] text-center content-center text-8xl p-5 min-w-32">
            D
          </div>
          <div className="text-orange-100 bg-[#762580] text-center content-center text-8xl p-5 min-w-32">
            L
          </div>
          <div className="text-orange-100 bg-[#762580] text-center content-center text-8xl p-5 min-w-32">
            E
          </div>
        </div>

        <h2 className="text-center text-[#762580] font-semibold text-6xl tracking-widest">
          BLACK FRIDAY
        </h2>
        <button className="bg-[#762580] text-white text-3xl py-2 w-1/4 self-center">
          ПАЗАРУВАЙ
        </button>
      </section>
      <div className="bg-[#762580] text-white text-center font-light py-1">
        * Промоцията е валидна до изчерпване на количествата.
        <span className="underline text-white">
          Запознай се с пълните условия.
        </span>
      </div>

      <section id="ПРОМО" className="bg-amber-50 text-slate-600 pb-10">
        <h2 className="text-center py-10 tracking-widest text-5xl">
          ПРОМО ПАКЕТИ
        </h2>
        <div className="flex flex-wrap mx-10 gap-5 justify-center">
          <Product
            discount={20}
            imageUrl="https://placehold.co/600x400"
            title="DREAM HAIR"
            subtitle="Трансформирайте косата си натурално"
            price={83.2}
            textAboutPrice=" Най-ниска цена за последните 30 дни: 104,00 лв."
          />
          <Product
            discount={20}
            imageUrl="https://placehold.co/600x400"
            title="DREAM HAIR"
            subtitle="Трансформирайте косата си натурално"
            price={83.2}
            textAboutPrice=" Най-ниска цена за последните 30 дни: 104,00 лв."
          />
          <Product
            discount={20}
            imageUrl="https://placehold.co/600x400"
            title="DREAM HAIR"
            subtitle="Трансформирайте косата си натурално"
            price={83.2}
            textAboutPrice=" Най-ниска цена за последните 30 дни: 104,00 лв."
          />
          <Product
            discount={20}
            imageUrl="https://placehold.co/600x400"
            title="DREAM HAIR"
            subtitle="Трансформирайте косата си натурално"
            price={83.2}
            textAboutPrice=" Най-ниска цена за последните 30 дни: 104,00 лв."
          />
          <Product
            discount={20}
            imageUrl="https://placehold.co/600x400"
            title="DREAM HAIR"
            subtitle="Трансформирайте косата си натурално"
            price={83.2}
            textAboutPrice=" Най-ниска цена за последните 30 дни: 104,00 лв."
          />
          <Product
            discount={20}
            imageUrl="https://placehold.co/600x400"
            title="DREAM HAIR"
            subtitle="Трансформирайте косата си натурално"
            price={83.2}
            textAboutPrice=" Най-ниска цена за последните 30 дни: 104,00 лв."
          />
        </div>
        <p className="text-center underline mt-5">РАЗГЛЕДАЙ ОЩЕ</p>
      </section>

      <section id="КОСА" className="my-16">
        <div className="text-center pb-16">
          <h2 className="text-5xl">КОСА</h2>
          <h3>Натурални продукти за силна, гъста и бляскава коса</h3>
        </div>

        <div className="flex flex-wrap mx-10 gap-5 justify-center">
          <Product
            discount={20}
            imageUrl="https://placehold.co/600x400"
            title="DREAM HAIR"
            subtitle="Трансформирайте косата си натурално"
            price={83.2}
            textAboutPrice=" Най-ниска цена за последните 30 дни: 104,00 лв."
          />
          <Product
            discount={20}
            imageUrl="https://placehold.co/600x400"
            title="DREAM HAIR"
            subtitle="Трансформирайте косата си натурално"
            price={83.2}
            textAboutPrice=" Най-ниска цена за последните 30 дни: 104,00 лв."
          />
        </div>
      </section>

      <div className="w-full flex h-[50px] bg-slate-400"></div>

      <section id="КОЖА" className="my-16 justify-center flex flex-col">
        <div className="text-center pb-16">
          <h2 className="text-5xl">КОЖА</h2>
          <h3>Серията SKIN за перфектна кожа, без несъвършенства.</h3>
        </div>

        <div className="flex flex-wrap mx-10 gap-5 ml-32">
          <SpecialProduct
            discount={20}
            imageUrl="https://placehold.co/600x400"
            title="Special HAIR"
            subtitle="Трансформирайте косата си натурално"
            price1={83.2}
            price2={100}
            volume1={110}
            volume2={200}
            textAboutPrice=" Най-ниска цена за последните 30 дни: 104,00 лв."
          />
          <Product
            discount={20}
            imageUrl="https://placehold.co/600x400"
            title="DREAM HAIR"
            subtitle="Трансформирайте косата си натурално"
            price={83.2}
            textAboutPrice=" Най-ниска цена за последните 30 дни: 104,00 лв."
          />
          <Product
            discount={20}
            imageUrl="https://placehold.co/600x400"
            title="DREAM HAIR"
            subtitle="Трансформирайте косата си натурално"
            price={83.2}
            textAboutPrice=" Най-ниска цена за последните 30 дни: 104,00 лв."
          />
          <Product
            discount={20}
            imageUrl="https://placehold.co/600x400"
            title="DREAM HAIR"
            subtitle="Трансформирайте косата си натурално"
            price={83.2}
            textAboutPrice=" Най-ниска цена за последните 30 дни: 104,00 лв."
          />
        </div>
      </section>

      <section
        id="ЛИЦЕ"
        className="my-16 justify-center flex flex-col bg-orange-100 py-10"
      >
        <div className="text-center pb-16">
          <h2 className="text-5xl mt-5">ЛИЦЕ</h2>
          <h3>
            Високоефективни натурални продукти за подмладена и сияйна кожа
          </h3>
        </div>

        <div className="flex flex-wrap mt-10 gap-5 ml-32">
          <Product
            discount={20}
            imageUrl="https://placehold.co/600x400"
            title="DREAM HAIR"
            subtitle="Трансформирайте косата си натурално"
            price={83.2}
            textAboutPrice=" Най-ниска цена за последните 30 дни: 104,00 лв."
          />
          <Product
            discount={20}
            imageUrl="https://placehold.co/600x400"
            title="DREAM HAIR"
            subtitle="Трансформирайте косата си натурално"
            price={83.2}
            textAboutPrice=" Най-ниска цена за последните 30 дни: 104,00 лв."
          />
          <Product
            discount={20}
            imageUrl="https://placehold.co/600x400"
            title="DREAM HAIR"
            subtitle="Трансформирайте косата си натурално"
            price={83.2}
            textAboutPrice=" Най-ниска цена за последните 30 дни: 104,00 лв."
          />
          <Product
            discount={20}
            imageUrl="https://placehold.co/600x400"
            title="DREAM HAIR"
            subtitle="Трансформирайте косата си натурално"
            price={83.2}
            textAboutPrice=" Най-ниска цена за последните 30 дни: 104,00 лв."
          />
          <Product
            discount={20}
            imageUrl="https://placehold.co/600x400"
            title="DREAM HAIR"
            subtitle="Трансформирайте косата си натурално"
            price={83.2}
            textAboutPrice=" Най-ниска цена за последните 30 дни: 104,00 лв."
          />
          <img src="https://placehold.co/400x500" className="h-full" />
        </div>
      </section>

      <section id="АВТОБРОНЗАНТИ" className="my-16 py-10">
        <div className="text-center pb-16">
          <h2 className="text-5xl">АВТОБРОНЗАНТИ</h2>
          <h3>
            За перфектен тен, без да е необходимо слънце. Постигнете естествено
            изглеждащ, равномерен, наситен, бронзов тен.
          </h3>
        </div>

        <div className="flex flex-wrap mx-10 gap-5 justify-center">
          <Product
            discount={20}
            imageUrl="https://placehold.co/600x400"
            title="DREAM HAIR"
            subtitle="Трансформирайте косата си натурално"
            price={83.2}
            textAboutPrice=" Най-ниска цена за последните 30 дни: 104,00 лв."
          />
          <Product
            discount={20}
            imageUrl="https://placehold.co/600x400"
            title="DREAM HAIR"
            subtitle="Трансформирайте косата си натурално"
            price={83.2}
            textAboutPrice=" Най-ниска цена за последните 30 дни: 104,00 лв."
          />
          <Product
            discount={20}
            imageUrl="https://placehold.co/600x400"
            title="DREAM HAIR"
            subtitle="Трансформирайте косата си натурално"
            price={83.2}
            textAboutPrice=" Най-ниска цена за последните 30 дни: 104,00 лв."
          />
          <Product
            discount={20}
            imageUrl="https://placehold.co/600x400"
            title="DREAM HAIR"
            subtitle="Трансформирайте косата си натурално"
            price={83.2}
            textAboutPrice=" Най-ниска цена за последните 30 дни: 104,00 лв."
          />
          <Product
            discount={20}
            imageUrl="https://placehold.co/600x400"
            title="DREAM HAIR"
            subtitle="Трансформирайте косата си натурално"
            price={83.2}
            textAboutPrice=" Най-ниска цена за последните 30 дни: 104,00 лв."
          />
          <Product
            discount={20}
            imageUrl="https://placehold.co/600x400"
            title="DREAM HAIR"
            subtitle="Трансформирайте косата си натурално"
            price={83.2}
            textAboutPrice=" Най-ниска цена за последните 30 дни: 104,00 лв."
          />
          <Product
            discount={20}
            imageUrl="https://placehold.co/600x400"
            title="DREAM HAIR"
            subtitle="Трансформирайте косата си натурално"
            price={83.2}
            textAboutPrice=" Най-ниска цена за последните 30 дни: 104,00 лв."
          />
          <Product
            discount={20}
            imageUrl="https://placehold.co/600x400"
            title="DREAM HAIR"
            subtitle="Трансформирайте косата си натурално"
            price={83.2}
            textAboutPrice=" Най-ниска цена за последните 30 дни: 104,00 лв."
          />
        </div>
      </section>

      <section id="ТЕН" className="my-16 bg-orange-100 py-10">
        <div className="text-center pb-16">
          <h2 className="text-5xl">ТЕН</h2>
          <h3>Натурални, био масла за супер тен и сияйна кожа</h3>
        </div>

        <div className="flex flex-wrap mx-10 gap-5 justify-center">
          <Product
            discount={20}
            imageUrl="https://placehold.co/600x400"
            title="DREAM HAIR"
            subtitle="Трансформирайте косата си натурално"
            price={83.2}
            textAboutPrice=" Най-ниска цена за последните 30 дни: 104,00 лв."
          />
          <SpecialProduct
            discount={20}
            imageUrl="https://placehold.co/600x400"
            title="Special HAIR"
            subtitle="Трансформирайте косата си натурално"
            price1={83.2}
            price2={100}
            volume1={110}
            volume2={200}
            textAboutPrice=" Най-ниска цена за последните 30 дни: 104,00 лв."
          />
          <SpecialProduct
            discount={20}
            imageUrl="https://placehold.co/600x400"
            title="Special HAIR"
            subtitle="Трансформирайте косата си натурално"
            price1={83.2}
            price2={100}
            volume1={110}
            volume2={200}
            textAboutPrice=" Най-ниска цена за последните 30 дни: 104,00 лв."
          />
          <SpecialProduct
            discount={20}
            imageUrl="https://placehold.co/600x400"
            title="Special HAIR"
            subtitle="Трансформирайте косата си натурално"
            price1={83.2}
            price2={100}
            volume1={110}
            volume2={200}
            textAboutPrice=" Най-ниска цена за последните 30 дни: 104,00 лв."
          />
          <SpecialProduct
            discount={20}
            imageUrl="https://placehold.co/600x400"
            title="Special HAIR"
            subtitle="Трансформирайте косата си натурално"
            price1={83.2}
            price2={100}
            volume1={110}
            volume2={200}
            textAboutPrice=" Най-ниска цена за последните 30 дни: 104,00 лв."
          />
          <SpecialProduct
            discount={20}
            imageUrl="https://placehold.co/600x400"
            title="Special HAIR"
            subtitle="Трансформирайте косата си натурално"
            price1={83.2}
            price2={100}
            volume1={110}
            volume2={200}
            textAboutPrice=" Най-ниска цена за последните 30 дни: 104,00 лв."
          />
          <SpecialProduct
            discount={20}
            imageUrl="https://placehold.co/600x400"
            title="Special HAIR"
            subtitle="Трансформирайте косата си натурално"
            price1={83.2}
            price2={100}
            volume1={110}
            volume2={200}
            textAboutPrice=" Най-ниска цена за последните 30 дни: 104,00 лв."
          />
          <SpecialProduct
            discount={20}
            imageUrl="https://placehold.co/600x400"
            title="Special HAIR"
            subtitle="Трансформирайте косата си натурално"
            price1={83.2}
            price2={100}
            volume1={110}
            volume2={200}
            textAboutPrice=" Най-ниска цена за последните 30 дни: 104,00 лв."
          />
          <Product
            discount={20}
            imageUrl="https://placehold.co/600x400"
            title="DREAM HAIR"
            subtitle="Трансформирайте косата си натурално"
            price={83.2}
            textAboutPrice=" Най-ниска цена за последните 30 дни: 104,00 лв."
          />
        </div>
      </section>

      <section id="БЛЯСЪК" className="my-16">
        <div className="text-center pb-16">
          <h2 className="text-5xl">БЛЯСЪК</h2>
          <h3>Натурални продукти за елегантен блясък и грижа за кожата</h3>
        </div>

        <div className="flex flex-wrap mx-10 gap-5 justify-center">
          <Product
            discount={20}
            imageUrl="https://placehold.co/600x400"
            title="DREAM HAIR"
            subtitle="Трансформирайте косата си натурално"
            price={83.2}
            textAboutPrice=" Най-ниска цена за последните 30 дни: 104,00 лв."
          />
          <Product
            discount={20}
            imageUrl="https://placehold.co/600x400"
            title="DREAM HAIR"
            subtitle="Трансформирайте косата си натурално"
            price={83.2}
            textAboutPrice=" Най-ниска цена за последните 30 дни: 104,00 лв."
          />
          <Product
            discount={20}
            imageUrl="https://placehold.co/600x400"
            title="DREAM HAIR"
            subtitle="Трансформирайте косата си натурално"
            price={83.2}
            textAboutPrice=" Най-ниска цена за последните 30 дни: 104,00 лв."
          />
        </div>
      </section>

      <section id="SPF" className="mt-16 bg-orange-100 py-10">
        <div className="text-center pb-16">
          <h2 className="text-5xl">SPF</h2>
          <h3>Натурални, био слънцезащитни лосиони</h3>
        </div>

        <div className="flex flex-wrap mx-10 gap-5 justify-center">
          <Product
            discount={20}
            imageUrl="https://placehold.co/600x400"
            title="DREAM HAIR"
            subtitle="Трансформирайте косата си натурално"
            price={83.2}
            textAboutPrice=" Най-ниска цена за последните 30 дни: 104,00 лв."
          />
          <Product
            discount={20}
            imageUrl="https://placehold.co/600x400"
            title="DREAM HAIR"
            subtitle="Трансформирайте косата си натурално"
            price={83.2}
            textAboutPrice=" Най-ниска цена за последните 30 дни: 104,00 лв."
          />
        </div>
      </section>

      <section className="flex flex-row bg-orange-50">
        <div className="ml-24 flex flex-col gap-5 w-1/2 self-center">
          <div className="flex flex-row gap-4">
            <div className="flex bg-gray-200 rounded-full justify-center px-4 border-white border-2">
              <FaLeaf size={50} className="self-center" />
            </div>
            <div>
              <h2 className="text-2xl">Натурални и Био</h2>
              <h3>
                Продуктите на COCOSОLIS са винаги натурални и създадени само с
                най-висококачествени био, студено пресовани масла.
              </h3>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex bg-gray-200 rounded-full justify-center px-4 border-white border-2">
              <CiHeart size={50} className="self-center" />
            </div>
            <div>
              <h2 className="text-2xl">Създадени с любов</h2>
              <h3>
                Създадени с любов и уважение към хората и природата. Нежни към
                кожата. Притежаващи аромат, в който ще се влюбите
              </h3>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex bg-gray-200 rounded-full justify-center px-4 border-white border-2">
              <FaPaw size={50} className="self-center" />
            </div>
            <div>
              <h2 className="text-2xl">С отношение</h2>
              <h3>
                Без наличие на парабени, оцветители, минерални и синтетични
                масла и разбира се, без тестване върху животни.
              </h3>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img src="https://placehold.co/800x500" />
        </div>
      </section>

      <section className="flex flex-col bg-slate-400 text py-10 px-48">
        <h2 className="text-white text-2xl">
          Нека бъдем приятели! Абонирайте се, за да бъдете сред първите, които
          ще научат за нашите нови продукти и промоции:
        </h2>
        <input
          type="email"
          placeholder="твоят имейл адрес"
          className="w-full p-2 py-4"
        />
        <p className="text-white text-sm italic">
          Моля, поставете отметка в квадратчето по-долу, за да можете да се
          присъедините.
        </p>
        <div className="flex flex-row gap-2 text-white text-sm mt-2">
          <input type="checkbox" className="size-6" />
          <p>
            Съгласен/на съм предоставеният от мен имейл да бъде използван, за да
            получавам известия за новости, подаръци и бъдещи промоции, свързан с
            продуктите COCOSOLIS, съгласно{" "}
            <span className="underline">
              Общите условия за ползване на сайта
            </span>{" "}
            и <span className="underline">Политика за личните данни.*</span>
          </p>
        </div>
        <button className="text-white text-xl mt-5 bg-orange-400 py-2 font-semibold hover:bg-orange-500">
          ВЛЕЗ В КЛУБА
        </button>
      </section>

      <section className="flex flex-col mx-36 py-20 gap-5">
        <h2 className="text-5xl mb-2">ПОТРЕБИТЕЛСКИ ОТЗИВИ</h2>
        <p className="text-xl">
          18 369 мнения, от които 2 299 от български клиенти
        </p>

        <div className="flex flex-row justify-between ">
          <div className="flex flex-row mt-5">
            <div className="size-12 text-white bg-slate-400 text-center rounded-full flex justify-center items-center">
              ДД
            </div>
            <div className="flex flex-col ml-5">
              <div className="flex flex-row gap-2">
                <p>Даниела Д.</p>
                <p className="font-light  text-sm">потвърдена поръчка</p>
              </div>
              <div className="flex flex-row text-yellow-400">
                <FaStar size={15} />
                <FaStar size={15} />
                <FaStar size={15} />
                <FaStar size={15} />
                <FaStar size={15} />
              </div>
              <p className="mt-3">Cocosolis</p>
              <p className="font-light">
                Копринено нежни масла за кожата. Ароматите са превъзходни.
              </p>
              <img src="https://placehold.co/100x100" className="w-1/5" />
              <div className="flex flex-row gap-2">
                <p className="font-thin">Mнението е за продукт</p>
                <span className="underline">WATERMELON Suntan & Body Oil</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between font-thin">
            <p className="justify-self-end text-end">08.07.2024</p>
            <div className="flex flex-row gap-1">
              <p>Това мнение беше ли полезно за Вас?</p>
              <AiFillLike className="text-rose-300 self-center" />
              <p>0</p>
              <AiFillDislike className="text-rose-300 self-center" />
              <p>0</p>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between ">
          <div className="flex flex-row mt-5">
            <div className="size-12 text-white bg-slate-400 text-center rounded-full flex justify-center items-center">
              ДД
            </div>
            <div className="flex flex-col ml-5">
              <div className="flex flex-row gap-2">
                <p>Даниела Д.</p>
                <p className="font-light  text-sm">потвърдена поръчка</p>
              </div>
              <div className="flex flex-row text-yellow-400">
                <FaStar size={15} />
                <FaStar size={15} />
                <FaStar size={15} />
                <FaStar size={15} />
                <FaStar size={15} />
              </div>
              <p className="mt-3">Cocosolis</p>
              <p className="font-light">
                Копринено нежни масла за кожата. Ароматите са превъзходни.
              </p>
              <img src="https://placehold.co/100x100" className="w-1/5" />
              <div className="flex flex-row gap-2">
                <p className="font-thin">Mнението е за продукт</p>
                <span className="underline">WATERMELON Suntan & Body Oil</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between font-thin">
            <p className="justify-self-end text-end">08.07.2024</p>
            <div className="flex flex-row gap-1">
              <p>Това мнение беше ли полезно за Вас?</p>
              <AiFillLike className="text-rose-300 self-center" />
              <p>0</p>
              <AiFillDislike className="text-rose-300 self-center" />
              <p>0</p>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between ">
          <div className="flex flex-row mt-5">
            <div className="size-12 text-white bg-slate-400 text-center rounded-full flex justify-center items-center">
              ДД
            </div>
            <div className="flex flex-col ml-5">
              <div className="flex flex-row gap-2">
                <p>Даниела Д.</p>
                <p className="font-light  text-sm">потвърдена поръчка</p>
              </div>
              <div className="flex flex-row text-yellow-400">
                <FaStar size={15} />
                <FaStar size={15} />
                <FaStar size={15} />
                <FaStar size={15} />
                <FaStar size={15} />
              </div>
              <p className="mt-3">Cocosolis</p>
              <p className="font-light">
                Копринено нежни масла за кожата. Ароматите са превъзходни.
              </p>
              <img src="https://placehold.co/100x100" className="w-1/5" />
              <div className="flex flex-row gap-2">
                <p className="font-thin">Mнението е за продукт</p>
                <span className="underline">WATERMELON Suntan & Body Oil</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between font-thin">
            <p className="justify-self-end text-end">08.07.2024</p>
            <div className="flex flex-row gap-1">
              <p>Това мнение беше ли полезно за Вас?</p>
              <AiFillLike className="text-rose-300 self-center" />
              <p>0</p>
              <AiFillDislike className="text-rose-300 self-center" />
              <p>0</p>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between ">
          <div className="flex flex-row mt-5">
            <div className="size-12 text-white bg-slate-400 text-center rounded-full flex justify-center items-center">
              ДД
            </div>
            <div className="flex flex-col ml-5">
              <div className="flex flex-row gap-2">
                <p>Даниела Д.</p>
                <p className="font-light  text-sm">потвърдена поръчка</p>
              </div>
              <div className="flex flex-row text-yellow-400">
                <FaStar size={15} />
                <FaStar size={15} />
                <FaStar size={15} />
                <FaStar size={15} />
                <FaStar size={15} />
              </div>
              <p className="mt-3">Cocosolis</p>
              <p className="font-light">
                Копринено нежни масла за кожата. Ароматите са превъзходни.
              </p>
              <img src="https://placehold.co/100x100" className="w-1/5" />
              <div className="flex flex-row gap-2">
                <p className="font-thin">Mнението е за продукт</p>
                <span className="underline">WATERMELON Suntan & Body Oil</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between font-thin">
            <p className="justify-self-end text-end">08.07.2024</p>
            <div className="flex flex-row gap-1">
              <p>Това мнение беше ли полезно за Вас?</p>
              <AiFillLike className="text-rose-300 self-center" />
              <p>0</p>
              <AiFillDislike className="text-rose-300 self-center" />
              <p>0</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
