/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEBUG: boolean
  readonly PORT: number
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
