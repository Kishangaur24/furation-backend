const Item= require("../model/userModel")

const createItem= async(req,res)=>{
    try {
        const{Name,price,date,brand}=req.body
       const items= new Item({Name,price,date,brand})
    let result = await items.save()
    if(result){
        res.status(200).send({success:true,result,message:"item created successfully"})
    }else{
        res.status(400).send({message:"item not created in database"})
    }
    
    } catch (error) {
        res.status(401).send({message:error.message})
    }
}

const getItem=async(req,res)=>{
    
    try {
        const result = await Item.find({})
        if(result){
            res.status(200).send({success:true,message:"item get successfully",result})
        }else{
            res.status(400).send({success:false,message:"unable to fetch data "})
        } 
    } catch (error) {
        res.status(400).send({success:false,message:"unable to fetch data "})
    }
   
}

const getSpecific=async(req,res)=>{
    try {
        const result = await Item.findOne(
            {_id:req.params.id}  
        )
        if(result){
            res.status(200).send({success:true,message:"item get successfully",result}) 
        }else{
            res.status(400).send({success:false,message:"unable to fetch data "})
        }
    } catch (error) {
        res.status(400).send({success:false,message:"unable to fetch data "})
    }
}

const deletItem=async(req,res)=>{
    try {
        const result = await Item.deleteOne(
            {_id:req.params.id}  
        )
        if(result){
            res.status(200).send({success:true,message:"item deleted successfully",result}) 
        }else{
            res.status(400).send({success:false,message:"unable to delete  "})
        }
    } catch (error) {
        res.status(400).send({success:false,message:"unable to delete data "})
    }
}

const updateItem=async(req,res)=>{
    try {
        const result = await Item.updateOne(
            {_id:req.params.id},
            {$set:req.body} 
        )
        if(result){
            res.status(200).send({success:true,message:"item update successfully",result}) 
        }else{
            res.status(400).send({success:false,message:"unable to update  "})
        }
    } catch (error) {
        res.status(400).send({success:false,message:"unable to update data "})
    }
}





module.exports= {createItem,getItem,getSpecific,deletItem,updateItem}


