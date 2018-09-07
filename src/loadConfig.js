let config = null

function myajax (method, url) {
  let ajax = new XMLHttpRequest()
  ajax.open(method, url, false)
  ajax.onreadystatechange = function () {
    if (ajax.readyState === 4 && ajax.status === 200) {
        config = JSON.parse(ajax.responseText)
    }
  }
  ajax.send()
}
myajax('GET', '/VueApp_config.json')
export default config
