import fs from 'fs'
import path from 'path'
import { nanoid } from 'nanoid'
import dayjs from 'dayjs'

const NUMBER_OF_COUPONS = 1000
const NUMBER_OF_COUPONS_BANKS = 10
const OUTPUT_DIRECTORY = 'coupons-banks'
const OUTPUT_FILE = 'coupons-bank'
const OUTPUT_FILE_EXTENSION = '.csv'

for (let i = 0; i < NUMBER_OF_COUPONS_BANKS; i++) {
    const coupons = []
    for (let i = 0; i < NUMBER_OF_COUPONS; i++) {
        coupons.push(nanoid(36))
    }
    const filename = `${OUTPUT_FILE}-${dayjs().format('YYYY-MM-DD')}-${dayjs().valueOf()}-${i+1}${OUTPUT_FILE_EXTENSION}`
    const pathname = path.join(OUTPUT_DIRECTORY, filename)

    fs.writeFile(pathname, coupons.join('\n'), function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log(`written ${NUMBER_OF_COUPONS} coupons in ${pathname}`)
        }
    })
}