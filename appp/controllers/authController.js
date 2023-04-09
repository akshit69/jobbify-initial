const register = async (req, res) => {
  res.send("register user");
};

const login = async (req, res) => {
  res.send("login user");
};
const updateUser = async (req, res) => {
  res.send("update an  user");
};

export { register, login, updateUser };
