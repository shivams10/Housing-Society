const {
  create,
  getUser,
  getUserbyUserId,
  updateUser,
  deleteUser,
  getUserbyUserEmail,
  getResources,
  getResourcesById,
  createResources,
  updateResources,
  createOccupancy,
  getOcuupancy,
  deleteOccupancy
} = require("../user/user.service"); 
require("dotenv").config();
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const pool = require("../../config/database");

module.exports = {

    //User
  createUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error  ",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getUserbyUserId: (req, res) => {
    const id = req.params.id;
    getUserbyUserId(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "record not found!!",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getUser: (req, res) => {
    getUser((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  updateUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    updateUser(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "failed to update data",
        });
      }
      return res.json({
        success: 1,
        message: "Updated Successfully",
        data: results,
      });
    });
  },
  deleteUser: (req, res) => {
    const data = req.body;
    deleteUser(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "record not found",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  login: (req,res) => {
    const body = req.body;
    getUserbyUserEmail(body.email,(err,results) =>{
        if(err) {
            console.log(err); 
        }
        if(!results) {
            res.json({
                success : 0,
                message: "Invalid user or password"
            });
        };
        const result = compareSync(body.password,results.password)
        if(result) {
            results.password = undefined; 
            const jsontoken =sign( {result:results},process.env.SEC_KEY,{
                expiresIn: "1000h"
            });
            pool.query(
              `update registration set token ="${jsontoken}" where email="${body.email}"`,
              (err,results)=>{
                if(err){
                  console.log(err);
                }
                console.log("Hi")
              }
            )
            return res.json({
                success: 1,
                message: "Logged in successfully",
                token: jsontoken
            });
        }
        else{
             return res.json({
                success: 0,
                message:" invalid email or password"
             });
        }
    });
  }, 

  //Resources
  createResources: (req,res) => {
    const body = req.body;
    createResources(body, (err, results) => {
        if(err) {
            console.log(err);
            return res.status(500).json({
                success:0,
                message: "Database connection error"
            });
        }
        return res.status(200).json({
            success: 1,
            data: results
        });
    });
  },
  getResources: (req,res) => {
    getResources((err,results) => {
        if(err){
            console.log(err);
            return;
        }
        return res.json({
            success:1,
            data:results
        });
    });
  },
  getResourcesById: (req, res) => {
    const id = req.params.id;
    getResourcesById(id, (err,results) => {
        if(err) {
            console.log(err);
            return;
        }
        if(!results){
            return res.json({
                success:0,
                message: "Record not found",
            });
        }
        return res.json({
            success:1,
            data: results,
        });
    });
  },
  updateResources: (req,res) => {
    const body = req.body;
    updateResources(body,(err, results) => {
        if(err){
            console.log(err);
            return;
        }
        if (!results) {
            return res.json({
              success: 0,
              message: "failed to update data",
            });
          }
          return res.json({
            success: 1,
            message: "Updated Successfully",
            data: results,
          });
    });
  },

 
//   Occupancy
  createOccupancy: (req,res) => {
    const body = req.body;
    createOccupancy(body, (err, results) => {
        if(err) {
            console.log(err);
            return res.status(500).json({
                success:0,
                message:"Database connection error!!"
            });
        }
        return res.status(200).json({
            success:1,
            data: results
        });
    });
  },
  getOcuupancy: (req,res) => {
    getOcuupancy((err,results) => {
      if(err) {
        console.log(err); 
        return;
      }
      return res.json({
        success: 1,
        data: results
      });
    });
  },
  deleteOccupancy: (req, res) => {
    const data = req.body;
    deleteOccupancy(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "record not found",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  updateOccupancy: (req,res) => {
    const body = req.body;
    this.updateOccupancy(bosy,(err,results) => {
      if(err){
        console.log(err);
        return;
      }
      if(results) {
        return res.json({
          success: 0,
          message: "failed to update data"
        });
      }
      return res.json({
        success:1,
        message:"Updated Successfully",
        data: results
      });
    });
  }
};