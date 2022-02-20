interface ProdcutItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  };
}

export function ProductItem({ product }: ProdcutItemProps) {
  return (
    <div>
      {product.title} - <strong>R${product.price},00</strong>
    </div>
  );
}
