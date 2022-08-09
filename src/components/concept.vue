<template>
  <div class="section concepts">
    <div class="subpgwrap">
        <div class="w1720 subtitle">
            <div class="anibox">
                <strong>Concept</strong>
            </div>
        </div>
        <div class="w1440 subpg">
            <div class=" divbox">
              <div class="titlebox anibox">
                <div class="logo_box logo">
                  <img src="../../public/image/logo/logo.png" class="logoo">
                  <img src="../../public/image/logo/logoh.png" class="logoh">
                </div>
              </div>
              <div class="valuesbox">
                <div class="textbox">
                  <p>
                    이름이 가지고 있는 뜻인 '나타날 현' 자에 가지고 있는 의미를 생각해 보았습니다.  
                  </p> 
                  <p>구슬옥 과 볼견자가 합쳐진 한자로 세상에 무수히 많은 보이지 않는 유용성과 편리를 찾고 그것을 행복으로 만들어 내는 '가치 있는 것' 을 '발견' 하는 개발자가 되고 싶습니다.</p> 
                </div>
              </div>
            </div>
            <div class="divbox">
              <div class="titlebox">
                <div class="anibox textbox yc">
                  <strong>
                    Never not
                  </strong>
                </div>
                <div class="anibox textbox yc">
                  <strong>
                    regret it
                  </strong>
                </div>
              </div>
              <div class="valuesbox">
                <div class="textbox">
                  <p>
                    저의 첫번째 가치관으로써 ‘후회하는 시간 만큼 아까운 것이 없다’ 라는 생각으로 개인의 선택과 결정에 
                    최선을 다하고자 하는 의지를 담고 있습니다.
                  </p> 
                  <p>늦게 프론트엔드의 커리어를 쌓아가는 시작점에서 스스로 후회하지 않고 최선을 다하겠다는 생각입니다.</p> 
                </div>
              </div>
            </div>
            <div class="divbox">
              <div class="titlebox">
                <div class="textbox bc">
                  <strong>
                    Be strong,
                  </strong>
                </div>
                <div class="textbox bc">
                  <strong>
                    and courageous
                  </strong>
                </div>
              </div>
              <div class="valuesbox">
                <div class="textbox">
                  <p>
                    저의 두번째 가치관으로써 ‘강하고 담대하자’ 라는 의미를 가지고 있습니다. 
                  </p>
                  <p>
                    개인이 가진 나약함과 단점에 집중을 하게 되면 두려움이 생기게 되지만, 해야 할 일과 꿈에 집중하며 
                    부족한 실력이지만 두려움보다는 담대함을 최선을 다하자 라는 의지를 담고 있습니다.
                  </p>
                </div>
              </div>
            </div>
            <div class="divbox artbox">
              <div class="titlebox">
                <div class="img_box">
                  <img src="../../public/image/cd/cdzip.png" alt="">
                </div>
                <div class="img_box">
                  <img src="../../public/image/profile/seomoonmodal.jpg" alt="">
                </div>
              </div>
              <div class="valuesbox">
                <div class="textbox">
                  <p>
                    포트폴리오 소개 방식에 대해 고민을 하다, 평소에 관심을 가지고 있던 대중예술 및 음악적인 표현으로 만들어 봐야겠다는 생각이 들었습니다.
                  </p>
                  <p>
                    음악 안에서도 전체적인 중심을 잡아주는 베이스와 인상을 남기는 멜로디가 있는 것 처럼 웹을 만드는 과정에서도 베이스 음악과 같은 편의성과, 귓가에 인상을 남길수 있는 멜로디 같은 디자인을 구성하는 개발자가 되고 싶습니다. 
                  </p>
                </div>
              </div>
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
.divbox{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}
.logo_box{
  width: 260px;
  height: 130px;
  position: relative;
}
.anibox{
  position: relative;
}

.logo_box img{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.titlebox{
  width: 40%;
}
.valuesbox{
  width: calc(60%);
}
.titlebox>.textbox strong{
  font-size: 42px;
  font-weight: 900;
  font-family: 'Noto Serif KR', serif;
}
.valuesbox>.textbox p{
  font-size: 16px
}
.artbox .img_box {
  width: 200px;
  padding-right: 20px;
}
.artbox .titlebox{
  display: flex;
}

@media only screen and (max-width: 1240px) {
.titlebox>.textbox strong{
  font-size: 36px;
 }
}
   

@media only screen and (max-width: 720px) {
  .subpg>.divbox{
    display: block;
  }
  .subpg>.divbox>.titlebox,.subpg>.divbox>.valuesbox{
    width: 100%;
  }
  .subpg>.divbox>.titlebox{
    padding-bottom: 20px;
  }
 .titlebox>.textbox strong{
  font-size: 28px;
 }
 .divbox{
  padding: 20px 0px;
 }
 .divbox.artbox{
  display: block;
}
.titlebox{
  width: 45%;
}
.valuesbox{
  width: 55%;
}
.artbox .valuesbox{
  width: 100%;
}
.valuesbox>.textbox p{
  font-size: 14px
}

.artbox .titlebox{
  width:  100%;
  padding-bottom: 20px;
}
.logo_box{
  width: 100%;
  margin-left: 0;
}

}



</style>
