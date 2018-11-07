const mockConnection = {
  query: jest.fn()
}

export const connect = jest.fn(() => Promise.resolve(mockConnection))

export function __getMockConnection() {
  return mockConnection
}
