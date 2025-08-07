/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RECOMMENDED_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
