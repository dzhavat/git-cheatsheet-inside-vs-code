import * as vscode from 'vscode';
import * as path from 'path';

import { getWebviewContent } from './webviewContent';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('open.git.cheatsheet', () => {
		const panel = vscode.window.createWebviewPanel(
			'gitCheatsheet',
			'Git Cheatsheet',
			vscode.ViewColumn.Beside, {
				localResourceRoots: [vscode.Uri.file(path.join(context.extensionPath, 'assets'))],
				enableScripts: true
			}
		);

		const styleSrc = vscode.Uri.file(
			path.join(context.extensionPath, 'assets', 'custom.css')
		).with({ scheme: 'vscode-resource' });

		const scriptSrc = vscode.Uri.file(
			path.join(context.extensionPath, 'assets', 'main.js')
		).with({ scheme: 'vscode-resource' });
		
		panel.webview.html = getWebviewContent(panel.webview, styleSrc, scriptSrc);

		panel.webview.onDidReceiveMessage(
			(command: string) => {
				vscode.env.clipboard.writeText(command)
					.then(() => {
						vscode.window.showInformationMessage(`Command copied: ${command}`);
					}, () => {
						vscode.window.showErrorMessage('Copy failed');
					});
			},
			undefined,
			context.subscriptions
		);
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
