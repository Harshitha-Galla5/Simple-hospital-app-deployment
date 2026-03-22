const db = require("../config/db");

exports.addDoctor = (req, res) => {
  const { name, specialization } = req.body;

  db.query(
    "INSERT INTO doctors (name, specialization) VALUES (?, ?)",
    [name, specialization],
    () => res.redirect("/")
  );
};
