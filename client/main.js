import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import './example.js'
import './containerTemplate.js'

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});
Template.hello.helpers({
  count() {
    return Template.instance().counter.get();
  }
})
Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

Template.info.helpers({
  links() {
    const Link = (target,name) => ({target,name})
    return [
      Link("https://www.meteor.com/try", "Do the Tutorial"),
      Link("http://guide.meteor.com", "Follow the Guide"),
      Link("https://docs.meteor.com", "Read the Docs"),
      Link("https://forums.meteor.com", "Discussions")
    ]
  },
});
