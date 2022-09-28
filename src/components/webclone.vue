<template>
  <div class="section webclones">
    <div class="subpgwrap">
        <div class="w1720 subtitle">
            <div class="anibox">
                <strong>Webclone</strong>
            </div>
        </div>
        <div class="w1440 subpg">
          <div class="cd_container">
              <div v-for="(cdwrap,i) in cdwraps" v-bind:key="i"  class="cdwrap">
                <a  class="cdbox">
                  <div class="cdzip" :style="{ 'background-color': cdwrap.color, 'color':cdwrap.fontcolor}">
                  </div>
                  <div class="cdzip_text" :style="{ 'color':cdwrap.fontcolor}">
                      <div class="anibox project_t">
                        <div class="textbox">
                          <h2>{{cdwrap.project}}</h2>
                        </div>
                      </div>
                      <div class="anibox project_n">
                        <div class="textbox">
                          <strong>{{cdwrap.name}}</strong>
                        </div>
                        <div class="textbox">
                          <strong>Webclone</strong>
                        </div>
                    </div>
                  </div>
                  <div class="anibox icon_box">
                      <div class="img_box">
                        <img src="../../public/image/icon/html.png" alt="">
                      </div>
                      <div class="img_box">
                        <img src="../../public/image/icon/css.png" alt="">
                      </div>
                      <div class="img_box">
                        <img src="../../public/image/icon/js.png" alt="">
                      </div>
                      <div class="img_box">
                        <img src="../../public/image/icon/jq.png" alt="">
                      </div>
                      <div class="img_box">
                        <img src="../../public/image/icon/photoshop.png" alt="">
                      </div>
                    </div> 
                  <div class="cdimg">
                    <img :src="cdwrap.img" alt="">
                  </div>
                </a>
                <div class="w1440 modal">
                  <div class="modal_h">
                    <div class="img_box">
                      <img src="../../public/image/logo/logow.png" alt="">
                    </div>
                    <div id="close" class="close_tab" >
                      <span>X</span>
                    </div>
                  </div>
                  <div class="modal_m">
                    <div class="modal_box">
                      <div class="modal_left">
                        <div class="img_box">
                          <img :src="cdwrap.imgs" alt="">
                        </div>
                      </div>
                      <div class="modal_right">
                        <div class="modal_title">
                          <h2>{{cdwrap.tname}}</h2>
                          <p>{{cdwrap.name_sub}}</p>
                        </div>
                        <div class="modal_sub">
                          <h2>설명 ></h2>
                          <p>{{cdwrap.subcon}}
                          </p>
                        </div>
                        <div class="modal_sub">
                          <h2>사용한 툴 ></h2>
                          <p>- {{cdwrap.subtool1}}</p>
                          <p>- {{cdwrap.subtool2}}</p>
                          <p>- {{cdwrap.subtool3}}</p>
                        </div>
                        <div class="modal_sub">
                          <h2>작업기간 ></h2>
                          <p>{{cdwrap.time}}</p>
                        </div>
                        <div class="modal_button">
                          <a :href="cdwrap.link" target="_blank"> <img src="../../public/image/icon/playg.png"><span> 웹 자세히 보기</span></a>
                        </div>
                      </div>
                    </div>
                  </div>   
                  <div class="modal_f">
                    <div class="modal_box">
                      <div class="img_box">
                        <img :src="cdwrap.imgs" alt="">
                      </div>
                      <div class="title_box">
                        <strong>{{cdwrap.play}}</strong>
                        <p>강현정</p>
                      </div>
                      <div class="play_box">
                        <div class="img_box">
                          <img src="../../public/image/icon/replay.png" alt="">
                        </div>
                        <div class="img_box">
                          <img src="../../public/image/icon/prevprev.png" alt="">
                        </div>
                        <div class="img_box">
                          <img src="../../public/image/icon/play.png" alt="">
                        </div>
                        <div class="img_box">
                          <img src="../../public/image/icon/nextnext.png" alt="">
                        </div>
                        <div class="img_box">
                          <img src="../../public/image/icon/random.png" alt="">
                        </div>
                      </div>
                    </div>
                  </div>             
                </div>
                <div class="modal_bg"></div>
              </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'intro-page',
  data() {
    return {
       cdwraps: [
      {project: "Webclone 1",img: "./image/cd/single.png",name:"S.house", color : "#009A3E", fontcolor : "#fff",
        tname: "싱그러운집 웹 클론",
       name_sub : "S.house Web Clone" ,
       imgs: "./image/modal/single.jpg",
       subcon:"기존의  서문시장야시장 웹사이트는 PC버전만 구현이 되어 있었습니다. 따라서 반응형 웹 구조를 만들기 위해 리뉴얼 하였고 리뉴얼 과정에서 UI,UX를 고려하여 여러 갈래로  나누어져 있던 메뉴 탭을 간소화 하는 작업을 진행 하였습니다.", 
       subtool1:"포토샵 : 메인페이지 이미지 및 로고디자인, 화면분할",
       subtool2:"HTML/CSS : 마크업 및 시안디자인 구현",
       subtool3:"JAVASCRIPT/JQUERY : 동적 코드작성 및 오픈소스 활용",
       time : "2022.04.14 - 2022.04.24 ", 
       play : "싱그러운집" ,
       link : "http://guswjd6476.dothome.co.kr/single_house/practice.html"
      },
      {project: "Webclone 2",img: "./image/cd/pollexcd.png",name:"Pollexzone",color : "#D0E6C8", fontcolor : "#000",
         tname: "폴렉스존 웹 클론",
       name_sub : "Pollexzone Web Clone" ,
       imgs: "./image/modal/pollex.jpg",
       subcon:"기존의  서문시장야시장 웹사이트는 PC버전만 구현이 되어 있었습니다. 따라서 반응형 웹 구조를 만들기 위해 리뉴얼 하였고 리뉴얼 과정에서 UI,UX를 고려하여 여러 갈래로  나누어져 있던 메뉴 탭을 간소화 하는 작업을 진행 하였습니다.", 
       subtool1:"포토샵 : 메인페이지 이미지 및 로고디자인, 화면분할",
       subtool2:"HTML/CSS : 마크업 및 시안디자인 구현",
       subtool3:"JAVASCRIPT/JQUERY : 동적 코드작성 및 오픈소스 활용",
       time : "2022.05.24 - 2022.06.02 ", 
       play : "폴렉스존" ,
       link : "http://guswjd6476.dothome.co.kr/pollexzone/pollexzone.html"
       },
      {project: "Webclone 3",img: "./image/cd/dcaf.png",name:"DCAF",color : "#FFC000",fontcolor : "#000",
       tname: "대전문화재단 웹 클론",
       name_sub : "DCAF Web Clone" ,
       imgs: "./image/modal/dcaf.jpg",
       subcon:"기존의  서문시장야시장 웹사이트는 PC버전만 구현이 되어 있었습니다. 따라서 반응형 웹 구조를 만들기 위해 리뉴얼 하였고 리뉴얼 과정에서 UI,UX를 고려하여 여러 갈래로  나누어져 있던 메뉴 탭을 간소화 하는 작업을 진행 하였습니다.", 
       subtool1:"포토샵 : 메인페이지 이미지 및 로고디자인, 화면분할",
       subtool2:"HTML/CSS : 마크업 및 시안디자인 구현",
       subtool3:"JAVASCRIPT/JQUERY : 동적 코드작성 및 오픈소스 활용",
       time : "2022.06.02 - 2022.06.07 ", 
       play : "대전문화재단"  ,
       link : "http://guswjd6476.dothome.co.kr/daejeon/daejeon.html"
       },
      {project: "Webclone 4",img: "./image/cd/eyeomo.png",name:"Eyeomo",color : "#FFA4C0",fontcolor : "#fff",
       tname: "어여모 웹 클론",
       name_sub : "Eyeomo Web Clone" ,
       imgs: "./image/modal/eyeomo.jpg",
       subcon:"기존의  서문시장야시장 웹사이트는 PC버전만 구현이 되어 있었습니다. 따라서 반응형 웹 구조를 만들기 위해 리뉴얼 하였고 리뉴얼 과정에서 UI,UX를 고려하여 여러 갈래로  나누어져 있던 메뉴 탭을 간소화 하는 작업을 진행 하였습니다.", 
       subtool1:"포토샵 : 메인페이지 이미지 및 로고디자인, 화면분할",
       subtool2:"HTML/CSS : 마크업 및 시안디자인 구현",
       subtool3:"JAVASCRIPT/JQUERY : 동적 코드작성 및 오픈소스 활용",
       time : "2022.06.08 - 2022.06.12 ", 
       play : "어여모"  ,
       link : "http://guswjd6476.dothome.co.kr/eyeomo/sub/eoyeomo_main.html"
      }
    ]
    };
  },
