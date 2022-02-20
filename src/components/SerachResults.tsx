import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
}

export function SearchREsults({ results }: SearchResultsProps) {
  return (
    <div>
      {results.map((item) => (
        <ProductItem key={item.id} product={item} />
      ))}
    </div>
  );
}
