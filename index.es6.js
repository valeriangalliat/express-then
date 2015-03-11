export default f =>
  (req, res, next) =>
    f(req, res, next).then(null, next)
