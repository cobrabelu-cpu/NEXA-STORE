const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('qr')
        .setDescription('Sends your QR code'),
    async execute(interaction) {
        const qrCode = new AttachmentBuilder('https://cdn.discordapp.com/attachments/1501504180874121277/1531661705623633940/anali_qr.jpg?ex=6a6a069f&is=6a68b51f&hm=d208d5feac94b913009b5fc6a7f183418d261a6def95d01d2eebaed024fab937&');
        await interaction.reply({ files: [qrCode] });
    
