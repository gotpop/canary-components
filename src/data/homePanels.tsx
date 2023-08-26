import { BsCheckLg } from "react-icons/bs"

export const homePanels = [
  {
    title: "Server Components",
    img: "/img/appdir1.png",
    width: 891,
    height: 603,
    description:
      "Server and Client Components allow developers to build applications that span the server and client, combining the rich interactivity of client-side apps with the improved performance of traditional server rendering!",
    features: [
      {
        icon: <BsCheckLg />,
        text: "Available in Next.js 13",
      },
      {
        icon: <BsCheckLg />,
        text: "Native to React",
      },
      {
        icon: <BsCheckLg />,
        text: "Call data directly from the component",
      },
    ],
  },
  {
    title: "CSS Subgrid",
    img: "/img/subgrid.png",
    width: 891,
    height: 761,
    description:
      "Level 2 of the CSS Grid Layout specification includes a subgrid value for grid-template-columns and grid-template-rows.",
    features: [
      {
        icon: <BsCheckLg />,
        text: "Use a single grid component for all elements",
      },
      {
        icon: <BsCheckLg />,
        text: "Have child elements inherit the grid",
      },
    ],
  },
  {
    title: "@scope",
    img: "/img/scope.png",
    width: 891,
    height: 761,
    description:
      "Allows authors to scope style rules to a given scoping root, and style elements according to the proximity of that scoping root.",
    features: [
      {
        icon: <BsCheckLg />,
        text: "Use generic class names",
      },
      {
        icon: <BsCheckLg />,
        text: "Write styles in the component",
      },
      {
        icon: <BsCheckLg />,
        text: "No need for CSS Modules",
      },
      {
        icon: <BsCheckLg />,
        text: "Just use CSS",
      },
      {
        icon: <BsCheckLg />,
        text: "Planned for Chrome 118 (116 now)",
      },
    ],
  },
  {
    title: "CSS container queries",
    img: "/img/container.png",
    width: 891,
    height: 761,
    description:
      "Container queries enable you to apply styles to an element based on the size of the element's container. If, for example, a container has less space available in the surrounding context, you can hide certain elements or use smaller fonts. Container queries are an alternative to media queries, which apply styles to elements based on viewport size or other device characteristics.",
    features: [
      {
        icon: <BsCheckLg />,
        text: "Use a single grid component for all elements",
      },
      {
        icon: <BsCheckLg />,
        text: "Have child elements inherit the grid",
      },
    ],
  },
  {
    title: "View Transitions API",
    img: "/img/view-transition.png",
    width: 1920,
    height: 1035,
    description:
      "The View Transition API makes it easy to change the DOM in a single step, while creating an animated transition between the two states. It's available in Chrome 111+.",
    features: [
      {
        icon: <BsCheckLg />,
        text: "Transitions between views",
      },
      {
        icon: <BsCheckLg />,
        text: "Perfect for page transitions",
      },
      {
        icon: <BsCheckLg />,
        text: "Works well with SPA's",
      },
      {
        icon: <BsCheckLg />,
        text: "Cross Document demo'd here",
      },
      {
        icon: <BsCheckLg />,
        text: "Cross Document requires a meta tag",
      },
    ],
  },
]
