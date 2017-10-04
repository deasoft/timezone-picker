Package.describe({
  summary: "Nicely formatted dropdown list of timezones, based on moment. Also timezone detection.",
  version: '1.0.0',
  name: "deasoft:timezone-picker",
  git: 'https://github.com/deasoft/timezone-picker'
});

Npm.depends({
	"moment": "2.18.1",
	'moment-timezone': '0.5.13'
});



Package.onUse(function(api, where) {
  api.versionsFrom("METEOR@0.9.4");

  api.use(['blaze', 'templating', 'jquery'], 'client');
  api.use(['underscore'], 'client');

  api.addFiles([
    'picker.html',
    'picker.js'
  ], 'client');

  api.export(['TimezonePicker']);
});


