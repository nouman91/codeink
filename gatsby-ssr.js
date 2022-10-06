import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/CircularStd-Black.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />,
    <link
      rel="preload"
      href="/fonts/CircularStd-Medium.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />,
    <link
      rel="preload"
      href="/fonts/CircularStd-Book.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />
  ])
}