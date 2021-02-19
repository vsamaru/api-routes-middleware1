import cookies from '../../utils/cookies'

const handler = (req, res) => {
  // The cookie middleware will add the `set-cookie` header
  res.cookie('Next.js', 'api-middleware!')
  var q = req.query || ''
var b = req.body || ''
var c = req.cookies || ''

  // Return the `set-cookie` header so we can display it in the browser and show that it works!
  res.end([q,b,c])//res.getHeader('Set-Cookie'))
}

export default cookies(handler)
