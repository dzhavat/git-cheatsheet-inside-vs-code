import * as vscode from 'vscode';
import * as path from 'path';

import { getWebviewContent } from './webviewContent';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('git.open.cheatsheet', () => {
		// Create and show a new webview
		const panel = vscode.window.createWebviewPanel(
			'gitCheatsheet',
			'Git Cheatsheet',
			vscode.ViewColumn.Beside, {
				localResourceRoots: [vscode.Uri.file(path.join(context.extensionPath, 'style'))]
			}
		);

		const styleSrc = vscode.Uri.file(
			path.join(context.extensionPath, 'style', 'custom.css')
		).with({ scheme: 'vscode-resource' });
		
		panel.webview.html = getWebviewContent(styleSrc);
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
