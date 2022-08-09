<template>
  <div class="section intros">
    <div class="videowrap">
      <video autoplay muted loop>
        <source src="../../public/image/intro.mp4">
      </video>
    </div>
    <div class="textwrap">
      <div class="w1720">
        <div class="textbox yc">
          <strong>Never not regret it.</strong>
        </div>
        <div class="textbox bc">
          <strong>Be strong,</strong>
        </div>
        <div class="textbox bc">
          <strong>and courageous</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'intro-page',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section{
  width : 100%;
  height : 100vh;
}
.videowrap{
  position: relative;
  width: 100%;
  height: 100%;
}
.videowrap>video{
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  object-fit: cover
}
.textwrap{
  width: 100%;
  position: absolute;
  bottom: 5%;
  left: 0;
}
.textwrap .w1720{
  padding: 0 20px;
}
.textbox strong{
  font-family: 'Noto Serif KR', serif;
  font-size: 54px;
  font-weight: 900;
}

@media only screen and (max-width: 1240px) {
  .textbox strong{
  font-size: 32px;
  font-weight: 900;
}
   
}
@media only screen and (max-width: 720px) {
  .section{
    width:100%;
    height : 100vh;
  }
  
}
</style>
