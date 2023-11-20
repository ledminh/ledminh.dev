import { Order } from "@/types";

type Props = {
  order: Order[];
  itemID: string;
  onOrderChange: (order: number, itemID: string) => void;
};

export default function OrderInput({ order, itemID, onOrderChange }: Props) {
  return (
    <input
      type="number"
      className="w-24"
      value={order.find((order) => order.id === itemID)?.order}
      onChange={(e) => onOrderChange(parseInt(e.target.value), itemID)}
      onClick={(e) => e.preventDefault()}
    />
  );
}
