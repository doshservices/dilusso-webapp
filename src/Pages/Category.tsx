import { Link } from "react-router-dom";
import { useGetProducts } from "../ApiCalls/getProducts";
import shirt from "../assets/t-shirt.png";
import formatPrice from "../functions/FormatPrice";

interface ProductsState {
  _id: string | null;
  name: string;
  brand_name: {
    name: string;
  } | null;
  price: string | null;
  description: string | null;
  image: string[] | null;
}

const Category = () => {
  const { isLoading, error, data: productsData } = useGetProducts();
  const Products = productsData?.data?.data?.availableProducts;
  console.log("products data:", Products);
  console.log("error", error);
  

  return (
    <div className="pt-20 pb-8 sm:pt-36 px-[5%]">
      <div className=" women-placeholder text-center py-5 text-white ">
        <h1 className="text-[3.5rem]  ">MEN'S WEARS</h1>
      </div>

      {isLoading ? (
        <div>Loading</div>
      ) : (
        <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-4 gap-6">
          {Products?.map((product: ProductsState) => (
            <Link to={`/product/details/${product?._id}`} className="p-3" key={product?._id}>
              <div>
                <img
                  src={
                    product?.image && product.image.length > 0
                      ? product.image[0]
                      : shirt
                  }
                  className="w-full h-[15rem] object-contain "
                  alt="Product Image"
                />
              </div>
              <div className="flex pt-2 items-center justify-between">
                <p className="text-sm font-medium text-[#333333]">
                  {product?.name}
                </p>
                <p className="text-sm font-medium text-[#333333]">
                  {formatPrice(product?.price ?? "0")}{" "}
                </p>
              </div>
              <p className="text-[#000000e6] text-sm mt-3">
                {product?.description}
              </p>
            </Link>
          ))}
        </section>
      )}
    </div>
  );
};

export default Category;
