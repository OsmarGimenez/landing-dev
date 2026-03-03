/// <reference types="vite/client" />

declare module "*.pdf" {
  const content: string;
  export default content;
}

declare module "*?raw" {
  const content: string;
  export default content;
}
