const db = require("../config/db");

exports.addPatient = (req, res) => {
  const { name, age, gender } = req.body;

  db.query(
    "INSERT INTO patients (name, age, gender) VALUES (?, ?, ?)",
    [name, age, gender],
    () => res.redirect("/")
  );
};
