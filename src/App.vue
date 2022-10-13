<template>
  <Navigation></Navigation>
  <intro id="intro"></intro>
  <about id="about"></about>
  <concept id="concept"></concept>
  <webclone id="webclone"></webclone>
  <project id="project"></project>
  <contact id="contact"></contact>
  <Footer></Footer>
</template>

<script>
import intro from './components/intro.vue'
import about from './components/aboutme.vue'
import concept from './components/concept.vue'
import project from './components/project.vue'
import webclone from './components/webclone.vue'
import contact from './components/contact.vue'
import Footer from './components/Footer.vue'
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  
  components: {
    intro,
    about,
    concept,
    webclone,
    project,
    contact,
    Footer,
    Navigation
},
  
}
</script>

<style>
 
</style>
