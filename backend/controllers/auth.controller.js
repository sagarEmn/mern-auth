// this controller.js file contains what happens when specific route is called
// defines what server does when the route it's assigned to, is called
// handles request, responses

// auth.controller.js CONTROLS what happens when THE ROUTE is called
// alternative names: request handlers, action controllers, endpoint handlers

export const signup = async (req, res) => {
    res.send("signup route");
}

export const login = async (req, res) => {
    res.send("login route");
}

export const logout = async (req, res) => {
    res.send("logout route");
}