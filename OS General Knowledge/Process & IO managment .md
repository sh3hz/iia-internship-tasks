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
