#!/bin/bash

if ! command -v json-server &> /dev/null; then
	echo "json-server is not installed globally"
	echo "Install it using : pmpn install -g json-server"
	exit 1
fi

JSON_FILE=${1:-db.json}

if [! -f "$JSON_FILE"]; then
	echo "JSON file '$JSON_FILE' does not exist !"
	exit 1
fi

echo "Starting json server using file '$JSON_FILE' ..."
json-server --watch "$JSON_FILE"
