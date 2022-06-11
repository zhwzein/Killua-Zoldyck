const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "cekzodiak",
    alias: ["zodiak","cekzodiac"],
    use: "<query>",
    desc: "Cek Arti Zodiak",
    type: "primbon",
    example: `\nList Type :\n\n${type().join("\n")}\n\nExample : %prefix%command <type>`,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/primbon/zodiak", { query: text }, "apikey"))
        let caption = `Primbon Arti Zodiak :\n\n`
        let i = fetch.result.result
        caption += `⭔ Nama zodiak : ${i.zodiak}\n`
        caption += `⭔ Nomor keberuntungan : ${i.nomor_keberuntungan}\n`
        caption += `⭔ Aroma keberuntungan : ${i.aroma_keberuntungan}\n`
        caption += `⭔ Planet yang mengitari : ${i.planet_yang_mengitari}\n`
        caption += `⭔ Bunga keberuntungan : ${i.bunga_keberuntungan}\n`
        caption += `⭔ Warna keberuntungan : ${i.warna_keberuntungan}\n`
        caption += `⭔ Batu keberuntungan : ${i.batu_keberuntungan}\n`
        caption += `⭔ Elemen keberuntungan : ${i.elemen_keberuntungan}\n`
        caption += `⭔ Pasangan zodiak : ${i.pasangan_zodiak}\n\n`
        caption += `⭔ Catatan : ${i.catatan}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}

function type() {
    return [
        "CAPRICORN (22 Desember - 20 Januari)",
        "AQUARIUS (21 Januari - 19 Februari)",
        "PISCES (20 Februari - 20 Maret)",
        "ARIES (21 Maret – 19 April)",
        "TAURUS (21 April - Mei 20)",
        "GEMINI (21 Mei - Juni 21)",
        "CANCER (22 Juni - Juli 22)",
        "LEO (23 Juli - 23 Agustus)",
        "VIRGO (24 Agustus - 22 September)",
        "LIBRA (23 September - 23 Oktober)",
        "SCORPIO (24 Oktober - 22 November)",
        "SAGITARIUS (23 November - 21 Desember)"
    ]
}