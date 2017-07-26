class example extends BlazeComponent {
  // Life-cycle hook to initialize component's state.
  onCreated() {
    // It is a good practice to always call super.
    super.onCreated();
    this.counter = new ReactiveField(0);
  }

  // Mapping between events and their handlers.
  events() {
    // It is a good practice to always call super.
    return super.events().concat({
      // You could inline the handler, but the best is to make
      // it a method so that it can be extended later on.
      'click .increment': this.onClick
    });
  }

  onClick(event) {
    this.counter(this.counter() + 1);
  }

  // Any component's method is available as a template helper in the template.
  customHelper() {
    if (this.counter() > 10) {
      return "Too many times";
    }
    else if (this.counter() === 10) {
      return "Just enough";
    }
    else {
      return "Click more";
    }
  }
}

// Register a component so that it can be included in templates. It also
// gives the component the name. The convention is to use the class name.
example.register('example');