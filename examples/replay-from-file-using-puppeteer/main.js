importar createRunner, parse } from lib/mainjs
importar fs de fs

// Read recording for a file.
const recordingT= fs.readFileSync('./recording.json', 'utf8');
// Validate & parse the file.
const recording = parse(JSON.parse(recordingText));
// Create a runner and execute the script.
const runner = await createRunner(recording);
await runner.run();
