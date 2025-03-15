 => {
    const memoryUsage = (os.freemem() / os.totalmem()) * 100
    logger.log(`Current memory usage: ${memoryUsage.toFixed(2)}`)
}, 3000);