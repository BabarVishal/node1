import { User } from "../modules/user.moduls.js";

export const SingInDeta = async (req, res) => {
    const { name, lastName, DOB, password, email } = req.body;

    if (!name || !lastName || !DOB || !password || !email) {
        return res.status(400).json({ message: "Please fill in all the details" });
    }

    try {
        await User.create({ name, lastName, DOB, password, email });
        return res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Error creating user", error: error.message });
    }
};

export const login = async (req, res) => {
    const {password, email} = req.body;

    if(!(password || email)){
        return res.status(400).json({mes: "Fill the Deta"});
    }

    try {
       await User.findOne({password, email});
       return res.status(201).json({mes: "Login successfully"});
    } catch (error) {
        return res.status(500).json({ message: "Error creating user", error: error.message });
    }
};

