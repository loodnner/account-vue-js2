let id = parseInt(window.localStorage.getItem('_idMax') || '0') 
function createId () {
  id++
  // 存储id
  window.localStorage.setItem('_idMax', id.toString())
  return id.toString()
}

export default createId