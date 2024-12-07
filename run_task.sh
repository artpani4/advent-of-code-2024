#!/bin/bash
if [ $# -ne 2 ]; then
  echo "Usage: ./run_task.sh <day> <task>"
  exit 1
fi

DAY=$1
TASK=$2
TASK_PATH="./day${DAY}/task${TASK}/main.ts"

if [ -f "$TASK_PATH" ]; then
  deno run --allow-all "$TASK_PATH"
else
  echo "Error: Task file $TASK_PATH not found!"
fi