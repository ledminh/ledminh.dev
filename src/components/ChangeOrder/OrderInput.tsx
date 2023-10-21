import { Order } from "@/types";

type Props = {
  isShown: boolean;
  order: Order[];
  itemID: string;
  onOrderChange: (order: number, itemID: string) => void;
};

export default function OrderInput({
  isShown,
  order,
  itemID,
  onOrderChange,
}: Props) {
  if (!isShown) return null;

  return (
    <input
      type="number"
      value={order.find((order) => order.id === itemID)?.order}
      onChange={(e) => onOrderChange(parseInt(e.target.value), itemID)}
      onClick={(e) => e.preventDefault()}
    />
  );
}
