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

		<h2>Repository setup</h2>

		<p>Create an empty repository in the project folder</p>
		<pre>git init</pre>

		<p>Clone a repository and add it to the project folder</p>
		<pre>git clone [repo url]</pre>

		<p>Clone a repository to a specific folder</p>
		<pre>git clone [repo url] [folder]</pre>

		<h2>Global config</h2>

		<p>Set the username</p>
		<pre>git config --global user.name [user_name]</pre>

		<p>Set the user email</p>
		<pre>git config --global user.email [user_email]</pre>

		<p>Set automatic command line coloring</p>
		<pre>git config --global color.ui auto</pre>
	</body>
</html>
`;
}
