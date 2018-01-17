'use strict'

import Vue from 'vue'
import Vuex from 'vuex'
import config from '../data/config'

Vue.use(Vuex)

/**
 *
 * @param obj
 * @returns {{}}
 */
let deepCopy = function (obj) {
  let newO = {}
  if (obj instanceof Array) {
    newO = []
  }
  for (let key in obj) {
    let val = obj[key]
    newO[key] = typeof val === 'object' ? deepCopy(val) : val
  }
  return newO
}

const state = {
  portraitImg: './static/assets/img/xbc2.png',
  sideItems: config.sideItems,
  bs: 0,
  showOverlay: 'none',
  editPortraitImg: 'none',
  editWeixinImg: 'none',
  mainItems: config.mainItems
}

const mutations = {
  dltSideItemsItemValue (state, options) {
    let newItems = deepCopy(state.sideItems[options.itemsIndex])
    delete newItems[options.valueIndex]
    state.sideItems.splice(options.itemsIndex, 1, newItems)
  },
  dltSideItemsItem (state, itemsIndex) {
    state.sideItems.splice(itemsIndex, 1)
  },
  addSideItemsItemValue (state, itemsIndex) {
    state.bs = Object.keys(state.sideItems[itemsIndex]).length - 3

    let newObj = deepCopy(state.sideItems[itemsIndex])

    while (newObj['新增_' + state.bs]) {
      state.bs++
    }

    newObj['新增_' + state.bs] = '新增_' + state.bs
    if (newObj.bs === 'img') {
      return
    }
    if (newObj.bs === 'progress') {
      newObj['新增_' + state.bs] = 80
    }

    state.sideItems.splice(itemsIndex, 1, newObj)
  },
  dltMainItemsItemValue (state, options) {
    let newItems = deepCopy(state.mainItems[options.itemsIndex])
    delete newItems[options.valueIndex]
    state.mainItems.splice(options.itemsIndex, 1, newItems)
  },
  dltMainItemsItem (state, itemsIndex) {
    state.mainItems.splice(itemsIndex, 1)
  },
  addMainItemsItemValue (state, itemsIndex) {
    state.bs = Object.keys(state.mainItems[itemsIndex]).length - 3

    let newObj = deepCopy(state.mainItems[itemsIndex])
    while (newObj['新增_' + state.bs]) {
      state.bs++
    }
    newObj['新增_' + state.bs] = '新增_' + state.bs

    state.mainItems.splice(itemsIndex, 1, newObj)
  },
  editSideItemsItemValue (state, options) {
    state.sideItems[options.itemsIndex][options.valueIndex] = options.value
  },
  showOverlay (state, str) {
    state.showOverlay = str
  },
  editPortraitImg (state, str) {
    state.editPortraitImg = str
  },
  editWeixinImg (state, str) {
    state.editWeixinImg = str
  },
  setWeixinImg (state, src) {
    for (let i = 0; i < state.sideItems.length; i++) {
      if (state.sideItems[i].bs === 'img' && state.sideItems[i].src) {
        state.sideItems[i].src = src
        break
      }
    }
  },
  setPortraitImg (state, src) {
    state.portraitImg = src
  }
}

const actions = {}

const getters = {}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
