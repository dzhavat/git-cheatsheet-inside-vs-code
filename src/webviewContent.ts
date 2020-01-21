import { Uri } from "vscode";

export function getWebviewContent(styleSrc: Uri) {
	return `<!doctype html>
	<html lang="en">
	
	<head>
		<meta charset="utf-8">
		<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src vscode-resource:;">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<title>Git Cheatsheet</title>

		<link rel="stylesheet" href="${styleSrc}">
	</head>
	
	<body>
		<h1>Git Cheatsheet</h1>

		<p>Jump to:</p>
		<nav>
			<ul>
				<li><a href="#local-changes" title="Local Changes">Local Changes</a></li>
				<li><a href="#branches" title="Branches">Branches</a></li>
				<li><a href="#remote-repo" title="Working with a Remote Repository">Working with a Remote Repository</a></li>
				<li><a href="#commit-history" title="Commit History">Commit History</a></li>
				<li><a href="#rebase" title="Rebase">Rebase</a></li>
				<li><a href="#undo" title="Undo">Undo</a></li>
				<li><a href="#stash" title="Stash">Stash</a></li>
				<li><a href="#repo-setup" title="Repository Setup">Repository Setup</a></li>
				<li><a href="#global-config" title="Global Config">Global Config</a></li>
			</ul>
		</nav>

		<h2 id="local-changes">Local Changes</h2>

		<p>Display the status of modified files</p>
		<pre>git status</pre>

		<p>Add a file to staging as it looks right now</p>
		<pre>git add [file]</pre>

		<p>Add a folder to staging as it looks right now</p>
		<pre>git add [folder]</pre>

		<p>Commit staged files in a new commit</p>
		<pre>git commit -m "descriptive_message"</pre>

		<p>Add all files to staging and commit them at once</p>
		<pre>git commit -am "descriptive_message"</pre>

		<p>Unstage a file while retaining the changes</p>
		<pre>git reset [file]</pre>

		<p>Diff of what is changed but not staged</p>
		<pre>git diff</pre>

		<p>Diff of what has changed between staged changes and the last commit</p>
		<pre>git diff --staged</pre>

		<h2 id="branches">Branches</h2>

		<p>List all branches. The current one is marked with <strong>*</strong></p>
		<pre>git branch</pre>

		<p>Create a new branch</p>
		<pre>git branch [branch_name]</pre>

		<p>Switch to a branch</p>
		<pre>git checkout [branch_name]</pre>

		<p>Create a new branch and switch to it</p>
		<pre>git checkout -b [branch_name]</pre>

		<p>Rename a branch</p>
		<pre>git checkout -m [new_branch_name]</pre>

		<p>Delete a branch, locally</p>
		<pre>git branch -d [branch_name]</pre>

		<p>Merge another branch into the current one</p>
		<pre>git merge [branch_name]</pre>
		
		<h2 id="remote-repo">Working with a Remote Repository</h2>

		<p>Fetch and merge all commits from the tracked remote branch</p>
		<pre>git pull</pre>

		<p>Fetch and merge all commits from a specific remote branch</p>
		<pre>git pull [alias] [branch_name]</pre>

		<p>Fetch recent changes from the tracked remote branch but don't merge them</p>
		<pre>git fetch</pre>

		<p>Push all local branch commits to the tracked remote branch</p>
		<pre>git push</pre>

		<p>Push all local branch commits to a specific remote branch</p>
		<pre>git push [alias] [branch_name]</pre>

		<p>Add a new remote repository with the given alias</p>
		<pre>git remote add [alias] [repo_url]</pre>

		<p>Display a list of remote repositories and their URLs</p>
		<pre>git remote -v</pre>

		<h2 id="commit-history">Commit History</h2>
		
		<p>Show all commits in the current branch’s history</p>
		<pre>git log</pre>

		<p>Show all commits in the current branch’s history by printing each commit on a single line</p>
		<pre>git log --oneline</pre>
		
		<h2 id="rebase">Rebase</h2>

		<p>Reapply commits from the current branch on top of another base</p>
		<pre>git rebase [branch]</pre>

		<p>Abort a rebase</p>
		<pre>git rebase –-abort</pre>

		<p>Continue a rebase after resolving conflicts</p>
		<pre>git rebase –-continue</pre>

		<h2 id="undo">Undo</h2>

		<p>Revert the changes in a commit and record them in a new commit</p>
		<pre>git revert [commit]</pre>

		<p>Reset to a previous commit and preserve the changes made since [commit] as unstaged</p>
		<pre>git reset [commit]</pre>

		<p>Reset to a previous commit and discard the changes made since the [commit]</p>
		<pre>git reset --hard [commit]</pre>

		<h2 id="stash">Stash</h2>

		<p>Stash modified and staged changes</p>
		<pre>git stash</pre>

		<p>Stash modified and staged changes with a custom message</p>
		<pre>git stash save -m "message"</pre>

		<p>List all stashed changesets</p>
		<pre>git stash list</pre>

		<p>Restore the most recently stashed changeset and delete it</p>
		<pre>git stash pop</pre>

		<p>Delete the most recently stashed changeset</p>
		<pre>git stash drop</pre>

		<h2 id="repo-setup">Repository Setup</h2>

		<p>Create an empty repository in the current folder</p>
		<pre>git init</pre>

		<p>Create an empty repository in a specific folder</p>
		<pre>git init [folder]</pre>
		
		<p>Clone a repository and add it to the current folder</p>
		<pre>git clone [repo_url]</pre>

		<p>Clone a repository to a specific folder</p>
		<pre>git clone [repo_url] [folder]</pre>

		<h2 id="global-config">Global Config</h2>

		<p>Set the username</p>
		<pre>git config --global user.name "user_name"</pre>

		<p>Set the user email</p>
		<pre>git config --global user.email "user_email"</pre>

		<p>Set automatic command line coloring</p>
		<pre>git config --global color.ui auto</pre>
	</body>
</html>
`;
}
