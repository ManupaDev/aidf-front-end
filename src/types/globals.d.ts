export {};

declare global {
    interface Window {
      Clerk: {
        session: {
          getToken: () => Promise<string>;
        };
      };
    }
  }
  