module.exports = {
  "port": process.env.PORT,
  "adminAccount": "admin@admin.com",
  "db": {
    "connectString": process.env.connectString,
    "servername": "127.0.0.1",
    "DATABASE": "yapi",
    "port": 27017,
    "user": process.env.connectUser,
    "pass": process.env.connectPass,
    "authSource": "yapi"
  },
  "mail": {
    "enable": true,
    "host": "smtp.qq.com",
    "port": 465,
    "from": "175262585@qq.com",
    "auth": {
      "user": "175262585@qq.com",
      "pass": "nlpaiibfywhnbggb"
    }
  }
}