let app = Vue.createApp({
    data:function() {
        return {
            greeting:'Hello vue 3!',
            isShow : true,
            isVisible : false,
            isVisible2 : true,
            wallah : ''
        }
    },
    methods : {
        toggleBox() {
            this.isVisible = !this.isVisible
        },
        greet(greeting) {
            this.wallah = `You pressed Enter : ${greeting}`
        }
    }
})
app.mount('#hello')