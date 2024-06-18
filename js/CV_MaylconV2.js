document.addEventListener('DOMContentLoaded', function () {
    fetch('json/CV_MaylconV2.json')
        .then(response => response.json())
        .then(data => {
            // Header
            document.getElementById('header-name').textContent = data.header.name;
            document.getElementById('header-title').textContent = data.header.title;
            document.getElementById('header-description').textContent = data.header.description;

            // Contact Info
            document.getElementById('contact-phone').innerHTML = `<i class="fas fa-phone-alt"></i> ${data.contact.phone}`;
            document.getElementById('contact-email').innerHTML = `<i class="fas fa-envelope"></i> ${data.contact.email}`;
            document.getElementById('contact-website').innerHTML = `<i class="fas fa-globe"></i> <a href="${data.contact.website}">Maylcon.io</a>`;
            document.getElementById('contact-linkedin').innerHTML = `<i class="fab fa-linkedin"></i> <a href="${data.contact.linkedin}">LinkedIn</a>`;
            document.getElementById('contact-resume').innerHTML = `<i class="fas fa-download"></i> <a href="${data.contact.resume}">Download Resume</a>`;

            // Education
            const educationList = document.getElementById('education-list');
            data.education.forEach(edu => {
                const eduItem = document.createElement('div');
                eduItem.innerHTML = `<p>${edu.year}</p><p>${edu.institution}</p><p>${edu.degree}</p>`;
                educationList.appendChild(eduItem);
            });

            // Skills
            const skillsList = document.getElementById('skills-list');
            data.skills.forEach(skill => {
                const skillItem = document.createElement('li');
                skillItem.textContent = skill;
                skillsList.appendChild(skillItem);
            });

            // Languages
            const languagesList = document.getElementById('languages-list');
            data.languages.forEach(language => {
                const langItem = document.createElement('p');
                langItem.textContent = language;
                languagesList.appendChild(langItem);
            });

            // Profile
            document.getElementById('profile-description').textContent = data.profile;

            // Experience
            const experienceList = document.getElementById('experience-list');
            data.experience.forEach(exp => {
                const expItem = document.createElement('div');
                expItem.classList.add('job');
                expItem.innerHTML = `
                    <div class="job-header">
                        <h3>${exp.title}</h3>
                        <span class="job-dates">${exp.dates}</span>
                    </div>
                    <p><strong>Company:</strong> ${exp.company}</p>
                    <p><strong>Technologies:</strong> ${exp.technologies}</p>
                    <ul>${exp.responsibilities.map(res => `<li>${res}</li>`).join('')}</ul>
                `;
                experienceList.appendChild(expItem);
            });

            // Certifications
            document.getElementById('Professional-scrum').innerHTML = `<i class="fas fa-download"></i> <a href="${data.certifications.ProfessionalScrum}">Professional Scrum Master</a>`;
            document.getElementById('Scrum-developer').innerHTML = `<i class="fas fa-download"></i> <a href="${data.certifications.ScrumDeveloper}">Scrum Developer</a>`;
            document.getElementById('English').innerHTML = `<i class="fas fa-download"></i> <a href="${data.certifications.English}">English course</a>`;
        });
});
