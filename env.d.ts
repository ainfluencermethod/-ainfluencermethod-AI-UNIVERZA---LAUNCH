// Fix: Use namespace augmentation for NodeJS.ProcessEnv to avoid redeclaring 'process' as a variable,
// which conflicts with existing declarations in environments where Node.js types are present.
declare namespace NodeJS {
  interface ProcessEnv {
    API_KEY: string;
    [key: string]: string | undefined;
  }
}
