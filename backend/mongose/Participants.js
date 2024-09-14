const mongodb = require("mongoose");
const Schema = mongodb.Schema;

const participantSchema = new Schema ({

    participant_id: {
        type: Schema.Types.ObjectId,
        auto: true,
    },
    conversation_id: {
        type: Schema.Types.ObjectId,
        ref: 'Conversations',
        required: [true, "Conversation ID is require"]
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        unique: [true, "email exists in database!"]
    },
    joined_at: {
        type: Date,
        default: Date.now
    }

});

participantSchema.index({ participantSchema: 1, user_id: 1, ConversationSchema: 1, joined_at: -1 });


module.exports = mongodb.model('Participants', participantSchema);