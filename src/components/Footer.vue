<template>
  <div class="footer-container">

      <div class="setting-footer">
           <div>
 
           </div>
      </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@media screen and (min-width: 1180px){
    .footer-container{
        background-color: rgb(15, 36, 58);
        height:300px;
        bottom: 0;
    }
    .setting-footer{
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 100px;
        margin-left: 100px;
        margin-right: 100px;
        color: white;
    }
}

@media screen and (max-width: 1179px){
    .footer-container{
        background-color: rgb(15, 36, 58);
        height:300px;
        bottom: 0;
    }
    .setting-footer{
        margin-left: 45px;
        color: white;
    }
}



</style>