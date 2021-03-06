import apiUtils from './apiUtils'
// http://qingmo.zohar.space/book_source/repository/
export const BookSource = (rid) => {
  return apiUtils.commonGet(`/book_source/repository`, 'noLoad')
}
export const BookSourceDescription = (code) => {
  return apiUtils.commonGet(`/book_source/description/${code}`, 'noLoad')
}

export const GetAllRepository = (code) => {
  return apiUtils.commonGet(`/git/repository.json`,'','noLoad')
  // /1212/斋书苑/details?link=/book/19002
}
export const SearchBook = ({code,name,key}) => {
  return apiUtils.commonGet(`/${code}/${name}/search?key=${key}`,'', 'noLoad')
}
export const GetBookDetail = (link,data) => {
  console.log(link,data,'link----')
  return apiUtils.commonGet(link, '' ,'noLoad')
}