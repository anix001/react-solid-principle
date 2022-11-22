import { Filter, FilteredProducts } from "./Filter";
import { UseProducts } from "./hooks/UseProducts";
import { UseRateFilter } from "./hooks/UseRateFilter";
import { Product } from "./Product";

const GoodApproach = () => {
  const { products } = UseProducts();
  const { filterRate, handleRating } = UseRateFilter();
  return (
    <div className="flex flex-col h-full">
      <Filter filterRate={filterRate as number} handleRating={handleRating} />
      <div className="h-full flex flex-wrap justify-center">
        {FilteredProducts(products, filterRate).map((product: any) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
};

export default GoodApproach;
