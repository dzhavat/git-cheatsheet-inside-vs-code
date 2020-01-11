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
				<li><a href="#branches">Branches</a></li>
				<li><a href="#commit-history">Commit History</a></li>
				<li><a href="#stash">Stash</a></li>
				<li><a href="#repo-setup">Repository Setup</a></li>
				<li><a href="#global-config">Global Config</a></li>
			</ul>
		</nav>

		<h2>Most used</h2>





		<h2 id="branches">Branches</h2>

		<p>List all branches</p>
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

		<p>Merge a branch in the current branch</p>
		<pre>git merge [branch_name]</pre>
		
		<h2 id="commit-history">Commit History</h2>
		
		<p>Show all commits in the current branch’s history</p>
		<pre>git log</pre>
		
		<h2 id="stash">Stash</h2>

		<p>Save modified and staged changes</p>
		<pre>git stash</pre>

		<p>Save modified and staged changes with a custom message</p>
		<pre>git stash -m "[message]"</pre>

		<p>List all stashed changesets</p>
		<pre>git stash list</pre>

		<p>Restore the most recently stashed changeset and delete it</p>
		<pre>git stash pop</pre>

		<p>Delete the most recently stashed changeset</p>
		<pre>git stash drop</pre>

		<h2 id="repo-setup">Repository Setup</h2>

		<p>Create an empty repository in the current folder</p>
		<pre>git init</pre>

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
