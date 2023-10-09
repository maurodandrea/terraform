#!/bin/bash

set -e

action=$1
env=$2
shift 2
other=$@

if [ -z "$action" ]; then
  echo "Missed action: init, apply, plan"
  exit 0
fi

if [ -z "$env" ]; then
  echo "env should be: dev or prod."
  exit 0
fi

if echo "init plan apply refresh import output state taint destroy" | grep -w $action > /dev/null; then
  if [ $action = "init" ]; then
    terraform $action
  elif [ $action = "output" ] || [ $action = "state" ] || [ $action = "taint" ]; then
    # init terraform backend
    terraform init
    terraform $action $other
  else
    # init terraform backend
    terraform init
    terraform $action
  fi
else
    echo "Action not allowed."
    exit 1
fi
