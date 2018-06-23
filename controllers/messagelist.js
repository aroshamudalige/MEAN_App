const express = require('express');
const router = express.Router();
const messagelist = require('../models/List');
const Nexmo = require('nexmo');

router.get('/',(req,res) => {
	messagelist.getAllMsgs((err, lists)=> {
		if(err) {
			res.json({success:false, message: `Failed to load all lists. Error: ${err}`});
		}
		else {
			res.write(JSON.stringify({success: true, lists:lists},null,2));
			res.end();	
			
	}	
	});
});

router.post('/', (req,res,next) => {
	const nexmo = new Nexmo({
		apiKey: '4c71cae1',
		apiSecret: 'RmpMpZ7Y2GrzpjnJ'
	  });
	console.log(req.body);
	let newList = new messagelist({
		sender: req.body.sender,
		message: req.body.message,
		approved: false
	});
	messagelist.addList(newList,(err, list) => {
		if(err) {
			res.json({success: false, message: `Failed to create a new list. Error: ${err}`});

		}
		else 
			res.json({success:true, message: "Added successfully."});
	
	});
	//const text = `You have a new comment by ${newList.sender} - ${newList.message} \n`;
	const text = `Comment from ${newList.sender} is waiting approval.`;
	nexmo.message.sendSms(
		'94770177440', '+94770177440', text, {type: 'unicode'},
		(err, responseData) => {
			if(err){
				console.log(err);
			}else{
				console.log(responseData);
			}
		}
	);
});


// //DELETE HTTP method to /messagelist. Here, we pass in a params which is the object id.
// router.delete('/:id', (req,res,next)=> {
// 	let id = req.params.id;
// 	console.log(id);
// 	messagelist.deleteListById(id,(err,list) => {
// 		if(err) {
// 			res.json({success:false, message: `Failed to delete the list. Error: ${err}`});
// 		}
// 		else if(list) {
// 			res.json({success:true, message: "Deleted successfully"});
// 		}
// 		else
// 			res.json({success:false});
// 	})
// });

module.exports = router;
