const mongodb = require("mongoose");
const Schema = mongodb.Schema;

const ConversationSchema = new Schema ({

    conversation_id: {
        type: Schema.Types.ObjectId,
        ref: 'Conversations',
        required: [true, "Conversation ID is require"]
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    created_at: {
        type: Date,
        default: Date.now
    }

});

ConversationSchema.index({ conversation_id: 1, updated_at: -1, created_at: -1 });


module.exports = mongodb.model('Conversations', ConversationSchema);