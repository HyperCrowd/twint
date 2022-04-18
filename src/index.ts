require('dotenv').config()
import { twint } from './twint'

/**
 * 
 */
async function hasCommand(list: string[], onMatch: (list: string[]) => any) {
  for (const arg of process.argv) {
    if (list.indexOf(arg) > -1) {
      return onMatch(process.argv)
    }
  }
}

async function main () {
  const username = process.argv[process.argv.length - 1].toLowerCase()

  await hasCommand(['-c', '--capture'], async () => {
    console.log(`Capturing tweets for ${username}...`)
    await twint(username) // @TODO add yargs or something idk
    console.log('Tweets captured')
  })
}

main()
