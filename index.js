//-------------------------------------------------------------------
// Declarative Rendering---------------------------------------------
var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})
var currentDatetime = new Date();
var app2 = new Vue({
    el:'#app-2',
    data:{
       message : 'current year: ' + currentDatetime.getFullYear()
    }
})

//-------------------------------------------------------------------
// Conditionals and loops
var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
})

//-------------------------------------------------------------------
// Handling user input

var app5 = new Vue({
    el: '#app-5',
    data: {
        message : "Hello vue.js"
    },
    methods : {
        reverseMessage: function (){
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message : "Hello there"
    }
})