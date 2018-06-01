const REQUEST = require("request-promise-native");

module.exports = {
	id: "DBL_LOADER",
	exec: (client) => {
		request.post({
			uri: `https://discordbots.org/api/bots/${client.user.id}/stats`,
			headers: {
				Authorization: process.env.dbl,
			},
			json: true,
			body: {
				server_count: client.guilds.size,
			},
		});
	}
};
