import Image from "next/image";
import { getCarts } from "../../carts/page";
import Link from "next/link";

async function ProductPage({ params: { id } }: { params: { id: number } }) {
  const { carts } = await getCarts();

  return (
    <div className="">
      <div className="flex gap-9 justify-evenly">
        {/* <Link href={`../carts`}>All Carts</Link> */}
        <h1 className="flex text-4xl justify-center">{/* Product {id} */}</h1>
      </div>
      <div className="md:w-2/3 pt-10 md:pt-28 mx-auto grid grid-cols-1 gap-48">
        {carts.map((cart) =>
          cart.products.map(
            (product) =>
              product.id == id && (
                <div key={product.id} className="grid md:grid-cols-2 gap-4">
                  <div className="mx-auto">
                    <h2 className="flex justify-center pl-5  mb-10 md:mb-44 text-3xl  text-amber-400 ">
                      {product.title}
                    </h2>
                    <div className="flex flex-col text-xl max-w-max mx-auto gap-5 items-end">
                      <h3 className="">price: ${product.price}</h3>
                      <h3 className="">quantity: {product.quantity}</h3>
                      <h3 className="">total: ${product.total}</h3>
                      <h3 className="">
                        discount: {product.discountPercentage}%
                      </h3>
                      <h3 className="text-green-600">
                        discounted Price: ${product.discountedPrice}
                      </h3>
                    </div>
                  </div>
                  <div className="mx-auto px-4">
                    <Image
                      src={product.thumbnail}
                      alt={product.title}
                      width={600}
                      height={600}
                      className=" w-[400px]  md:w-[600px]"
                    />
                  </div>
                </div>
              )
          )
        )}
      </div>
    </div>
  );
}

export default ProductPage;
