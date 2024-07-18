function addSubject() {
  const subjectRow = document.createElement("div");
  subjectRow.className = "subject-row";
  subjectRow.innerHTML = `
        <label for="subject">Subject:</label>
        <input type="text" name="subject" required pattern="[A-Za-z\s]+" title="Only alphabets and spaces allowed">
        <label for="outOf">Out of:</label>
        <select name="outOf" required>
            <option value="50">50</option>
            <option value="100">100</option>
        </select>
        <label for="marksObtained">Obtained Marks:</label>
        <input type="number" name="marksObtained" required min="0" max="100">
        <button type="button" onclick="removeSubject(this)">Remove Subject</button>
    `;
  document.getElementById("subjects").appendChild(subjectRow);
}

function removeSubject(button) {
  button.parentElement.remove();
}

function handleSubmit(event) {
  event.preventDefault();

  const form = document.getElementById("studentForm");
  const formData = new FormData(form);
  const studentData = {
    fullName: formData.get("fullName"),
    rollNumber: formData.get("rollNumber"),
    subjects: [],
  };

  const subjects = document.querySelectorAll(".subject-row");
  subjects.forEach((row) => {
    const subject = row.querySelector('input[name="subject"]').value;
    const outOf = row.querySelector('select[name="outOf"]').value;
    const marksObtained = row.querySelector(
      'input[name="marksObtained"]'
    ).value;
    studentData.subjects.push({ subject, outOf, marksObtained });
  });

  localStorage.setItem("studentData", JSON.stringify(studentData));
  window.location.href = "score.html";
}
