import { useMemo } from "react";
import { ProductItem } from "./ProductItem";
import { AutoSizer, List, ListRowRenderer } from "react-virtualized";

interface SearchResultsProps {
  onadd: (id: number) => void;
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
}

export function SearchREsults({ results, onadd }: SearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((acc, prod) => {
      return acc + prod.price;
    }, 0);
  }, [results]);

  // const totalPrice = results.reduce((acc, prod) => {
  //   return acc + prod.price;
  // }, 0);
  const rowRender: ListRowRenderer = ({ key, index, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem product={results[index]} onadd={onadd} />
      </div>
    );
  };
  return (
    <div>
      <h1>R${totalPrice},00</h1>
      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRender}
      />
      {/* {results.map((item) => (
        <ProductItem onadd={onadd} key={item.id} product={item} />
      ))} */}
    </div>
  );
}
