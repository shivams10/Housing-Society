const pool = require("../config/database")

exports.occupancyCheck = (req,res,next) => {
    let resource_id= req.body.resource_id;
    let occupancy_date= req.body.occupancy_date;

    pool.query(
        `select * from occupancies `,
        (err,results) => {
            if(err) {
                return res.status(500).json({
                    success:0,
                    message: "internal server error"
                })
            };
            for( let i=0; i<results.length; i++){
                if(occupancy_date === results[i].occupancy_date && resource_id === results[i].resource_id ){
                    return res.json({
                        success: 0,
                        message:"No availablity for the resource on the given date"
                    })
                };
            }
            next();
        }
    )
}