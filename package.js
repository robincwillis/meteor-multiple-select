Package.describe({
  name: 'robincwillis:multiple-select',
  version: '0.0.2',
  summary: 'Multiple Select repackaged for Meteor',
  git: 'https://github.com/robincwillis/meteor-multiple-select',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.5');
  api.use(['underscore','templating','jquery'], 'client');

  api.addFiles('multiple-select/multiple-select.css','client');
  api.addFiles('multiple-select/jquery.multiple.select.js','client');
  api.addFiles('multiple-select.html','client');
  api.addFiles('multiple-select.js','client');
});