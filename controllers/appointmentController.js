const db = require("../config/db");

exports.bookAppointment = (req, res) => {
  const { patient_id, doctor_id, appointment_date } = req.body;

  db.query(
    "INSERT INTO appointments (patient_id, doctor_id, appointment_date) VALUES (?, ?, ?)",
    [patient_id, doctor_id, appointment_date],
    () => res.redirect("/")
  );
};

exports.getAppointments = (req, res) => {
  const query = `
    SELECT p.name AS patient, d.name AS doctor, a.appointment_date
    FROM appointments a
    JOIN patients p ON a.patient_id = p.id
    JOIN doctors d ON a.doctor_id = d.id
  `;

  db.query(query, (err, result) => {
    let html = "<h2>Appointments</h2><table border='1'>";
    html += "<tr><th>Patient</th><th>Doctor</th><th>Date</th></tr>";

    result.forEach(r => {
      html += `<tr>
        <td>${r.patient}</td>
        <td>${r.doctor}</td>
        <td>${r.appointment_date}</td>
      </tr>`;
    });

    html += "</table>";
    res.send(html);
  });
};
