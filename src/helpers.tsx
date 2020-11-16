export function throttle(callback: any, delay: number) {
  let throttleTimeout: NodeJS.Timeout | null = null;
  let storedEvent: any = null;

  const throttledEventHandler = (event: any) => {
    storedEvent = event;

    const shouldHandleEvent = !throttleTimeout;

    if (shouldHandleEvent) {
      callback(storedEvent);

      storedEvent = null;

      throttleTimeout = setTimeout(() => {
        throttleTimeout = null;

        if (storedEvent) {
          throttledEventHandler(storedEvent);
        }
      }, delay);
    }
  };

  return throttledEventHandler;
}
