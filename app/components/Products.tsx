import Image from "next/image";
import { Products } from "../types";

function ProductItem(products: { products: Products[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
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
                className="w-[300px] md:w-[150px]"
              />
            </div>
          </div>
        ))}
    </div>
  );
}

export default ProductItem;
