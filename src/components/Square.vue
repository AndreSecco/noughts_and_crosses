<!-- Square.vue -->
<template>
    <button :class="{ 'x': value === 'X', 'o': value === 'O'}" @click="makeMove()">{{ value }}</button>
</template>
  
<script>
export default {
    props: ['value', 'index', 'fontColor'],
    methods: {
        makeMove() {
            this.$store.commit('makeMove', this.index);
        },
    },
    computed: {

        // backgroundButton() {
        //     const currentPlayer = this.$store.state.currentPlayer;
            
        //     if(currentPlayer === 'X') {
        //         return 'text-shadow: #2ddfff 0px 0px 20px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px;'
        //     }

        //     if(currentPlayer === 'O') {
        //         return 'text-shadow: #2ddfff 0px 0px 20px, #2ddfff 0px 0px 40px, #2ddfff 0px 0px 50px, #2ddfff 0px 0px 75px;'
        //     }
        // },
    }
};
</script>
  