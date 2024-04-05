const faviconScript = `
function listenToFaviconIfAvailable() {
  const favicon = document.querySelector('link[rel="shortcut icon"]'); 
  if(!favicon) {
      window.setTimeout(listenToFaviconIfAvailable,500);
      return;
  }
  document.addEventListener("visibilitychange", () => {
    const hidden = document.hidden;
    let file = hidden ? "/favicons/favicon-hidden.svg" : "/favicons/favicon.svg";
    favicon.setAttribute("href", file);
  });
}
listenToFaviconIfAvailable();
`;

export const head = [
  {
    tag: "meta",
    attrs: {
      name: "theme-color",
      media: "(prefers-color-scheme: light)",
      content: "#f3d9fa",
    },
  },
  {
    tag: "meta",
    attrs: {
      name: "theme-color",
      media: "(prefers-color-scheme: dark)",
      content: "#21307a",
    },
  },
  {
    tag: "script",
    attrs: {
      defer: true,
    },
    content: faviconScript,
  },
  {
    tag: "script",
    attrs: {
      src: "https://cdn.usefathom.com/script.js",
      "data-site": "MHXHQALU",
      defer: true,
    },
  },
];
