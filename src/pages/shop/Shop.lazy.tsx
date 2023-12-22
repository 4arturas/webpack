import React from "react";

export const LazyShop = React.lazy(async () => ({ default: (await import('./Shop')).Shop }))