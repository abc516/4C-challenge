define(function(require) {
  var Ember = require('ember');

  var T = Ember.Handlebars.compile('\
  <h4>Comments</h4> \
  <table class="table table-striped table-hover"> \
    <thead><tr><th></th><th>Date</th><th>Picture</th><th>Message</th><th>Name</th><th>Source</th></tr></thead> \
    <tbody> \
      {{#each comment in model}} \
        <tr style="cursor:pointer;" > \
          <td><img {{bindAttr src=comment.icon}}></td> \
          <td>{{date comment.created_time}}</td> \
          <td><img class="pic-thumbnail" {{bindAttr src=comment.picture}}></td> \
          <td>{{comment.message}}</td> \
          <td><a>{{comment.name}}</a></td> \
          <td><a {{bindAttr href=comment.source}}>{{comment.source}}</a></td> \
        </tr> \
      {{/each}} \
    </tbody> \
  </table> \
  ');

  return Ember.View.extend({
    template: T
  });
});
