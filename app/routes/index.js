import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('meeting');
  },
  actions: {
    scrollit(){

      Ember.$('#top').hide(2000, function() {
        Ember.$('#meetings').addClass("spacer");
        Ember.$('#rule').css({position: "fixed", top: "70px"});
        Ember.$('#createButton').css({position: "fixed", top: "100px"});
        Ember.$('#browse').css({position: "fixed"});
        Ember.$('#meetings').addClass("col-md-offset-3");
      })
    },
    continue() {
      this.transitionTo('register').then(function(newRoute) {
        newRoute.currentModel.set('title', document.getElementById('title').value);
      })
    }
  }
});
