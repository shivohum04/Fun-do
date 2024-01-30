import User from '../models/user.model';
import bcrypt from 'bcrypt';


//get all users
export const getAllUsers = async () => {
  const data = await User.find();
  return data;
};

//create new user
export const newUser = async (body) => {
  const data = await User.create(body);
  return data;
};

//update single user
export const updateUser = async (_id, body) => {
  const data = await User.findByIdAndUpdate(
    {
      _id
    },
    body,
    {
      new: true
    }
  );
  return data;
};

//delete single user
export const deleteUser = async (id) => {
  await User.findByIdAndDelete(id);
  return '';
};

//get single user
export const getUser = async (id) => {
  const data = await User.findById(id);
  return data;
};


export const registerUser = async (userData) => {
  // userData should contain { username, email, password }
  const { username, email, password } = userData;

  // Check if the user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('User already exists');
  }

  // Encrypt the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user
  const newUser = new User({ username, email, password: hashedPassword });
  await newUser.save();
};

export const loginUser = async (userData) => {
  // userData should contain { username, password }
  const { username, password } = userData;

  const user = await User.findOne({ username });

  if (!user) {
    throw new Error('User does not exist');
  }

  if (await bcrypt.compare(password, user.password)) {
    return 'Login successful';
  } else {
    throw new Error('Invalid credentials');
  }
};
