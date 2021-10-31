import { routingMachine } from "machine";

export function getNextPathname(event, context) {
  const currentPathname = window.location.pathname;
  
  const nextPathname = routingMachine
    .withContext(context)                 // https://xstate.js.org/docs/guides/context.html
    .transition(currentPathname, event);  // https://xstate.js.org/api/interfaces/statemachine.html#transition
  
  return nextPathname;
}
