const pool = require("../config/database");

module.exports = {
  manualCheck: (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      const tokenDecodablePart = token.split(".")[1];
      const decode = Buffer.from(tokenDecodablePart, "base64").toString();
      var tokenData = JSON.parse(decode);
       pool.query(
        `select token from users where id =${tokenData.result.id}`,
        [],
        (err,results)=>{
            if(err){
                return err;
            }
      var currentDate = new Date();
      currentDate.toUTCString();
      const d2 =Math.floor(currentDate.getTime()/ 1000)
    //   console.log(token.slice(7),"-------",results[0].token)
      if (d2 <= tokenData.exp && results[0].token==token.slice(7)) {
        next();
      } else {
        console.log("Session Expired! Please login Again");
      }
    }
    )
    } else {
      res.status(401).json({
        success: 0,
        message: "Acceess denied ! Unauthorized user !",
      });
    }
  },
};