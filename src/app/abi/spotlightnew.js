"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";

export function SpotlightNewDemo() {
  return React.createElement(
    "div",
    {
      className:
        "h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden",
    },
    [
      React.createElement(Spotlight, { key: "spotlight" }),
      React.createElement(
        "div",
        {
          key: "content",
          className:
            "p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0",
        },
        [
          React.createElement(
            "h1",
            {
              key: "title",
              className:
                "text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50",
            },
            [
              "Spotlight ",
              React.createElement("br", { key: "br1" }),
              " which is not overused."
            ]
          ),
          React.createElement(
            "p",
            {
              key: "desc",
              className:
                "mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto",
            },
            [
              "A subtle yet effective spotlight effect, because the previous version is used a bit too much these days."
            ]
          ),
        ]
      ),
    ]
  );
}