//   methods: {
//    mouseover:function(e){
//             var cdimg = e.target.querySelector(".cdimg");
//             cdimg.animate([
//           {left: "40%", transform: "rotate(300deg)" }
//       ], {
//           duration: 1500,
//           fill: "forwards"
//       });         
//         },
//         mouseleave:function(e){
//             var cdimg = e.target.querySelector(".cdimg");
//             cdimg.animate([
//           {left: "20%", transform: "rotate(0deg)" }
//       ], {
//           duration: 1500,
//           fill: "forwards"
//       });
      
//   }
// },
mounted(){

    const popOn = document.querySelectorAll('.cdbox');
    const modalOn = document.querySelectorAll('.modal');
    const modalClose = document.querySelectorAll('.close_tab');
    const modalbg = document.querySelectorAll('.modal_bg');
    

    popOn.forEach(function(el, idx){
      el.onclick = function(){
        modalOn[idx].style.display = 'flex';
        modalbg[idx].style.display = 'block';
      }
    });
    
      modalClose.forEach(function(el, idx){
        el.onclick = function(){
          modalOn[idx].style.display = 'none';
          modalbg[idx].style.display = 'none';
      }
    });
    modalbg.forEach(function(el, idx){
        el.onclick = function(){
          modalOn[idx].style.display = 'none';
        modalbg[idx].style.display = 'none';

      }
    });



  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.single{
  background-color: #009A3E;
}
.pollex{
  background-color: #D0E6C8;
}
.dcaf{
  background-color: #FFC000;
}
.eyeomo{
  background-color: #FFA4C0;
}
img{
  width: 100%;
  height: 100%;
}

</style>
