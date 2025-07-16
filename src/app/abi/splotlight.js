import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";

export function SpotlightPreview() {
  return React.createElement(
    "div",
    {
      className:
        "relative flex h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center",
    },
    [
      React.createElement(
        "div",
        {
          key: "bg",
          className: cn(
            "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
            "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
          ),
        }
      ),
      React.createElement(Spotlight, {
        key: "spotlight",
        className: "-top-40 left-0 md:-top-20 md:left-60",
        fill: "white",
      }),
      React.createElement(
        "div",
        {
          key: "content",
          className:
            "relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0",
        },
        [
          React.createElement(
            "h1",
            {
              key: "title",
              className:
                "bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl",
            },
            [
              "Spotlight ",
              React.createElement("br", { key: "br1" }),
              " is the new trend."
            ]
          ),
          React.createElement(
            "p",
            {
              key: "desc",
              className:
                "mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300",
            },
            [
              "Spotlight effect is a great way to draw attention to a specific part of the page. Here, we are drawing the attention towards the text section of the page. I don't know why but I'm running out of copy."
            ]
          ),
        ]
      ),
    ]
  );
}
