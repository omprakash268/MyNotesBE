import User from "../Model/User.js";

export const getAllUsers = async (req, res) => {

    const userList = await User.find();
    res.json({ msg: "getAllNotesById", data: userList });
}

export const getUserById = async (req, res) => {
    const id = req.params.id;

    const user = await User.findById(id);
    res.json({ msg: "user fetched", data: user });
}

export const addNewUser = async (req, res) => {
    try {
        const newUser = new User(req.body)

        await newUser.save();
        res.status(201).json({ msg: "created user", data: { _id: newUser._id } });
    } catch (err) {
        try {
            const user = await User.findOne({ email: req.body.email });
            res.status(200).json({ msg: "user fetched", data: user._id });
        } catch (cErr) {
            res.status(400).json({ status: 400, msg: "Something went wrong.", err: cErr })
        }

    }
}

export const deleteUserById = async (req, res) => {
    const id = req.params.id;
    try {
        await User.findByIdAndDelete(id);
        res.status(200).json({ msg: "Delete succefully", status: 200 });
    } catch (err) {
        res.status(400).json({ status: 400, msg: "Something went wrong.", err: err })
    }
}

export const updateUserById = async (req, res) => {

    const id = req.params.id;
    try {
        await User.findByIdAndUpdate(id, req.body);
        res.status(200).json({ msg: "Updated succefully", status: 200 });
    } catch (err) {
        res.status(400).json({ status: 400, msg: "Something went wrong.", err: err })
    }

}

// User login authentication
export const loginUserAuth = async (req, res) => {
    const email = req.body.email;
    try {
        const user = await User.findOne({ email: email });
        if (user && user.password == req.body.password) {
            const resUser = {
                _id: user._id,
                name: user.name,
                email: user.email
            }
            res.status(200).json({ msg: "Login successful", data: resUser });
        } else {
            res.status(404).json({ msg: "Check your credentials", data: null });
        }

    } catch (err) {
        res.status(404).json({ msg: "Check your credentials", data: null, err: err });
    }
}
