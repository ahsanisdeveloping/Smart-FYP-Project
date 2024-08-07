import mongoose from "mongoose";

const Schema = mongoose.Schema;

const groupSchema = new Schema({
  teamLead: Object,
  class: String,
  shift:String,
  supervisor: String,
  members: [Object],
  status:{
    type: Boolean,
    default: false
  },
  idea:{
    title:{
      type: String,
      default: "",
    },
    description:{
      type: String,
      default: "",
    },
  },
  weeklyreport:{
    type: [Object],
    default: null,
  },
  documentation:{
    proposal:{
      filename:{
        type: String,
        default: "",
      },
      path:{
        type: String,
        default: "",
      },
      contentType:{
        type: String,
        default: "",
      },
      evalutaion:{
        type: [String],
        default: [""],
      },
    },
    defense:{
      filename:{
        type: String,
        default: "",
      },
      path:{
        type: String,
        default: "",
      }
      ,
      contentType:{
        type: String,
        default: "",
      },
      evalutaion:{
        type: [String],
        default: [""],
      },

    },
    final_documentation:{
      filename:{
        type: String,
        default: "",
      },
      path:{
        type: String,
        default: "",
      },
      contentType:{
        type: String,
        default: "",
      },
      evalutaion:{
        type: [String],
        default: [''],
      },
    },
    presentation:{
      filename:{
        type: String,
        default: "",
      },
      path:{
        type: String,
        default: "",
      },
      contentType:{
        type: String,
        default: "",
      },
      evalutaion:{
        type: [String],
        default: [""],
      },
    },
  },
  finalevaluation:{
    type: [String],
    default: [""],
  },
  frs:[{
    title:{
      type:String,
      default: "",
      required: true,
    },
    description:{
      type:String,
      default: "",
      required: true,
    },
    progress:{
      type: Number,
      default: 0,
    }
  }],
  completion:{
    type:Number,
    default: 0,
  }
});

const getGroupModel = () => {
  return mongoose.model('fyp-groups', groupSchema);
};

export default getGroupModel;
