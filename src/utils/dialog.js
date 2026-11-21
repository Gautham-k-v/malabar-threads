import { useEffect } from 'react';

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

function focusableWithin(container) {
  if (!container) return [];
  return [...container.querySelectorAll(FOCUSABLE)].filter((element) => element.getClientRects().length > 0);
}

export function useDialogDismiss(open, close, containerRef) {
  useEffect(() => {
    if (!open) return undefined;
    const container = containerRef.current;
    const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    let attempts = 0;
    let timer = 0;
    function moveFocusInside() {
      const first = focusableWithin(container)[0];
      if (first && document.activeElement !== first && !container?.contains(document.activeElement)) {
        first.focus({ preventScroll: true });
      }
      attempts += 1;
      if (attempts < 8 && !container?.contains(document.activeElement)) {
        timer = window.setTimeout(moveFocusInside, 40);
      }
    }
    timer = window.setTimeout(moveFocusInside, 0);

    function onKey(event) {
      if (event.key === 'Escape') {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== 'Tab') return;
      const items = focusableWithin(container);
      if (items.length === 0) return;
      const start = items[0];
      const end = items[items.length - 1];
      if (event.shiftKey && document.activeElement === start) {
        event.preventDefault();
        end.focus();
      } else if (!event.shiftKey && document.activeElement === end) {
        event.preventDefault();
        start.focus();
      }
    }

    window.addEventListener('keydown', onKey);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('keydown', onKey);
      if (previous?.isConnected) previous.focus({ preventScroll: true });
    };
  }, [open, close, containerRef]);
}
