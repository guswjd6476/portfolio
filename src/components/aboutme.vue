<template>
  <div class="section abouts">
    <div class="subpgwrap">
        <div class="w1720 subtitle">
            <div class="anibox">
                <strong>About me</strong>
            </div>
        </div>
        <div class="w1440 subpg">
            <div class="divbox">
              <div class="left_box">
                <div class="img_box">
                  <img src="../../public/image/profile/khj.jpg">
                </div>
                <div class="name_box">
                  <div class="textbox">
                    <strong>KangHyun-Jung</strong>
                  </div>
                </div>
                <ul class="icon_box">
                  <li>
                    <a href="" class="icon">
                      <div class="img_box">
                        <img src="../../public/image/icon/insta.png" alt="인스타그램">
                      </div>
                      <strong>INSTAGRAM</strong>
                    </a>
                  </li>
                  <li>
                    <a href="" class="icon">
                      <div class="img_box">
                        <img src="../../public/image/icon/git.png" alt="깃허브">
                      </div>
                      <strong>GITHUB</strong>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="right_box">
                <div class="divbox">
                    <div class="anibox group" >
                      <div class="infobox">
                        <strong>Education</strong>
                        <h2>2022.02.22-2022.08.16 (900시간)</h2>
                        <p>[디지털컨버저스]스마트뷰(Vue)활용 프론트엔드 웹개발자 양성과정 이수</p>
                      </div>
                    </div>
                    <div class="anibox group">
                      <div class="infobox">
                        <strong>Career</strong>
                        <p>할리스커피 한성대점 매니저</p>
                        <p>이디야커피 상계백병원점 매니저</p>
                        <p>커피집단 삼성역점 바리스타</p>
                      </div>
                    </div>
                </div>
                  <div class="right_box group">
                    <div class="anibox">
                      <div class="skillbox">
                        <strong>Skill</strong>
                        <div class="img_contain">
                          <div class="img_wrap">
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
                                <img src="../../public/image/icon/vue.png" alt="">
                              </div>
                              <div class="img_box">
                                <img src="../../public/image/icon/mysql.png" alt="">
                              </div>
                              <div class="img_box">
                                <img src="../../public/image/icon/react.png" alt="">
                              </div>
                          </div> 
                          <p>웹표준에 맞게 문서 마크업 , 함수형 코드로 중복된 코드 개선,
                              제이쿼리 플러그인을 이용해 외부스크립트 이용 및 vue.js 사용이 가능합니다.
                          </p>
                          <p>Mysql 을 사용해 데이터베이스 관리가 가능합니다. </p>
                        </div>
                        <div class="img_contain">
                          <div class="img_wrap">
                              <div class="img_box">
                                <img src="../../public/image/icon/photoshop.png" alt="">
                              </div>
                              <div class="img_box">
                                <img src="../../public/image/icon/ai.png" alt="">
                              </div>
                              <div class="img_box">
                                <img src="../../public/image/icon/figma.png" alt="">
                              </div>
                          </div> 
                          <p>각 디자인 툴을 활용하여 다양한 효과를 만들 수 있습니다. </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>                              
              </div>
            <div class="anibox introduce">
                  <div class="infobox">
                    <strong>'꿈꾸는 크리에이터' 프론트엔드 개발자 강현정입니다.</strong>
                    <p>원자는 생명의 가장 작은 근원이 되면서도 그 하나의 개체로는 큰 가치를 가지지 못하지만, 그것들이 모여 물체가 되고 하늘이 된다는 어느 물리학 교수님의 말이 저에겐 큰 영감이 되었습니다.</p>
