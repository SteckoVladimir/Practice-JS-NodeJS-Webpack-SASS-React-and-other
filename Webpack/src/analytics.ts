import * as $ from 'jquery'

function createAnalytics(): object {
  let counter = 0
  let destroyed: boolean = false
  const listner = (): number => counter++

  $(document).on('click', listner)

  return {
    destroy() {
      $(document).off('click', listner)
      destroyed = true
    },

    getClicks() {
      if (destroyed) {
        return `Analytics is destroyed. Total clicks = ${counter}`
      }
      return counter
    }
  }
}

window['analytics']= createAnalytics()