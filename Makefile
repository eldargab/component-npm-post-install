test: clean
	@node test/test.js

clean:
	@rm -f test/fixtures/component/node_modules/*.js

.PHONY: test clean
