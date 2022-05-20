const { fetchUrl, isUrl } = require("../../lib/Function")
const request = require("request");
const topdf = require("image-to-pdf");
const fs = require("fs");

module.exports = {
    name: "doujindesupdf",
    alias: ["dnpdf"],
    use: "<url>",
    desc: "PDF Downloader From Doujindesu",
    type: "animeweb",
    example: `%prefix%command <url>`,
    start: async(killua, m, { text }) => {
        let count = 0
        let pages = []
        const get_result = await fetchUrl(`https://zenzapis.herokuapp.com/doujin?url=${isUrl(text)[0]}&key=andaracantik`)
        const doujin = await get_result.result
        const array_page = doujin.image
        const titles = doujin.title
        const title = titles.replace(/\s+/g, '')
        m.reply('Downloading...')
        for (let index = 0; index < array_page.length; index++) {
            const image_name = "temp/" + title + index + ".png"
            await new Promise((resolve) => request(array_page[index]).pipe(fs.createWriteStream(image_name)).on('finish', resolve))
            count++
            pages.push(image_name);
        }
        await new Promise((resolve) =>
            topdf(pages, 'A4')
            .pipe(fs.createWriteStream('temp/' + title + '.pdf'))
            .on('finish', resolve)
        )
        for (let index = 0; index < array_page.length; index++) {
            fs.unlink("temp/" + title + index + ".png", (err) => {
                if (err) throw err
            })
        }
        killua.sendFile(m.from, fs.readFileSync('temp/' + title + '.pdf'), `${title}.pdf`, m, { asDocument: true, thumbnail: doujin.image[0] })
        fs.unlinkSync('temp/' + title + '.pdf');
    },
    isQuery: true
}