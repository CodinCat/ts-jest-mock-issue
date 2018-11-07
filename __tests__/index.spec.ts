import { connect, __getMockConnection } from '../Database'
//                ^^^^ getting type error here 
import { runSomeQuery } from '../index'

jest.mock('../Database')

test('runSomeQuery', async () => {
  await runSomeQuery()
  const mockConnection = __getMockConnection()
  expect(connect).toBeCalled()
  expect(mockConnection.query).toBeCalledWith('SOME QUERY')
})
