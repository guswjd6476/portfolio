<template>
  <div class="section contacts">
    <div class="subpgwrap">
        <div class="w1720 subtitle">
            <div class="anibox">
                <strong>Contact</strong>
            </div>
        </div>
        <div class="video_wrap">
          <div class="videoban">
              <video style="width:100%; height:100%; object-fit: cover;;" autoplay muted loop>
                  <source src="../../public/image/contact.mp4">
              </video>           
          </div>
          <div class="textwrap">
              <div class="w1440">
                  <div class="left_box">
                    <div class="textbox">
                        <strong>Thank you for watching</strong>
                    </div>
                  </div>
                  <div class="right_box">
                    <div class="textbox">
                        <p>Tel.  : 01087216354</p>
                    </div>
                    <div class="textbox">
                      <a href='mailto:sspp4555@naver.com'>
                        <p>sspp4555@naver.com</p>
                      </a>
                    </div>
                    <div class="textbox">
                        <a href="이력서.pdf" download class="pushbox">
                          <div class="imgbox">
                            <img src="../../public/image/icon/down.png" alt="">
                          </div>
                          <p>이력서 다운로드</p>
                        </a>  
                    </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'intro-page'

  
}
</script>

<style scoped>
.subpgwrap{
  padding: 50px 0px 150px;
}
.subtitle strong{
  color: #fff;
}

.video_wrap{
  padding-bottom: 180px;
  margin-top: -60px;
  height: 100%;
  width: 100%;
}
.videoban{
    height: 300px;
    width: 100%;
    position: relative;
    z-index: -1;
    overflow: hidden;
}
.videoban::before{
  position: absolute;
  content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0,0.4);
    z-index: 1;
}
.videoban video{
    position: relative;
    height: 100%;
}
.textwrap{
  width: 100%;
  position: absolute;
  z-index: 3;
  padding: 30px 0;
}
.textwrap .w1440{
  padding: 0 20px;
}
.textbox strong{
  font-size: 48px;
  font-weight: 900;
  color: #000;
}
.textwrap .left_box{
  margin-bottom: 50px;
}
.textwrap .right_box{
  display: flex;
  justify-content: left;
}
.textwrap .right_box .textbox:not(:last-child){
  padding: 0px 40px 10px 0px;
}
.right_box .textbox p{
  font-size: 20px;
  font-weight: 900;
  color: #000;
}

.pushbox{
  display: flex;
  align-items: center;
}
.textbox .imgbox {
  width: 30px;
  height: 25px;
  margin-right: 10px;
}
.textbox .imgbox img{
  width: 100%;
  height: 100%;
}
.textbox button{
  font-size: 16px;
  cursor: pointer;

}

  @media only screen and (max-width: 1240px) {
    .textbox strong{
      font-size: 42px;
    }
    .right_box .textbox strong{
      font-size: 22px;
    }
  }
  @media only screen and (max-width: 900px) {
    .textwrap .right_box{
      flex-wrap: wrap;
    }
    .subpgwrap{
      padding: 40px 0 80px;
    }
  }
  @media only screen and (max-width: 720px) {
    
    .textbox strong{
      font-size: 22px;
    }
    .right_box .textbox p{
      font-size: 16px;
    }
    .video_wrap{
      padding-bottom: 160px;
      margin-top: -50px;
    }
    .videoban{
        height: 200px;
    }
    .textwrap>.w1440{
      display: block;
      padding: 0 10px;
    }
    .textwrap .left_box{
      margin-bottom: 20px;
    }
  }
</style>
