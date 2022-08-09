<template>
  <div class="section projects" id="project">
    <div class="subpgwrap">
        <div class="w1720 subtitle">
            <div class="anibox">
                <strong>Project</strong>
            </div>
        </div>
        <div class="w1440 subpg">
          <div class="cd_container">
              <div id="cdwrap" v-for="(cdwrap,i) in cdwraps" v-bind:key="i"  class="cdwrap">
                <a class="cdbox">
                  <div class="cdzip whitec" :style="{ 'background-color': cdwrap.color}" > 
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
                        <img src="../../public/image/icon/nodejs.png" alt="">
                      </div>
                      <div class="img_box">
                        <img src="../../public/image/icon/mysql.png" alt="">
                      </div>
                      <div class="img_box">
                        <img src="../../public/image/icon/photoshop.png" alt="">
                      </div>
                      <div class="img_box">
                        <img src="../../public/image/icon/ai.png" alt="">
                      </div>
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
                          <strong>Project</strong>
                        </div>
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
                    <div id="close" class="close_tab">
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
                          <p>- {{cdwrap.subtool4}}</p>
                        </div>
                        <div class="modal_sub">
                          <h2>작업기간 ></h2>
                          <p>{{cdwrap.time}}</p>
                        </div>
                        <div class="modal_button">
                          <a :href="cdwrap.link" target="_blank"> <img src="../../public/image/icon/playg.png"><span> 웹 보기</span></a>
                          <a class="more" :href="cdwrap.link2" target="_blank"><span>Detail</span></a>
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
//import func from 'vue-editor-bridge';

export default {
  name: 'intro-page',
   data() {
    return {
       cdwraps: [
      {project: "project 1",img: "./image/cd/seomoon.png",name:"Seomoon", color : "#4B177A", fontcolor : "#fff",
       tname: "서문시장 야시장 리뉴얼",
       name_sub : "Seomoon Market Renew" ,
       imgs: "./image/modal/seomoon.jpg",
       subcon:"기존의  서문시장야시장 웹사이트는 PC버전만 구현이 되어 있었습니다. 따라서 반응형 웹 구조를 만들기 위해 리뉴얼 하였고 리뉴얼 과정에서 UI,UX를 고려하여 여러 갈래로  나누어져 있던 메뉴 탭을 간소화 하는 작업을 진행 하였습니다.", 
       subtool1:"포토샵 : 메인페이지 이미지 및 로고디자인, 화면분할",
       subtool2:"HTML/CSS : 마크업 및 시안디자인 구현",
       subtool3:"JAVASCRIPT/JQUERY : 동적 코드작성 및 오픈소스 활용",
       subtool4:"MYSQL : DB활용하여 게시판 작성, 글쓰기, 수정",
       time : "2022.06 - 2022.06.28 ", 
       play : "서문시장야시장",
       link : "https://seomoon.herokuapp.com/",
       link2 : "https://thin-garlic-63f.notion.site/PROJECT-9f899a4e3a1843ee91f2c59c294b603e"
       },

      {project: "project 2",img: "./image/cd/alaska.png",name:"AlaskaTour",color : "#6FBFC5", fontcolor : "#000",
       tname: "알래스카 한인투어 리뉴얼",
       name_sub : "Alaska Tour Renew" ,
       imgs: "./image/modal/alaska.jpg",
       subcon:"기존의  알래스카한인투어 웹사이트는 PC버전만 구현이 되어 있었습니다. 따라서 반응형 웹 구조를 만들기 위해 리뉴얼 하였고 리뉴얼 과정에서 UI,UX를 고려하여 여러 갈래로  나누어져 있던 메뉴 탭을 간소화 하는 작업을 진행 하였습니다.", 
       subtool1:"포토샵 : 메인페이지 이미지 및 로고디자인, 화면분할",
       subtool2:"HTML/CSS : 마크업 및 시안디자인 구현",
       subtool3:"JAVASCRIPT/JQUERY : 동적 코드작성 및 오픈소스 활용",
       subtool4:"MYSQL : DB활용하여 게시판 작성, 글쓰기, 수정",
       time : "2022.07 - 2022.06.28 ", 
       play : "알래스카 한인투어",
       link : "https://alaskatravel.herokuapp.com/",
       link2 : "https://thin-garlic-63f.notion.site/80c2e24cf26f4b5ba4bbd7decc62ccfa"
      },

      {project: "project 3",img: "./image/cd/deldabang.png",name:"Deuldabang",color : "#C7EA3C",fontcolor : "#000",
       tname: "사회적기업 들다방 리뉴얼",
       name_sub : "Deuldabng Renew" ,
       imgs: "./image/modal/deuldabang.jpg",
       subcon:"기존 들다방사이트에 쇼핑몰 카테고리는 기존 페이지와 따로 분리가 되어 있었고 세부 카테고리가 중복이 되는 것이 많아 DEPTH 구조와 메인을 리뉴얼 하였습니다.", 
       subtool1:"포토샵 : 메인페이지 이미지 및 로고디자인, 화면분할",
       subtool2:"HTML/CSS : 마크업 및 시안디자인 구현",
       subtool3:"JAVASCRIPT/JQUERY : 동적 코드작성 및 오픈소스 활용",
       subtool4:"MYSQL : DB활용하여 게시판 작성, 글쓰기, 수정",
       time : "2022.07 - 2022.07.28 ", 
       play : "사회적기업 들다방",
       link : "https://deul.herokuapp.com/",
       link2 : "https://thin-garlic-63f.notion.site/eddd9d8d365e48c38ba9e76c22221831"
      },
      
      {project: "project 4",img: "./image/cd/growseed.png",name:"Growseed",color : "#cfc3b5",fontcolor : "#fff",
       tname: "GROWSEED",
       name_sub : "GROWSEED WEB MAKING" ,
       imgs: "./image/modal/growseed.jpg",
       subcon:"씨앗을 나눔 하며 묘목을 구매 할 수 있는 웹사이트, 어플을 제작하였습니다. VUE.js 를 활용하여 웹의 요소를 분할 하여 제작을 하였습니다.", 
       subtool1:"포토샵 : 메인페이지 이미지 및 로고디자인, 화면분할",
       subtool2:"HTML/CSS : 마크업 및 시안디자인 구현",
       subtool3:"JAVASCRIPT : 동적 코드작성 및 오픈소스 활용",
       subtool4:"MYSQL : DB활용하여 게시판 작성, 글쓰기, 수정",
       time : "2022.07.28 - 2022.08.04 ", 
       play : "GROW SEED",
       link : "https://portfolio-938d1.web.app/",
       link2 : "https://thin-garlic-63f.notion.site/GROWSEED-df9235a66aa645fb9aa72d3063be872e"
       }
    ],
    };
  },

  mounted(){

    const popOn = document.querySelectorAll('.cdbox');
    const modalOn = document.querySelectorAll('.modal');
    const modalbg = document.querySelectorAll('.modal_bg');
    const modalClose = document.querySelectorAll('.close_tab');

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

<style>

img{
  width: 100%;
  height: 100%;
}

</style>
