<template>
    <div>
        <v-header :seller="seller"></v-header>
            <div class="tab ">
                <div class="tab-item">
                    <router-link to="/goods">商品</router-link>
                </div>
                <div class="tab-item">
                    <router-link to="/ratings">评价</router-link>
                </div>
                <div class="tab-item">
                    <router-link to="/seller">商家</router-link>
                </div>
            </div>
            <keep-alive>
              <router-view :seller="seller"></router-view>
            </keep-alive>
    </div>
</template>

<script type="ecmascript-6">
import header from './components/header/header.vue'
import {urlParse} from './common/js/unit.js'
export default {
  data(){
    return {
        seller:{
          id:(()=>{
            let queryParam = urlParse()
            return queryParam.id
          })()
        }
    }
  },
  created() {
    //在url里加入参数id可以区分不同商家的数据，返回不同的seller数据
    this.$http.get('./api/seller?id='+this.seller.id).then((response) => {
        response = response.body;
        if(response.errno === 0){
            // this.seller = response.data;
            //给this.seller扩展属性，保留id属性
            this.seller = Object.assign({}, this.seller, response.data);
            console.log(this.seller.id)
        }
    })
  },
  components:{
    'v-header':header
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import './common/stylus/mixin.styl';

  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-1px(rgba(7,17,27,.1))
    bg-imgae('brand')
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: 14px
        color: rgb(77,85,93)
        &.active
            color:rgb(240,20,20)

</style>
