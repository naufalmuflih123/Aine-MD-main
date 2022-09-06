let handler = async m => m.reply(`
╭─「 Donasi • Pulsa/Dana 」
│ •  [0816-1599-7326]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
