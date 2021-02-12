import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcrypt';
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    roles: [
      {
        ref: 'roles',
        type: Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Methods
userSchema.method('encryptPassword', (password: string) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
});

userSchema.method('comparePassword', (comparePassword: string, encryptPassword: string) => {
  return bcrypt.compareSync(comparePassword, encryptPassword);
});

// InterFace
interface UserI extends Document {
  name: string;
  email: string;
  password: string;
  roles: [];
  comparePassword(comparePassword: string, encryptPassword: string): boolean;
  encryptPassword(password: string): string;
}

export const userModel = model<UserI>('user', userSchema);
