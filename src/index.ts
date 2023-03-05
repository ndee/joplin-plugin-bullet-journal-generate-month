import joplin from 'api';

joplin.plugins.register({
	onStart: async function () {
		console.info('Hello world. Test plugin started!');

		await joplin.commands.register({
			name: 'generateMonth',
			label: 'Generate Month',
			iconName: 'fas fa-music',
			execute: async () => {
				//		alert('Testing plugin command 1');

				const dialogs = joplin.views.dialogs;

				const handle = await dialogs.create('myDialog');
				await dialogs.setHtml(handle, `
				<p>Testing dialog with form elements</p>
				<form name="user">
					Year: <input type="text" name="year"/>
					<br/>
					Month: <input type="text" name="month"/>
					<br/>
				</form>
				`);

				const result = await dialogs.open(handle);
				console.info('Got result: ' + JSON.stringify(result));

				const folder = await joplin.data.post(['folders'], null, { title: "my plugin folder" });
				await joplin.data.post(['notes'], null, { parent_id: folder.id, title: "testing plugin!" });
			},
		});
	},
});


