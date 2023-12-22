import React from "react";

export const LazyAbout = React.lazy(() => import('./About').then(({ About }) => ({ default: About })));