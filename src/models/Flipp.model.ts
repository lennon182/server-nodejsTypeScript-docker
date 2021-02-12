import { Schema, model, Document } from 'mongoose';

const flippsShema = new Schema(
  {
    body: {
      type: String,
      required: [true, 'Debes ingresar un flipp'],
    },
    user: {
      ref: 'user',
      type: Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model('flipps', flippsShema);
