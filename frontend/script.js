const form = document.getElementById("certificateForm");
const certificateList = document.getElementById("certificateList");

const API_URL = "http://localhost:5000/api/certificates";

async function fetchCertificates() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    certificateList.innerHTML = "";

    data.certificates.forEach((certificate) => {
      const div = document.createElement("div");

      div.className = "certificate-card";

      div.innerHTML = `
        <h3>${certificate.studentName}</h3>
        <p><strong>Course:</strong> ${certificate.courseName}</p>
        <p><strong>Date:</strong> ${certificate.issueDate}</p>
      `;

      certificateList.appendChild(div);
    });

  } catch (error) {
    console.log(error);
  }
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const studentName = document.getElementById("studentName").value;
  const courseName = document.getElementById("courseName").value;
  const issueDate = document.getElementById("issueDate").value;

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      studentName,
      courseName,
      issueDate,
    }),
  });

  const data = await response.json();

  alert(data.message);

  form.reset();

  fetchCertificates();
});

fetchCertificates();
