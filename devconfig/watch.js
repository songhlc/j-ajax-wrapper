var watch = require('watch')
var process = require('child_process')
var rebuild = function () {
  process.exec('npm run build', function (error, stdout, stderr) {
    if (error !== null) {
      console.log(error)
    } else {
      console.log('build success:' + new Date())
    }
  })
}
watch.createMonitor('./lib', function (monitor) {
  monitor.files['./lib/.zshrc'] // Stat object for my zshrc.
  monitor.on('created', function (f, stat) {
    // Handle new files
    rebuild()
  })
  monitor.on('changed', function (f, curr, prev) {
    // Handle file changes
    rebuild()
  })
  // monitor.stop(); // Stop watching
})
