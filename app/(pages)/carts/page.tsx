import { StaticImport } from "next/dist/shared/lib/get-img-props";
import ProductItem from "../../components/Products";
import { Key, ReactNode } from "react";
import Link from "next/link";
import CircleProgressBar from "@/app/components/CircleProgressBar";
import ReadingProgress from "@/app/components/ReadingProgress";

export interface Product {
  discountPercentage: number;
  discountedPrice: number;
  id: number;
  price: number;
  quantity: number;
  thumbnail: string;
  title: string;
  total: number;
}

export interface Products {
  total: ReactNode;
  discountedPrice: ReactNode;
  discountPercentage: ReactNode;
  quantity: ReactNode;
  price: ReactNode;
  id: Key | null | undefined;
  products: Product[];
  title: string;
  thumbnail: string | StaticImport;
}

interface Cart {
  discountedTotal: number;
  id: number;
  products: Products[];
  total: number;
  totalProducts: number;
  totalQuantity: number;
  userId: number;
}

interface Carts {
  // id: Key | null | undefined;
  // products: Products[];
  // totalQuantity: ReactNode;
  // discountedTotal: ReactNode;
  carts: Cart[];
  total: number;
  limit: number;
  skip: number;
}

export async function getCarts(): Promise<Carts> {
  const res = await fetch("https://dummyjson.com/carts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Carts() {
  const { carts } = await getCarts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="hidden lg:block">
        <CircleProgressBar />
      </div>
      <div className="fixed left-0 lg:hidden">
        <ReadingProgress />
      </div>
      <section className="w-full sm:w-[80%]  grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {carts &&
          carts.map((cart, index) => (
            <div
              key={cart?.id}
              className="p-8 border-[1px] bg-gray-900 rounded-xl border-gray-400 "
            >
              {/* <Link href={`carts/${cart?.id}`}> */}
              <Link href={`carts/${index}`}>
                <p className="text-xl text-gray-300 pb-4">
                  total: {cart.total}
                </p>
                <h2 className="text-base text-gray-300 pb-4">
                  discounted Total: {cart.discountedTotal}
                </h2>
                <h2 className="text-base text-gray-300 pb-4">
                  total Quantity: {cart.totalQuantity}
                </h2>
                <ProductItem products={cart.products} />
              </Link>
            </div>
          ))}
      </section>
    </main>
  );
}
