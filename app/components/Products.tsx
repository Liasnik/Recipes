import Image from "next/image";
import { Products } from "../(pages)/carts/page";

function ProductItem(products: { products: Products[] }) {
  return (
    <div className="grid grid-cols-2">
      {products &&
        products.products.map((product) => (
          <div key={product.id} className="mb-8 mx-auto">
            <h2 className="mb-5">{product.title}</h2>
            <div className=" max-w-fit mx-auto">
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={150}
                height={150}
              />
            </div>
          </div>
        ))}
    </div>
  );
}

export default ProductItem;