<p>손에 만져지지 않는 작은 코드들이 단 하나로서는 의미가 없지만, 그것을 개발하고 유용성 있게 조합해 나가면서 하나의 웹사이트가 되기도 하고, 물건을 설명해 주기도 하고, 보이지 않는 소리를 통해서 우리에게 가치를 전달해주는 이 과정은 저에게 너무나 가치가 있습니다.</p>
<p>주어진 개발자의 임무 뿐만 아니라 스스로의 개발, 그리고 꿈을 위한 개발을 끊임없이 노력하며 가장 최선이 무엇일지를 통찰하며 고민하여 최선의 결과물을 만들어 낼 것입니다.</p> 
<p>또한 사람들에게, 더 나아가서는 살아가면서 아쉬움을 가지며 살아가는 노인, 장애인 들에게도 편리성을 줄수 있는 개발자가 될 것입니다. </p>
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
  }
  .subpg>.divbox>.right_box{
    width: calc(100% - 340px);
     margin-left: 50px;
  }
 .subpg>.divbox>.right_box>.divbox{
  justify-content: left;
 }
 .subpg>.divbox>.right_box>.divbox>div{
  margin-right: 50px;
  width : 50%;
 }
  .subpg>.divbox>.left_box>.img_box{
    width: 340px;
    height: 340px;
  }
  .img_box img{
    width: 100%;
    height: 100%;
  }
  .name_box{
    padding: 10px 0;
  }
  .name_box .textbox strong{
    font-size: 38px;
    font-weight: 900;
    color: #000;
    position: relative;
    font-family: 'Noto Serif KR', serif;
  }
  .name_box .textbox{
    position: relative;
    width: 100%;
    height: 100%;
  }
  .name_box .textbox strong::before{
    content: '';
	  width: 100%;
	  height: 5px;
	  position: absolute;
	  bottom: -1px;
	  background: #FDE701;
	  transition: 0.3s ease-in-out;
  }
  .icon_box {
    padding: 10px 0 20px; 
  }
  .icon_box, .icon{
    display: flex;
    align-items: center;
  }
  .icon_box li{
    padding: 10px 30px 10px 0;
  }
  .icon .img_box{
    width: 40px;
    height: 40px;
    margin-right: 5px;
  }
  .icon strong{
    color: #000;
  }
  

  .infobox{
    margin-bottom: 20px;
  }
  .infobox p, .skillbox p{
    margin-bottom: 5px;
  }
  .infobox strong,.skillbox strong{
    font-size: 18px;
    color: #000;
    font-weight: 900;
  }
  .infobox strong{
    padding-bottom: 10px;
    display: block;
  }
  .infobox h2{
    color: #666;
  }
  .skillbox .img_wrap .img_box{
    width: 40px;
    height: 50px;
    margin-right: 20px;
  }
  .skillbox .img_wrap .img_box:last-child{
    margin-right: 0;
  }
  .skillbox .img_wrap{
    display: flex;
    margin-bottom: 10px;
    flex-wrap: wrap;
    justify-content: left;
  }
  .img_contain{
    padding: 20px 0;
  }
  .introduce{
    padding-top: 40px;
  }
  @media only screen and (max-width: 1240px) {
    .subpg>.divbox>.right_box>.divbox>div{
      margin-right: 10px;
    }
    .skillbox .img_wrap .img_box{
      width: 30px;
      height: 40px;
      margin-right: 5px;
    }
    .img_contain{
      padding: 10px 0px;
    }
    .infobox strong{
      padding-bottom: 10px;
    }
    .infobox p, .skillbox p{
      font-size: 15px;
    }
    .subpg>.divbox>.right_box{
      margin-left: 30px;
    }
  }
    @media only screen and (max-width: 720px) {
      .divbox{
        display: block;
      }
      .subpg>.divbox>.right_box>.divbox>div{
        width: 100%;
      }
      .subpg>.divbox>.left_box>.img_box{
        width: 100%;
        height: 100%;
      }
      .name_box .textbox{
        text-align: center;
      }
      .name_box .textbox strong{
        font-size: 30px;
      }
      .icon_box{
        justify-content: center;
      }
      .icon .img_box{
        width: 25px;
        height: 25px;
      }
      .group{
        padding: 20px 0;
      }
      .icon_box strong{
        font-size: 14px;
      }
      .subpg>.divbox>.right_box{
        width: 100%;
        margin-left: 0;
      }
     .introduce{
      padding-top: 20px;
     }
    }
</style>
