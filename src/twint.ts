import { exec } from 'shelljs'
import { jsonPath } from './config'

export async function twint (username: string): Promise<void> {
  console.info(`Gathering tweets from ${username}...`)

  const twint = exec(`twint -u ${username} -o ${jsonPath}/${username}.json --json`, {
    async: true
  })

  return new Promise(resolve => {
    twint.stdout?.on('data', () => {})
      .on('close', () => resolve())
      .on('exit', () => resolve())
      .on('error', err => { throw err })
  })
}