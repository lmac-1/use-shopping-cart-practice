import { CartEntry as ICartEntry } from "use-shopping-cart/core";
import Image from "next/image";

export default function CartEntry({
  entry,
  removeItem,
  incrementItem,
  decrementItem,
}: {
  entry: ICartEntry;
  removeItem: (id: string) => undefined;
  incrementItem: (id: string) => undefined;
  decrementItem: (id: string) => undefined;
}) {
  return (
    <div className="flex justify-stretch">
      <div className="text-5xl mr-3">{entry.emoji}</div>
      <div className="flex flex-col w-full">
        <h3 className="text-md mb-2">{entry.name}</h3>
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            {entry.quantity != 1 ? (
              <button
                onClick={() => decrementItem(entry.id)}
                className="text-xl w-5"
              >
                -
              </button>
            ) : (
              <button onClick={() => removeItem(entry.id)}>
                <Image
                  src="./delete.svg"
                  width={20}
                  height={20}
                  alt="delete icon"
                />
              </button>
            )}
            <span>{entry.quantity}</span>
            <button
              onClick={() => incrementItem(entry.id)}
              className="text-xl w-5"
            >
              +
            </button>
          </div>
          <p className="mr-2 text-md">{entry.formattedValue}</p>
        </div>
      </div>
    </div>
  );
}
