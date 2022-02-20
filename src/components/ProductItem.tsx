import { memo, useState } from "react";
// import { AddProductToWishList } from "./AddProductToWishList";
import dynamic from "next/dynamic";
import { AddProductToWishListProps } from "./AddProductToWishList";

const AddProductToWishList = dynamic<AddProductToWishListProps>(
  () => {
    return import("./AddProductToWishList").then(
      (mod) => mod.AddProductToWishList
    );
  },
  {
    loading: () => <span>Carregando...</span>,
  }
);
interface ProdcutItemProps {
  onadd: (id: number) => void;
  product: {
    id: number;
    price: number;
    title: string;
  };
}

function ProductItemComponent({ product, onadd }: ProdcutItemProps) {
  const [isAdding, setIsAdding] = useState(false);
  return (
    <div>
      {product.title} - <strong>R${product.price},00</strong>
      <button onClick={() => setIsAdding(true)}>Add</button>
      {isAdding && (
        <AddProductToWishList
          onRequestClose={() => setIsAdding(false)}
          onAddToWishList={() => onadd(product.id)}
        />
      )}
    </div>
  );
}

export const ProductItem = memo(ProductItemComponent, (prevProps, newProps) => {
  return Object.is(prevProps.product, newProps.product);
});
