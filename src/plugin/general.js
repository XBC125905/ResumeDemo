'use strict'

export default {
  install (Vue, options) {
    Vue.prototype.isMouseInDIV = function (e, div) {
      let oRect = div.getBoundingClientRect()
      if (e.pageX >= oRect.left && e.pageX <= oRect.left + oRect.width &&
        e.pageY >= oRect.top && e.pageY <= oRect.top + oRect.height) {
        return true
      } else {
        return false
      }
    }

    Vue.prototype.getSrcFromInput_file = function ({obj = undefined, maxSize = 2048 * 1024, index = 0}) {
      if (obj === undefined) {
        return undefined
      }
      let file = obj.files[index]

      if (window.URL) {
        if (file.size > maxSize) {
          alert(file.name + '文件大小：' + file.size + ' bytes，超出限制范围（' + maxSize + '）！')
          return undefined
        }

        /**
         * 创建一个object URL，并不是你的本地路径
         */
        return window.URL.createObjectURL(file)
      } else if (window.FileReader) {
        /**
         * opera不支持createObjectURL/revokeObjectURL方法。我们用FileReader对象来处理
         */
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function (e) {
          if (file.size > maxSize) {
            alert(file.name + '文件大小：' + e.total + ' bytes，超出限制范围（' + maxSize + '）！')
            return undefined
          }
          return this.result
        }
      } else {
        /**
         * ie
         */
        obj.select()
        obj.blur()
        let nfile = document.selection.createRange().text

        return nfile
      }
    }
  }
}
