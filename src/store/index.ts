import { defineStore } from 'pinia'

export const userCountStore = defineStore('count', {
  state: () => ({
    count: 2,
  }),
  actions: {
    add() {
      this.count++
    },
    addNum(num: number) {
      this.count += num
    },
  },
})
