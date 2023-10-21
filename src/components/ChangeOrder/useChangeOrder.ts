import { Order } from "@/types";
import { useState } from "react";

type Props<T> = {
  items: (T & Order)[];
  setItems: (item: (T & Order)[]) => void;
  updateOrder: (orders: Order[]) => Promise<(T & Order)[]>;
};

export default function useChangeOrder<T>({
  items,
  setItems,
  updateOrder,
}: Props<T>) {
  const [orders, setOrders] = useState<Order[]>([]);

  const [isChangeOrderOpen, setIsChangeOrderOpen] = useState(false);

  const onOrderChange = (newOrder: number, categoryId: string) => {
    const newOrders = orders.map((order) => {
      if (order.id === categoryId) {
        return {
          ...order,
          order: newOrder,
        };
      }

      return order;
    });

    setOrders(newOrders);
  };

  const onSubmitOrder = () => {
    updateOrder(orders).then((newOrderedItems) => {
      newOrderedItems.sort((a, b) => a.order - b.order);
      setItems(newOrderedItems);

      setIsChangeOrderOpen(false);
    });
  };

  const onCancelChangeOrder = () => {
    setOrders(
      items.map((item) => ({
        order: item.order,
        id: item.id,
      }))
    );

    setIsChangeOrderOpen(false);
  };

  return {
    orders,
    setOrders,
    isChangeOrderOpen,
    setIsChangeOrderOpen,
    onOrderChange,
    onSubmitOrder,
    onCancelChangeOrder,
  };
}
