import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.1.4/vue.esm-browser.min.js';

const app = createApp({
  data() {
    return {
      leval:false,
      level1:true,
      level2:false,
      level3:false,
    };
  },
  mounted(){
    AOS.init();
    this.initSwiper();
  },
  methods: {
    initFullpag(){
        var page = new FullPage("#main",{
            section: '.section',
            animationDuration: 700,
            animationTiming: 'ease',
            animationTranform: 'transform',
            pagination: false,
            keyboard: true,
            touch: true,
            touchLimit: 100,
            loop: false,
            onLeave: null,
            afterLoad: null,
             
        });    
    },
    initSwiper(){
      var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        autoplay: {
          delay: 2000, 
          disableOnInteraction: false, 
        },
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        // pagination: {
        //   el: ".swiper-pagination",
        // },
      });
    },
    clickMe(){
      this.$refs.audioPlayer.play();
    }
  },
});
app.mount('#app');