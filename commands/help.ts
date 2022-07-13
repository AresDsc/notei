import { Message, MessageEmbed } from "discord.js";
import { i18n } from "../utils/i18n";
import { bot } from "../index";

export default {
  name: "help",
  aliases: ["h"],
  description: i18n.__("help.description"),
  execute(message: Message) {
    let commands = bot.commands;

    let helpEmbed = new MessageEmbed()
      .setTitle(i18n.__mf("Note I, commandes"))
      .setDescription(i18n.__("help.embedDescription"))
      .setColor("#5CE1E6");

    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${bot.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
        `${cmd.description}`,
        true
      );
    });

    helpEmbed.setTimestamp();

    return message.reply({ embeds: [helpEmbed] }).catch(console.error);
  }
};
