const router = require("express").Router(),
  db = require("../database/db"),
  jwtGenerator = require("../utils/jwtGenerator"),
  bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    //1. Destructure the req.body (name, email, password)
    const { name, email, password } = req.body;
    //2. Check if user exists (if user exists then throw error)
    const user = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (user.rows.length !== 0) {
      return res.status(401).send("User already exist");
    }
    //3. Bcrypt the user password
    const saltRound = 10,
      salt = await bcrypt.genSalt(saltRound),
      hashedPassword = await bcrypt.hash(password, salt);
    //4. Insert the user inside our database
    const newUser = await db.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
      [name, email, hashedPassword]
    );
    //5. Generate our jwt token
    const token = jwtGenerator(newUser.rows[0].id);
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
