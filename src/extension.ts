import * as vscode from "vscode";
import { join } from "path";

import { getWebviewContent } from "./webviewContent";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "open.git.cheatsheet",
    () => {
      const assetsRoot = vscode.Uri.file(join(context.extensionPath, "assets"));

      const panel = vscode.window.createWebviewPanel(
        "gitCheatsheet",
        "Git Cheatsheet",
        vscode.ViewColumn.Beside,
        {
          localResourceRoots: [assetsRoot],
          enableScripts: true,
        }
      );

      const assetsPath = panel.webview.asWebviewUri(assetsRoot);
      const cspSource = panel.webview.cspSource;

      panel.webview.html = getWebviewContent(cspSource, assetsPath);

      panel.webview.onDidReceiveMessage(
        (command: string) => {
          vscode.env.clipboard.writeText(command).then(
            () => {
              vscode.window.showInformationMessage(
                `Command copied: ${command}`
              );
            },
            () => {
              vscode.window.showErrorMessage("Copy failed");
            }
          );
        },
        undefined,
        context.subscriptions
      );
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
