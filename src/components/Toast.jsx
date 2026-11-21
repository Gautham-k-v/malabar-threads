import { useShop } from '../context/ShopContext';

export default function Toast() {
  const { toast } = useShop();

  return (
    <div className="toast-wrap" aria-live="polite">
      {toast && (
        <p className="toast" key={toast.id}>
          {toast.message}
        </p>
      )}
    </div>
  );
}
