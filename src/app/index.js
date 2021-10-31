const routerService = interpret(routingMachine)
  .onTransition((state) => console.log(state.value))
  .start();
// => 'inactive'
