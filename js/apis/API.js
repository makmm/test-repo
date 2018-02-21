export default {
  generateResponse (success, actionSuccess, otherProps) {
    return Object.assign({
      success,
      actionSuccess
    }, otherProps)
  },

  catchError (err) {
    return this.generateResponse(false)
  }
}
