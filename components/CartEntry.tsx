import {
  CartEntry as ICartEntry,
  formatCurrencyString,
} from "use-shopping-cart/core";

export default function CartEntry({
  entry,
  removeItem,
}: {
  entry: ICartEntry;
  removeItem: (id: string) => undefined;
}) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h3>{entry.name}</h3>
          <p>
            {entry.quantity} x{" "}
            {formatCurrencyString({ value: entry.price, currency: "GBP" })} ={" "}
            {entry.formattedValue}
          </p>
          <button onClick={() => removeItem(entry.id)}>Remove item</button>
        </div>
        <div className="text-4xl">{entry.emoji}</div>
      </div>
    </div>
  );
}
