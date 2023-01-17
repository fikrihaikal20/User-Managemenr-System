const express = require('express');
const data = require('../models/userModels')

module.exports = {
    index: async(req, res) => {
        const users = await data.find();
        res.render('index',{users: users})
    },

    viewEdit:async(req, res) => {
        const {id} = req.params
        const user = await data.findById(id)
        res.render('update_user',{user: user})
    },
    viewCreate : async(req, res) => {
        // const dataid = await data.findById(id)
        res.render('add_user')
    },
    actionCreate: async (req, res) => {
        try{
            const ukuran = new data({ 
                name: req.body.name,
                email: req.body.email,
                gender: req.body.gender,
                status: req.body.status
            });

            console.log(ukuran)
        
            ukuran.save(function (err) {
                if (err){
                    console.log("GAGAL MENAMBAHKAN :" + err)
                }else{
                    console.log("BERHASIL MENAMBAHKAN")
                    res.redirect('/');
                }
              });
        
            
        }catch(err){
            console.log(err.message)
        }
    },

    actionDelete:async(req, res) => {

        try {
            const id = req.params.id;
           await data.findOneAndRemove({ _id: id })

           res.redirect('/')
            console.log("data berhasil di hapus")
        } catch (error) {
            console.log(error)
        }
    
    },
    actionEdit: async(req, res) => {
        const filter = { _id: req.params.id };
        const update = { 
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender,
            status: req.body.status 
        };
        let updet = await data.findOneAndUpdate(filter, update);
    
        res.redirect('/')
    }

}