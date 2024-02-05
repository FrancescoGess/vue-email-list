const { createApp } = Vue

  createApp({
    data() {
      return {
        testEmail: ''
    }
    },
    methods: {
        generaMail(){
            axios.get( 'https://flynn.boolean.careers/exercises/api/random/mail' ).then( (result) => {
                console.log(result)
            })
        }
    }
  }).mount('#app')
