import { getModelForClass, mongoose, prop } from 'mongo-connect-provider';

class User {
  _id?: mongoose.Schema.Types.ObjectId;

  @prop({ unique: true, index: true })
  email: string;

  @prop()
  firstName: string;

  @prop()
  lastName: string;
}

const UserModel = getModelForClass(User);
export default UserModel;
