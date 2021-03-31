# Unix / Linux - Processes Management

- pid (process ID)(Five digit) : Unique for each process
- Starting a Process : Foreground(Default) / Background (use & at end)
- **ps** : Listing Running Processes [ -f : Detailed]
- Stopping Processes : **kill** pid

### Parent and Child Processes
- Parent process ID (ppid) [ Present for each process]

### Zombie and Orphan Processes
- Orphan process : **init** takes over (parent of all processes)
- Zombie process : When a process is killed, ps listing shows **z**state

### Daemon Processes
- Run with the permissions of root and services requests from other processes.
- eg : printer daemon waiting for print commands.

## Unix / Linux - Shell Input/Output Redirections
### Output redirection
- notation > [greater-than character] file is appended to any command that normally writes its output to standard output. eg : who > users
- '>' for new file
- '>>' for appending to existing file
### Input redirection
-  notation < [less-than character] is used to redirect the input of a command.
-  here document, Delimiter

Discard the output : redirecting it to the file /dev/null

## Redirection Commands
Command | Description
--- | ---
pgm > file | Output of pgm is redirected to file
pgm < file | Program pgm reads its input from file
pgm >> file | pgm >> file
n > file | Output from stream with descriptor n redirected to file
n >> file | Output from stream with descriptor n appended to file
n >& m | Merges output from stream n with stream m
n <& m | Merges input from stream n with stream m
<< tag | Standard input comes from here through next tag at the start of line
