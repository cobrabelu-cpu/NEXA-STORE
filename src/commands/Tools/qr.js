const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('qr')
        .setDescription('Sends your QR code'),
    async execute(interaction) {
        const qrCode = new AttachmentBuilder('https://discord.com/channels/870177407271837696/1501504180874121277/1531661706227617965');
        await interaction.reply({ files: [qrCode] });
    },
};
