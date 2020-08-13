new Vue({
    el:'#desafio',
    
    data: {
        nome: 'Thallita',
        idade: 24,
        link: 'https://files.cod3r.com.br/curso-vue.vue.jpg'
    },

    methods:{
        multiplicada: function(){
            return this.idade * 3
        },

        aleatorio: function(){
            return this.num = Math.random()
        },
    }

})
