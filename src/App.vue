<template>
<nav  class="navbar" :class="{ 'navbar--hidden': !showNavbar }">
  <div class="w1720 navwrap">
    <div class="logo">
      <a href="">
        <img src="../public/image/logo/logo.png" class="logoo">
        <img src="../public/image/logo/logoh.png" class="logoh">
      </a>
    </div>
    <ul id="navi" class="navi" >
      <li class="tab on" v-on:click="gotointro">Intro</li>
      <li class="tab" v-on:click="gotoabout">About</li>
      <li class="tab" v-on:click="gotoconcept">Concept</li>
      <li class="tab" v-on:click="gotowebclone">Webclone</li>
      <li class="tab" v-on:click="gotoproject">Project</li>
      <li class="tab" v-on:click="gotocontact">Contact</li>
    </ul>
    <div id="btn_ham"  class="btn_ham">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</nav>
  <intro id="intro"></intro>
  <about id="about"></about>
  <concept id="concept"></concept>
  <webclone id="webclone"></webclone>
  <project id="project"></project>
  <contact id="contact"></contact>
<footer>
  <div class="w1440 textbox">
    <p>Copyrightⓒ2022. 강현정. All rights reserved.</p>
    <p>본 사이트는 상업적 목적이 아닌 개인 포트폴리오 사이트로 제작되었습니다.</p>
  </div>
</footer>
</template>

<script>
import intro from './components/intro.vue'
import about from './components/aboutme.vue'
import concept from './components/concept.vue'
import project from './components/project.vue'
import webclone from './components/webclone.vue'
import contact from './components/contact.vue'

export default {
  name: 'App',
  data () {
    return {
      showNavbar: true,
      lastScrollPosition: 0
    }
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.onScroll)
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll);
    const btn_h = document.getElementById('btn_ham')
    
    btn_h.addEventListener("click",function(){
      const nav = document.querySelector('.navi')
      nav.classList.toggle('active');
    })



   const sectionsContainer = document.querySelector('#app');
    const sections = document.querySelectorAll('.section');
    const nav = document.querySelector('.navbar');
    const menu = nav.querySelector('.navi');
    const links = nav.querySelectorAll('.tab');
    const sectionOffset = nav.offsetHeight + 24;
    const activeClass = 'on';
    let activeIndex = 0;
    let isScrolling = true;
    let userScroll = true;

    const setActiveClass = () => {
      links[activeIndex].classList.add(activeClass);
    };

    const removeActiveClass = () => {
      links[activeIndex].classList.remove(activeClass);
    };

  

    const setMenuLeftPosition = position => {
      menu.scrollTo({
        left: position,
        behavior: 'smooth',
      });
    };

    const checkMenuOverflow = () => {
      const activeLink = links[activeIndex].getBoundingClientRect();
      const offset = 30;
      
      if (Math.floor(activeLink.right) > window.innerWidth) {
        setMenuLeftPosition(menu.scrollLeft + activeLink.right - window.innerWidth + offset);
      } else if (activeLink.left < 0) {
        setMenuLeftPosition(menu.scrollLeft + activeLink.left - offset)
      }
    }

    const handleActiveLinkUpdate = current => {
      removeActiveClass();
      activeIndex = current;
      checkMenuOverflow();
      setActiveClass();
    };

    const init = () => {
      document.documentElement.style.setProperty('--section-offset', sectionOffset);
    }

    links.forEach((link, index) => link.addEventListener('click', () => {
      userScroll = false;
      handleActiveLinkUpdate(index);
    }))

    window.addEventListener("scroll", () => {
      const currentIndex = sectionsContainer.getBoundingClientRect().top < 0
        ? (sections.length - 1) - [...sections].reverse().findIndex(section => window.scrollY >= section.offsetTop - sectionOffset * 2)
        : 0;
      
      if (userScroll && activeIndex !== currentIndex) {
        handleActiveLinkUpdate(currentIndex);
      } else {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(() => userScroll = true, 100); 
      }
    });

    init();

  },
 
  methods: {
    gotocontact() {
      const contact = document.getElementById('contact')
      if(contact){
        contact.scrollIntoView({behavior : 'smooth'})

      }
    },
    gotointro() {
      const intro = document.getElementById('intro')
      if(intro){
        intro.scrollIntoView({behavior : 'smooth'})
      }
    },
    gotoabout() {
      const about = document.getElementById('about')
      if(about){
        about.scrollIntoView({behavior : 'smooth'})
      }
    },
    gotoconcept() {
      const concept = document.getElementById('concept')
      if(concept){
        concept.scrollIntoView({behavior : 'smooth'})
      }
    },
    gotowebclone() {
      const webclone = document.getElementById('webclone')
      if(webclone){
        webclone.scrollIntoView({behavior : 'smooth'})
      }
    },
    gotoproject() {
      const project = document.getElementById('project')
      if(project){
        project.scrollIntoView({behavior : 'smooth'})
      }
    },    
    onScroll () {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
        if (currentScrollPosition < 0) {
          return
        }
        if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
          return
        }
        this.showNavbar = currentScrollPosition < this.lastScrollPosition
        this.lastScrollPosition = currentScrollPosition
      }
  },
  components: {
    intro,
    about,
    concept,
    webclone,
    project,
    contact,
  },
  
}
</script>

<style>
 
</style>
