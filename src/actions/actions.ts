'use server';

import { exec } from 'child_process';

export const echoSomething = async (input: string): Promise<{result?: string; error?: string}> => {
	return new Promise((resolve) => {
		exec('wsl echo ' + input, (error, stdout, stderr) => {
			if (error) {
				console.log({ error });
				resolve({error: String(error)})
			}
			if (stderr) {
				resolve({error: stderr})
				return;
			}
            console.log({ stdout });
            
			resolve({result: stdout})
		});
	});
};

export const runLs = async (flags: string) => {
	exec('ls' + flags, (e, stdout, stderr) => {
		if (e) {
			console.log({ e });
			return;
		}
		if (stderr) {
			console.log({ stderr });
			return;
		}
		console.log({ stdout });
	});

	return;
};

export const freeCommand = async (input: string): Promise<{result?: string; error?: string}> => {
	return new Promise((resolve) => {
		exec('wsl ' + input, (error, stdout, stderr) => {
			if (error) {
				console.log({ error });
				resolve({error: String(error)})
			}
			if (stderr) {
				resolve({error: stderr})
				return;
			}
            // console.log({ stdout });
            
			resolve({result: stdout})
		});
	});
};