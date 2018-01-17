<template>
  <ul class="info-list" v-if="sideItem.bs==='span'">
    <li v-for="(value,key,index) in sideItem" v-if="['class','title','bs'].indexOf(key) === -1"  v-on:mouseover="overShow($event,-1)" v-on:mouseout="outHide($event,-1)">
      <label class="left-label" contenteditable="true"  v-on:mouseover="overShow($event,0)"
             v-on:mouseout="outHide($event,0)">{{key}}</label><span class="label-value" contenteditable="true"  v-on:mouseover="overShow($event,0)"
                                                                    v-on:mouseout="outHide($event,0)">{{value}}</span><span
      class="item-remove" style="visibility: hidden;"  v-on:mouseover="overShow($event,0)"
      v-on:mouseout="outHide($event,0)"><i class="iconfont icon-delete"  v-on:mouseover="overShow($event,1)"
                                           v-on:mouseout="outHide($event,1)" v-on:click="deleteSideItemValue($event,sideItemIndex,key)"></i></span></li>
  </ul>
  <ul class="progress-list" v-else-if="sideItem.bs==='progress'">
    <li v-for="(value,key) in sideItem" v-if="['class','title','bs'].indexOf(key) === -1" v-on:mouseover="overShow($event,-1)" v-on:mouseout="outHide($event,-1)">
      <label class="left-label" contenteditable="true"   v-on:mouseover="overShow($event,0)"
             v-on:mouseout="outHide($event,0)">{{key}}</label>
      <progress v-bind:value="value" max="100"   v-on:mouseover="overShow($event,0)"
                v-on:mouseout="outHide($event,0)" v-on:click="changeSideItemsItemValue($event,sideItemIndex,key)"></progress>
      <span class="item-remove" style="visibility: hidden;"   v-on:mouseover="overShow($event,0)"
            v-on:mouseout="outHide($event,0)"><i class="iconfont icon-delete" v-on:mouseover="overShow($event,1)"
                                                 v-on:mouseout="outHide($event,1)"></i></span></li>
  </ul>
  <div class="weixin"  v-else-if="sideItem.bs==='img'">
    <img v-bind:src="sideItem.src" v-bind:alt="sideItem.title" v-on:click="openWeixinEditPanal">
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    name: 'side-info-list',
    props: {
      sideItem: Object,
      sideItemIndex: Number
    },
    methods: {
      ...mapMutations({
        dltSideItemsItemValue: 'dltSideItemsItemValue',
        editSideItemsItemValue: 'editSideItemsItemValue',
        showOverlay: 'showOverlay',
        editPortraitImg: 'editPortraitImg',
        editWeixinImg: 'editWeixinImg'
      }),
      deleteSideItemValue (event, sideItemIndex, Index) {
        this.dltSideItemsItemValue({itemsIndex: sideItemIndex, valueIndex: Index})
      },
      changeSideItemsItemValue (event, sideItemIndex, Index) {
        let value = event.offsetX / event.target.clientWidth / 0.8 * event.target.max
        this.editSideItemsItemValue({itemsIndex: sideItemIndex, valueIndex: Index, value: value})
      },
      overShow (event, bs) {
        let ele1
        if (bs === -1) {
          ele1 = event.target.querySelectorAll('span[class=item-remove]')
        } else if (bs === 0) {
          ele1 = event.target.parentNode.querySelectorAll('span[class=item-remove]')
        } else if (bs === 1) {
          ele1 = event.target.parentNode.parentNode.querySelectorAll('span[class=item-remove]')
        }

        for (let i = 0; i < ele1.length; i++) {
          if (ele1[i]) {
            ele1[i].style.visibility = 'visible'
          }
        }
      },
      outHide (event, bs) {
        let ele1
        if (bs === -1) {
          ele1 = event.target.querySelectorAll('span[class=item-remove]')
        } else if (bs === 0) {
          ele1 = event.target.parentNode.querySelectorAll('span[class=item-remove]')
        } else if (bs === 1) {
          ele1 = event.target.parentNode.parentNode.querySelectorAll('span[class=item-remove]')
        }

        for (let i = 0; i < ele1.length; i++) {
          if (ele1[i] && !this.isMouseInDIV(event, ele1[i].parentNode)) {
            ele1[i].style.visibility = 'hidden'
          }
        }
      },
      openWeixinEditPanal: function () {
        this.editPortraitImg('none')
        this.editWeixinImg('inline-block')
        this.showOverlay('block')
      }
    }
  }
</script>

<style scoped>

</style>
