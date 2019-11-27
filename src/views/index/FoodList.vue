<template>
  
        <a href="javascript:" role="button">
          <div key="1" :title="item.name" class="container">
            <img
              :src="item.image_hash|contacturl"
            />
            <!---->
          </div>
          <span class="title">{{item.name}}</span>
        </a>
        
     
</template>

<script>
export default {
    props: ["item"]
}
</script>

<style lang="scss" scoped>
 a{
      display: inline-block;
      width: 64px;
      height: 50px;
      margin: 5px 0 0 5px;
      .container{
        display: inline-block;
        img{
          width: 47px;
          height: 47px;
        }
      }
      span{
        display: block;
        color: #666;
        font-size: 12px;
      }
    }
</style>