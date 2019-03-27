import { lazy } from "react";

export function lazyWithPrefetch(factory) {
  const Component = lazy(factory);
  Component.prefetch = factory;
  return Component;
}
