import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.1.4/vue.esm-browser.min.js';

const app = createApp({
  data() {
    return {
      level1:false,
      level2:true,
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
        loop:true,
        autoplay: {
          delay: 3000, 
          disableOnInteraction: false // 逗号移除
        },
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }
      }); 
      var swiper = new Swiper(".egg", {
        effect: "flip",
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    },
    clickMe(){
      this.$refs.audioPlayer.play();
    },
    changeSection(){
      this.level1=false;
      this.level2=true;
    },
  },
});
app.mount('#app');