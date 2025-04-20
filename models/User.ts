import mongoose, { Document, Model } from 'mongoose';

export interface IUser extends Document {
  phoneNumber: string;
  verificationTime: Date;
  message_sent: 'yes' | 'no';
  account_opened: 'yes' | 'no';
  first_deposit_done: 'yes' | 'no';
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema<IUser>({
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required'],
    unique: true,
    trim: true,
    validate: {
      validator: function(v: string) {
        return /^\+91\d{10}$/.test(v);
      },
      message: props => `${props.value} is not a valid Indian phone number!`
    }
  },
  verificationTime: {
    type: Date,
    required: true,
    default: Date.now
  },
  message_sent: {
    type: String,
    enum: {
      values: ['yes', 'no'] as const,
      message: '{VALUE} is not supported'
    },
    default: 'no'
  },
  account_opened: {
    type: String,
    enum: {
      values: ['yes', 'no'] as const,
      message: '{VALUE} is not supported'
    },
    default: 'no'
  },
  first_deposit_done: {
    type: String,
    enum: {
      values: ['yes', 'no'] as const,
      message: '{VALUE} is not supported'
    },
    default: 'no'
  }
}, {
  timestamps: true,
  strict: true
});

// Add indexes
userSchema.index({ phoneNumber: 1 }, { unique: true });

// Handle duplicate key error
userSchema.post('save', function(error: any, doc: any, next: any) {
  if (error.code === 11000) {
    next(new Error('Phone number already exists'));
  } else {
    next(error);
  }
});

const User = (mongoose.models.User || mongoose.model<IUser>('User', userSchema)) as Model<IUser>;

export default User; 