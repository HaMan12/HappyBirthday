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
    clickMe(){
      this.$refs.audioPlayer.play();
    }
  },
});
app.mount('#app');