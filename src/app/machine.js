import { createMachine } from "xstate";

export const routingMachine = createMachine({
  initial: routes.greeting, 
  states: {
    [routes.greeting]: {
      on: {
        LOADED: routes.greeting,
      }
    },
    [routes.game]: {
      on: {
        LOADED: routes.game
      }
    },
  },
});
