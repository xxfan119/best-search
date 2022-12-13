import { useRef, useEffect } from "react";

export default function useEventListener(props: {
  type: string;
  handler: (...args: any) => void;
  element?: HTMLElement;
}) {
  const handler = useRef(props.handler);
  useEffect(() => {
    handler.current = props.handler;
  }, [props.handler]);

  useEffect(() => {
    const element = props.element || window;
    const isSupported = element && element.addEventListener;
    if (!isSupported) {
      return;
    }

    const eventListener = (event: any) => handler.current(event);
    element.addEventListener(props.type, eventListener);
    return () => {
      element.removeEventListener(props.type, eventListener);
    };
  }, [props.type, props.element]);
}
