<template>
        <nav  class="navbar" :class="{ 'navbar--hidden': !showNavbar }">
    <div class="w1720 navwrap">
      <div class="logo">
        <a href="">
          <img src="image/logo/logo.png" class="logoo">
          <img src="image/logo/logoh.png" class="logoh">
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
  </template>
  
  <script>
  export default {
    name: 'intro-page',

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
   
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>
  