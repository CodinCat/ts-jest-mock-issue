import { connect } from './Database'

export async function runSomeQuery() {
  const connection = await connect()
  const result = await connection.query('SOME QUERY')
  return result
}
