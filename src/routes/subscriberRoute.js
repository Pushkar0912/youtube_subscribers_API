const express = require("express");
const router = express.Router();

const Subscriber = require("../models/subscribers");



router.route("/subscribers").get(async(req,res)=>{
   try{
    const subscribers = await Subscriber.find({});
    res.json(subscribers);
   } catch(error){
    res.status(500).json({error: "Server Error"})
   }
});

router.route("/subscribers/names").get(async(req,res)=>{
    try{
     const subscribers = await Subscriber.find({}, 'name subscribedChannel');
     res.json(subscribers);
    } catch(error){
     res.status(500).json({error: "Server Error"})
    };
})
router.route("/subscribers/:id").get(async(req,res)=>{
    try{
     const subscriber = await Subscriber.findById(req.params.id);
     if (!subscriber) {
        return res.status(404).json({ error: "Subscriber not found" });
      }

     res.json(subscriber);
    } catch(error){
     res.status(500).json({error: "Server Error"})
    };
})

module.exports = router;