import { SnipCartOrder, SnipCartOrderItem } from '../interfaces/snipcart';

type OrdersProps = {
  orders: SnipCartOrder[];
};

interface VariationStock {
  [key: string]: {
    [customField: string]: {
      [variantion: string]: number;
    };
  };
}

export function OrderVariations({ orders }: OrdersProps) {
  const itemsSold = orders.map((order) => order.items);
  const items = itemsSold.flat() as SnipCartOrderItem[];
  const stockLevels = items.reduce((acc: VariationStock, item) => {
    if (!item.customFields) return acc;
    const product = acc[item.id] || {};
    item.customFields.forEach((customField) => {
      // Variant is "Size"
      const variant = product[customField.name] || {};
      // This is like Size.XL = xx;
      variant[customField.value] = variant[customField.value] + 1 || 1;
      product[customField.name] = variant;
    });
    acc[item.id] = product;
    return acc;
  }, {});
  console.log(stockLevels);

  return (
    <div>
      <pre>{JSON.stringify(stockLevels, null, ' ')}</pre>
    </div>
  );
}
