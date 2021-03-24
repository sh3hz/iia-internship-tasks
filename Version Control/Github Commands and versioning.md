# Github Commands and versioning

### init 
- git init [repository name] ->start new repository.

### clone
- git clone [url] ->obtain a repository from an existing URL.

### add 
- git add [file] ->adds a file to the staging area.

### commit
- git commit -m “[ Type in the commit message]” ->records or snapshots the file permanently in the version history.
- git commit -a ->commits any files you’ve changed since then.&commits any files you’ve added.

### diff
- git diff ->shows the file differences which are not yet staged.
- git diff –staged ->differences between the files in the staging area and the latest version present.
- git diff [first branch] [second branch] ->differences between the two branches mentioned.

### reset
- git reset [file] ->unstages the file, but it preserves the file contents.
- git reset [commit] ->undoes all the commits after the specified commit and preserves the changes locally.
- git reset –hard [commit] ->discards all history and goes back to the specified commit.

### status
- git status ->command lists all the files that have to be committed.

### log
- git log ->used to list the version history for the current branch.
- git log –follow[file] ->lists version history for a file, including the renaming of files also.

### branch
- git branch ->lists all the local branches in the current repository.
- git branch [branch name] -> creates a new branch.
- git branch -d [branch name] -> deletes the feature branch.

### checkout
- git checkout [branch name] -> used to switch from one branch to another.
- git checkout -b [branch name] ->creates a new branch and also switches to it.

### merge
- git merge [branch name] ->merges the specified branch’s history into the current branch.

### push 
- git push [variable name] master ->sends the committed changes of master branch to your remote repository.
- git push [variable name] [branch] ->sends the branch commits to your remote repository.
- git push –all [variable name] ->pushes all branches to your remote repository.
- git push [variable name] :[branch name] ->deletes a branch on your remote repository.
