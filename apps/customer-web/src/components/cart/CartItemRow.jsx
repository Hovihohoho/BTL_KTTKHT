import Button from "../ui/Button.jsx";
import { formatVnd } from "../../utils/format.js";

function CartItemRow({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="grid grid-cols-[72px_1fr_auto_auto] items-center gap-4 rounded-md bg-[#f4eee3] p-3">
      <img src={item.image} alt={item.name} className="h-14 w-16 rounded object-cover" />
      <p className="font-medium">{item.name}</p>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => onDecrease(item.id, item.quantity - 1)}
          className="h-6 w-6 rounded bg-mint/30"
        >
          -
        </button>
        <span className="w-6 text-center">{item.quantity}</span>
        <button
          type="button"
          onClick={() => onIncrease(item.id, item.quantity + 1)}
          className="h-6 w-6 rounded bg-mint/30"
        >
          +
        </button>
      </div>
      <div className="text-right">
        <p className="text-sm font-semibold">{formatVnd(item.price * item.quantity)}</p>
        <Button variant="secondary" className="mt-2 px-3 py-1 text-xs" onClick={() => onRemove(item.id)}>
          Xóa
        </Button>
      </div>
    </div>
  );
}

export default CartItemRow;
