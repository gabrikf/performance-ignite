export interface AddProductToWishListProps {
  onAddToWishList: () => void;
  onRequestClose: () => void;
}

export function AddProductToWishList({
  onAddToWishList,
  onRequestClose,
}: AddProductToWishListProps) {
  return (
    <div>
      <span>deseja adcionar aos favoritos?</span>
      <button onClick={onAddToWishList} type="button">
        Salvar
      </button>
      <button onClick={onRequestClose} type="button">
        Cancelar
      </button>
    </div>
  );
}
