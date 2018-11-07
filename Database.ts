const connection = {
  query(sql) {
    return Promise.resolve('some result')
  }
}

export function connect() {
  return Promise.resolve(connection)
}
