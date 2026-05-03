import Button from "../ui/Button.jsx";
import { formatVnd } from "../../utils/format.js";

function ProductCard({ item, onAdd }) {
  return (
    <article
      className="cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
      onClick={() => onAdd(item)}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onAdd(item);
        }
      }}
    >
      <img src={item.image} alt={item.name} className="h-36 w-full object-cover" />
      <div className="space-y-2 p-3">
        <h3 className="text-xl font-medium">{item.name}</h3>
        <p className="text-sm text-gray-600">{item.category}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-semibold text-gray-800">{formatVnd(item.price)}</span>
          <Button
            className="px-4 py-1 text-xs"
            onClick={(event) => {
              event.stopPropagation();
              onAdd(item);
            }}
          >
            + Thêm
          </Button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
