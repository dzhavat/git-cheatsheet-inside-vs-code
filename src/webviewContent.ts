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
		<main>
				<h1>Git Cheatsheet</h1>
		</main>	
	</body>
</html>
`;
}
