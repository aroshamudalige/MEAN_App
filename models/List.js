const mongoose = require('mongoose');

const MessagelistSchema = mongoose.Schema({
    sender: {
        type: String,
        required: true
    },
    message: String,
    approved: Boolean
});

const MessageList = module.exports = mongoose.model('MessageList', MessagelistSchema );

module.exports.getAllMsgs = (callback) => {
	MessageList.find({"approved": true}, callback);
}

module.exports.addList = (newList, callback) => {
	newList.save(callback);
}

// module.exports.deleteListById = (id, callback) => {
// 	let query = {_id: id};
// 	MessageList.remove(query, callback);
// }

