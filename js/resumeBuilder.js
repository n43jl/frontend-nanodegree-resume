var bio, work, projects, education;

(function() {
  'use strict';

  bio = {
    name: 'Dmitrii Stebliuk',
    role: 'Senior Full Stack Developer',
    contacts: {
      mobile: '(+39) 327-568-43-13',
      email: 'dsteblyuk@gmail.com',
      github: 'dsteb',
      linkedin: 'dsteb',
      location: 'Milan, Italy'
    },
    welcomeMessage: 'Life is study',
    skills: ['Java', 'SQL', 'HTML5', 'CSS', 'Bootstrap', 'Javascript', 'JQuery', 'Python', 'Linux'],
    biopic: 'images/fry.jpg',
  };

  work = {
    jobs: [{
      employer: 'VGS srl',
      title: 'Software Engineer',
      location: 'Milan, Italy',
      dates: 'Mar, 2015 - Current time',
      description:
        'Successfully implemented and passed certification of large ' +
        'Italian fiscal system (SIAE) for an existing ticketing software.' +
        '<br><i>Tags: </i> Java8, MSSQL, Linux, Javascript, HTML, CSS, Tomcat, Apache'
    }, {
      employer: 'Itrium-SPb',
      title: 'Software Engineer',
      location: 'Saint-Petersburg, Russia',
      dates: 'Feb, 2010 -  Feb, 2014',
      description:
        'Full Stack web developer. Successfully implemented and participated ' +
        'in a lot of interesting and different projects with various ' +
        'technologies.' +
        '<br><i>Tags: </i> Java, JPA, JAX-WS, Maven, MySQL, Linux, Bash, JS, HTML5, CSS, ' +
        'LESS, Agile, Scrum, Kanban, Continious Integration, Jenkins, ' +
        'Python, Django'
    }]
  };

  projects = {
    projects: [{
      title: 'Portfolio',
      dates: '2016',
      description:
        'Variety of frontend projects are done with the help of Udacity. ' +
        '<br><i>Tags: </i> HTML5, CSS, Bootstrap, JS, Responsiveness, Grunt, Semantic layout' +
        ' JQuery ',
      images: ['images/project.jpg']
    }]
  };

  education = {
    schools: [{
      name: 'Politecnico di Milano',
      location: 'Milano, Italy',
      degree: 'MSc',
      majors: ['CS'],
      dates: '2014 — 2016',
      url: 'polimi.it/en/'
    }, {
      name: 'Saint-Petersburg Electrotechnical University "LETI"',
      location: 'Saint-Petersburg, Russia',
      degree: 'MSc-CS, BSc',
      majors: ['CS'],
      dates: '2004 — 2010',
      url: 'eltech.ru/en'
    }],
    onlineCourses: [{
      title: 'Frontend Web Developer',
      school: 'Udacity',
      dates: '2016',
      url: 'udacity.com'
    }]
  };

  bio.display = function() {
    var formattedName = HTMLheaderName.replace('%data%', this.name);
    var formattedRole = HTMLheaderRole.replace('%data%', this.role);
    var formattedPic = HTMLbioPic.replace('%data%', this.biopic);
    var formattedMsg = HTMLwelcomeMsg.replace('%data%', this.welcomeMessage);

    $.each(this.contacts, function(key, value) {
      var template = HTMLcontacts[key] || HTMLcontactGeneric;
      var formattedContact = template.replace('%contact%', key).replace('%data%', value);
      $('#topContacts').append(formattedContact);
      $('#footerContacts').append(formattedContact);
    });

    $('#header').prepend([formattedName, formattedRole]);
    $('#header').append([formattedPic, formattedMsg]);

    $('#header').append(HTMLskillsStart);
    this.skills.forEach(function(skill) {
      var formattedSkill = HTMLskills.replace('%data%', skill);
      $('#skills').append(formattedSkill);
    });
  };

  work.display = function() {
    this.jobs.forEach(function(job) {
      var formattedTitle = HTMLworkEmployer.replace('%data%', job.employer);
      formattedTitle += HTMLworkTitle.replace('%data%', job.title);
      var formattedDates = HTMLworkDates.replace('%data%', job.dates);
      var formattedLocation = HTMLworkLocation.replace('%data%', job.location);
      var formattedDescription = HTMLworkDescription.replace('%data%', job.description);

      $('#workExperience').append(HTMLworkStart);
      var $entry = $('.work-entry:last');
      $entry.append([formattedTitle, formattedDates, formattedLocation,
        formattedDescription]);
    });
  };

  projects.display = function() {
    this.projects.forEach(function(project) {
      var formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
      var formattedDates = HTMLprojectDates.replace('%data%', project.dates);
      var formattedDescription = HTMLprojectDescription.replace('%data%', project.description);

      $('#projects').append(HTMLprojectStart);
      var $entry = $('.project-entry:last')
      $entry.append([formattedTitle, formattedDates, formattedDescription]);

      project.images.forEach(function(img) {
        var formattedImg = HTMLprojectImage.replace('%data%', img);
        $entry.append(formattedImg);
      });
    });
  };

  education.display = function() {
    this.schools.forEach(function(school) {
      var formattedTitle = HTMLschoolName.replace('%data%', school.name);
      formattedTitle += HTMLschoolDegree.replace('%data%', school.degree);
      var formattedDates = HTMLschoolDates.replace('%data%', school.dates);
      var formattedLocation = HTMLschoolLocation.replace('%data%', school.location);
      var majors = school.majors.join(', ');
      var formattedMajor = HTMLschoolMajor.replace('%data%', majors);

      $('#education').append(HTMLschoolStart);
      var $entry = $('.education-entry:last');
      $entry.append([formattedTitle, formattedDates, formattedLocation,
        formattedMajor]);
    });

    $('#education').append(HTMLonlineClasses);
    this.onlineCourses.forEach(function(course) {
      var formattedTitle = HTMLonlineTitle.replace('%data%', course.title);
      formattedTitle += HTMLonlineSchool.replace('%data%', course.school);
      var formattedDates = HTMLonlineDates.replace('%data%', course.dates);
      var formattedLink = HTMLonlineURL.replace('%data%', course.url);

      $('#education').append(HTMLschoolStart);
      var $entry = $('.education-entry:last');
      $entry.append([formattedTitle, formattedDates, formattedLink]);
    });
  };

  bio.display();
  work.display();
  projects.display();
  education.display();

  $('#mapDiv').append(googleMap);
})();
