.PHONY: js css

JSD=js/
CSD=css/

CSSFILES = $(CSD)bootstrap.css $(CSD)font-awesome.css $(CSD)select2.css $(CSD)bootstrap-timepicker.css \
	$(CSD)bootstrap-datepicker.css

JSFILES = $(JSD)json2.js $(JSD)jquery.js $(JSD)jquery-migrate-1.0.0.js $(JSD)moment.js $(JSD)bootstrap.js \
	$(JSD)bootstrap-timepicker.js $(JSD)bootstrap-datepicker.js

all: css js

css: less/master.less
	cat $(CSSFILES) | yui-compressor --type css > stylesheets/plugins.css
	lessc less/master.less | cat $(CSD)admin.css - | yui-compressor --type css > stylesheets/admin.css
	lessc less/master.less | cat $(CSD)guest.css - | yui-compressor --type css > stylesheets/guest.css

js:
	cat $(JSFILES) | yui-compressor --type js > javascripts/plugins.js
	cat $(JSD)angular.js $(wildcard $(JSD)angular-*.js) >> javascripts/plugins.js

jsd:
	cat $(JSD)json2.js $(JSD)jquery.js $(JSD)jquery-migrate-1.0.0.js $(JSD)select2.js $(JSD)bootstrap.js > $(JSD)plugins.js
	cat $(JSD)angular.js $(wildcard $(JSD)angular-*.js) >> $(JSD)plugins.js

clean:
	rm -v stylesheets/plugins.css stylesheets/admin.css stylesheets/guest.css
	rm -v javascripts/plugins.js