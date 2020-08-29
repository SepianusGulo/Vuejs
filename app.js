new Vue({
    el:'#app',
    data : {
        title :'Selamat datang di Vue Js',
        name : 'Babastudio'
    },
    methods:{
        greet(){
            return `Hallo Teman-teman $(this.name)`
        }
    }
});