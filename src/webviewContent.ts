import { Uri } from "vscode";

export function getWebviewContent(cspSource: string, assetsPath: Uri) {
	return /*html*/`<!doctype html>
	<html lang="en">
	
	<head>
		<meta charset="utf-8">
		<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${cspSource}; script-src ${cspSource}">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<title>Git Cheatsheet</title>

		<link rel="stylesheet" href="${assetsPath}/custom.css">
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
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git status</pre>
		</div>

		<p>Add a file to staging as it looks right now</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git add [file_name]</pre>
		</div>

		<p>Add a folder to staging as it looks right now</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git add [folder_name]</pre>
		</div>

		<p>Commit staged files in a new commit</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git commit -m "descriptive_message"</pre>
		</div>

		<p>Add all files to staging and commit them at once</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git commit -am "descriptive_message"</pre>
		</div>

		<p>Unstage a file while retaining the changes</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git reset [file_name]</pre>
		</div>

		<p>Diff of what is changed but not staged</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git diff</pre>
		</div>

		<p>Diff of what has changed between staged changes and the last commit</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git diff --staged</pre>
		</div>

		<h2 id="branches">Branches</h2>

		<p>List all branches. The current one is marked with <strong>*</strong></p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git branch</pre>
		</div>

		<p>Create a new branch</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git branch [branch_name]</pre>
		</div>

		<p>Switch to a branch</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git checkout [branch_name]</pre>
		</div>

		<p>Create a new branch and switch to it</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git checkout -b [branch_name]</pre>
		</div>

		<p>Switch to the previously checked out branch</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git checkout -</pre>
		</div>

		<p>Rename a branch</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git checkout -m [new_branch]</pre>
		</div>

		<p>Delete a branch, locally</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git branch -d [branch_name]</pre>
		</div>

		<p>Merge another branch into the current one</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git merge [branch_name]</pre>
		</div>
		
		<h2 id="remote-repo">Working with a Remote Repository</h2>

		<p>Fetch and merge all commits from the tracked remote branch</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git pull</pre>
		</div>

		<p>Fetch and merge all commits from a specific remote branch</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git pull [alias] [branch_name]</pre>
		</div>

		<p>Fetch recent changes from the tracked remote branch but don't merge them</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git fetch</pre>
		</div>

		<p>Push all local branch commits to the tracked remote branch</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git push</pre>
		</div>

		<p>Push all local branch commits to a specific remote branch</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git push [alias] [branch_name]</pre>
		</div>

		<p>Add a new remote repository with the given alias</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git remote add [alias] [repo_url]</pre>
		</div>

		<p>Display a list of remote repositories and their URLs</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git remote -v</pre>
		</div>

		<h2 id="commit-history">Commit History</h2>
		
		<p>Show all commits in the current branch’s history</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git log</pre>
		</div>

		<p>Show all commits in the current branch’s history by printing each commit on a single line</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git log --oneline</pre>
		</div>

		<p>Show number of commits per author on all branches, excluding merge commits.</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git shortlog -s -n --all --no-merges</pre>
		</div>

		<p>Show number of commits per author on a branch, excluding merge commits.</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git shortlog -s -n [branch_name] --no-merges</pre>
		</div>

		<p>Show number of commits per author on all branches, including merge commits.</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git shortlog -s -n --all</pre>
		</div>

		<p>Show number of commits per author on a branch, including merge commits.</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git shortlog -s -n [branch_name]</pre>
		</div>
		
		<h2 id="rebase">Rebase</h2>

		<p>Reapply commits from the current branch on top of another base</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git rebase [branch_name]</pre>
		</div>

		<p>Abort a rebase</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git rebase –-abort</pre>
		</div>

		<p>Continue a rebase after resolving conflicts</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git rebase –-continue</pre>
		</div>

		<h2 id="undo">Undo</h2>

		<p>Revert the changes in a commit and record them in a new commit</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git revert [commit]</pre>
		</div>

		<p>Reset to a previous commit and preserve the changes made since [commit] as unstaged</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git reset [commit]</pre>
		</div>

		<p>Reset to a previous commit and discard the changes made since the [commit]</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git reset --hard [commit]</pre>
		</div>

		<h2 id="stash">Stash</h2>

		<p>Stash modified and staged changes</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git stash</pre>
		</div>

		<p>Stash modified and staged changes with a custom message</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git stash push -m "message"</pre>
		</div>

		<p>List all stashed changesets</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git stash list</pre>
		</div>

		<p>Restore the most recently stashed changeset and delete it</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git stash pop</pre>
		</div>

		<p>Delete the most recently stashed changeset</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git stash drop</pre>
		</div>

		<h2 id="repo-setup">Repository Setup</h2>

		<p>Create an empty repository in the current folder</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git init</pre>
		</div>

		<p>Create an empty repository in a specific folder</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git init [folder_name]</pre>
		</div>
		
		<p>Clone a repository and add it to the current folder</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git clone [repo_url]</pre>
		</div>

		<p>Clone a repository to a specific folder</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git clone [repo_url] [folder_name]</pre>
		</div>

		<h2 id="global-config">Global Config</h2>

		<p>Set the username</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git config --global user.name "user_name"</pre>
		</div>

		<p>Set the user email</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git config --global user.email "user_email"</pre>
		</div>

		<p>Set automatic command line coloring</p>
		<div class="command-wrapper">
			<button type="button" class="btn btn-copy">Copy</button>
			<pre>git config --global color.ui auto</pre>
		</div>

		<script src="${assetsPath}/main.js"></script>
	</body>
</html>
`;
}
