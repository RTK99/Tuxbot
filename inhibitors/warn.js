exports.conf = {
  enabled: true,
  priority: 3,
};

exports.run = (client, msg, cmd) => {
 if (cmd.help.name === "warn" && msg.guild.id !== "304606245132697600") return "That command is disabled for this guild.";
};
