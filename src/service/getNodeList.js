export async function getList () {
  const request = await fetch('./dataList.json')
  const responseList = await request.json()

  return responseList
}
