var fs = require('fs')


module.exports = {
    readFile: function(filename){
        let data =  JSON.parse(fs.readFileSync(filename))
        return data
    },
    writeFile: function(filename, data){
        fs.writeFileSync(filename, JSON.stringify(data), (error) => {
            return false
        })
        return true
    }
}

