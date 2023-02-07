import { CartEntry as ICartEntry } from "use-shopping-cart/core";
import Image from "next/image";

export default function CartEntry({
  entry,
  removeItem,
}: {
  entry: ICartEntry;
  removeItem: (id: string) => undefined;
}) {
  return (
    <div className="flex justify-stretch">
      <div className="text-5xl mr-3">{entry.emoji}</div>
      <div className="flex flex-col w-full">
        <h3 className="text-md mb-2">{entry.name}</h3>
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <button className="text-xl">
              {entry.quantity != 1 ? (
                "-"
              ) : (
                <Image
                  src="./delete.svg"
                  width={20}
                  height={20}
                  alt="delete icon"
                  onClick={() => removeItem(entry.id)}
                />
              )}
            </button>
            <span>{entry.quantity}</span>
            <button className="text-xl">+</button>
          </div>
          <p className="mr-2 text-md">{entry.formattedValue}</p>
        </div>
      </div>
    </div>
  );
}
