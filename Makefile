# Clean Up #
#==========#

## Remove all node_modules folders
rm-modules:
	find . -name "node_modules" -prune -exec rm -rf '{}' +
