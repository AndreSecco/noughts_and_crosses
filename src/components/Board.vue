<!-- Board.vue -->
<template>
    <div>
        <div class="status" v-if="winner">{{ winner }} venceu!</div>
        <div class="status" v-else-if="isTie">Empate!</div>
        <div class="status" v-else>Jogador atual: {{ currentPlayer }}</div>
        <div class="board">
            <Square v-for="(square, index) in board" 
                :key="index" 
                :value="square" 
                :index="index">
            </Square>
        </div>
        <div class="divResetGame">
            <button class="btnResetGame" @click="resetGame">Reiniciar Jogo</button>
        </div>
    </div>
</template>
  
<script>
import Square from './Square.vue';

export default {
    components: {
        Square,
    },
    computed: {
        board() {
            return this.$store.state.board;
        },
        currentPlayer() {
            return this.$store.state.currentPlayer;
        },
        winner() {
            return this.$store.state.winner;
        },
        isTie() {
            return this.board.every((square) => square !== null) && !this.winner;
        },
    },
    methods: {
        resetGame() {
            this.$store.commit('resetGame');
        },
    },
};
</script>
  