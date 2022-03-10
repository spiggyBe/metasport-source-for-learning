import { RefObject } from "react";

export function useDraggableScroll(
  ref: RefObject<HTMLElement>,
  options: {
    direction?: "vertical" | "horizontal" | "both";
  } = { direction: "both" }
): {
  onMouseDown: (event: { clientX: number; clientY: number }) => void;
  onTouchDown: (event: TouchEvent) => void;
  touchMoveHandler: (event: TouchEvent) => void;
} {
  const { direction } = options;
  let initialPosition = { scrollTop: 0, scrollLeft: 0, mouseX: 0, mouseY: 0 };

  const mouseMoveHandler = (event: { clientX: number; clientY: number }) => {
    if (ref.current) {
      const dx = event.clientX - initialPosition.mouseX;
      const dy = event.clientY - initialPosition.mouseY;

      if (direction !== "horizontal")
        ref.current.scrollTop = initialPosition.scrollTop - dy;
      if (direction !== "vertical")
        ref.current.scrollLeft = initialPosition.scrollLeft - dx;
    }
  };

  const touchMoveHandler = (event: TouchEvent) => {
    if (ref.current) {
      const dx = event.touches[0].clientX - initialPosition.mouseX;

      if (direction !== "horizontal")
        ref.current.scrollLeft = initialPosition.scrollLeft - dx;
      if (direction !== "vertical")
        ref.current.scrollLeft = initialPosition.scrollLeft - dx;
    }
  };

  const mouseUpHandler = () => {
    if (ref.current) ref.current.style.cursor = "grab";
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  };

  const touchUpHandler = () => {
    document.removeEventListener("touchmove", touchMoveHandler);
  };

  const onMouseDown = (event: { clientX: number; clientY: number }) => {
    if (ref.current) {
      initialPosition = {
        scrollLeft: ref.current.scrollLeft,
        scrollTop: ref.current.scrollTop,
        mouseX: event.clientX,
        mouseY: event.clientY,
      };
      ref.current.style.cursor = "grabbing";
      ref.current.style.userSelect = "none";

      document.addEventListener("mousemove", mouseMoveHandler);
      document.addEventListener("mouseup", mouseUpHandler);
    }
  };

  const onTouchDown = (event: TouchEvent) => {
    if (ref.current) {
      initialPosition = {
        scrollLeft: ref.current.scrollLeft,
        scrollTop: ref.current.scrollTop,
        mouseX: event.touches[0].clientX,
        mouseY: event.touches[0].clientY,
      };
      document.addEventListener("touchmove", touchMoveHandler);
      document.addEventListener("touchup", touchUpHandler);
    }
  };

  return { onMouseDown, onTouchDown, touchMoveHandler };
}
