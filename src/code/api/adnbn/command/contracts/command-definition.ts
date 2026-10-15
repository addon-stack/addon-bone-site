export interface CommandDefinition extends CommandEntrypointOptions {
	execute: CommandExecute;
}