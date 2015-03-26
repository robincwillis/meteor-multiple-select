Months = new Mongo.Collection('months');

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({

    settings : function() {
      return {
        //isOpen : true
      };
    },

    options: function () {
      var months = Months.find().fetch();
      return _.map(months, function(month){
        return {label : month.name , value : month.index};
      });
    }

  });

  Template.hello.events({
    'click button': function () {
      Session.set('counter', Session.get('counter') + 1);
      var value = $('input').val();
      var index = Session.get('counter');
      if(value.length > 0){
        Months.insert({name:value, index:index});
      }
    }

  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    if(Months.find().count() === 0){
      var months = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
      _.each(months, function(month, i){
        Months.insert({name : month, index : i});
      });
    }
  });
}
