import Image from "next/image";
import { getCarts } from "../page";
import Link from "next/link";

async function CartPage({ params: { id } }: { params: { id: number } }) {
  const { carts } = await getCarts();

  return (
    <div className="pt-8">
      <div className="flex gap-9 text-4xl justify-evenly">
        <h1 className="flex text-4xl justify-center">Cart {id}</h1>
        <div className="">
          <p className="text-xl text-gray-300 pb-4">total: {carts[id].total}</p>
          <h2 className="text-base text-gray-300 pb-4">
            discounted Total: {carts[id].discountedTotal}
          </h2>
          <h2 className="text-base text-gray-300 pb-4">
            total Quantity: {carts[id].totalQuantity}
          </h2>
        </div>
      </div>
      <div className="md:w-2/3 pt-5 md:pt-20 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {carts[id]?.products.map((product) => (
          <div key={product.id} className="flex flex-col gap-4 px-5">
            <Link href={`../product/${product.id}`}>
              <h2 className="text-amber-400 text-lg flex justify-center">
                {product.title}
              </h2>
              <h3 className="mx-auto mb-2 pl-20 md:pl-0">
                price: ${product.price}
              </h3>
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={300}
                height={300}
                className="mx-auto"
              />
            </Link>

            {/* <Product /> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartPage;
