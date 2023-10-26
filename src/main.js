// main.js
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';

Vue.use(Vuex);

// Defina o estado inicial do jogo
const state = {
  board: Array(9).fill(null),
  currentPlayer: 'X',
  winner: null,
};

// Crie uma store Vuex
const store = new Vuex.Store({
  state,
  mutations: {
    makeMove(state, index) {
      if (!state.board[index] && !state.winner) {
        Vue.set(state.board, index, state.currentPlayer);

        if (checkWinner(state.board, state.currentPlayer)) {
          state.winner = state.currentPlayer;
        } else {
          state.currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X';
        }
      }
    },
    resetGame(state) {
      state.board = Array(9).fill(null);
      state.currentPlayer = 'X';
      state.winner = null;
    },
  },
});

new Vue({
  el: '#app',
  store,
  render: (h) => h(App),
});

// Função auxiliar para verificar o vencedor
function checkWinner(board, player) {
 const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (let line of lines) {
        if (
          board[line[0]] === player &&
          board[line[1]] === player &&
          board[line[2]] === player
        ) {
          return true;
        }
      }

      return false;
}
