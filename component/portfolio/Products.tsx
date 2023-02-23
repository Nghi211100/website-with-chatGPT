import Product, { iProduct } from "./Product";

export default function Products({ products }: { products?: iProduct[] }) {
  return (
    <div className="pt-6 pb-16 md:py-16 px-4 sm:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-6 xl:grid-cols-3">
        {products?.map((product: any, index: any) => (
          <div key={index} className="group relative">
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
