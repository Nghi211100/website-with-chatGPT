import Product, { iProduct } from "./Product";

export default function Products({ products }: { products?: iProduct[] }) {
  return (
    <div className="py-6 md:pt-16 md:pb-8 px-4 sm:px-6">
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
