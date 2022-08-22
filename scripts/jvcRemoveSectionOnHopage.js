const path = document.location.href.replace('https://www.jeuxvideo.com', '');

/** **************************************************************************************************************
 *  REMOVE ELEMENT ON HOMEPAGE
 ************************************************************************************************************** */
if ('/' === path) {
  const sections = document.querySelectorAll('.layout__content section');
  const jvTechSections = document.querySelectorAll('.layout__contentAfter section');
  let jvsCleanerScriptIsSections = false;
  let jvcCleanerScriptIsJvTechSections = false;

  console.log(jvsCleanerScriptIsSections, jvcCleanerScriptIsJvTechSections);

  if ('0' === localStorage.getItem('en-ce-moment')) {
    document.querySelector('.layout__contentHeader').style.display = 'none';
    document.querySelector('.layout__contentBefore').style.display = 'none';
  }

  if ('0' === localStorage.getItem('dernieres-news-jv')) {
    document.querySelector('.layout__contentMain').style.display = 'none';
  }

  if ('0' === localStorage.getItem('derniers-test').toString()) {
    sections[0].style.display = 'none';
    jvsCleanerScriptIsSections = false;
  } else {
    jvsCleanerScriptIsSections = true;
  }

  if ('0' === localStorage.getItem('dernieres-news-de-jeux')) {
    sections[1].style.display = 'none';
    jvsCleanerScriptIsSections = false;
  } else {
    jvsCleanerScriptIsSections = true;
  }

  if ('0' === localStorage.getItem('derniers-videos-test-de-jeux')) {
    sections[2].style.display = 'none';
    document.querySelector('.layout__content .secondaryNav').setAttribute('style', 'display: none !important');
    jvsCleanerScriptIsSections = false;
  } else {
    jvsCleanerScriptIsSections = true;
  }

  if ('0' === localStorage.getItem('jeux-les-plus-populaires')) {
    sections[3].style.display = 'none';
    jvsCleanerScriptIsSections = false;
  } else {
    jvsCleanerScriptIsSections = true;
  }

  if ('0' === localStorage.getItem('dernieres-astuces')) {
    sections[4].style.display = 'none';
    document.querySelector('.layout__content .seoBounceBlockSecondary').setAttribute('style', 'display: none !important');
    jvsCleanerScriptIsSections = false;
  } else {
    jvsCleanerScriptIsSections = true;
  }

  if ('0' === localStorage.getItem('les-jeux-les-plus-attendus')) {
    sections[5].style.display = 'none';
    jvsCleanerScriptIsSections = false;
  } else {
    jvsCleanerScriptIsSections = true;
  }

  if ('0' === localStorage.getItem('meilleurs-jeux-du-moment')) {
    sections[6].style.display = 'none';
    jvsCleanerScriptIsSections = false;
  } else {
    jvsCleanerScriptIsSections = true;
  }

  if ('0' === localStorage.getItem('dernieres-videos-gameplay')) {
    sections[7].style.display = 'none';
    jvsCleanerScriptIsSections = false;
  } else {
    jvsCleanerScriptIsSections = true;
  }

  if (!jvsCleanerScriptIsSections) {
      document.querySelector('.layout__content').style.display = 'none';
  }

  if ('0' === localStorage.getItem('bon-plans-high-tech')) {
    jvTechSections[0].style.display = 'none';
    jvcCleanerScriptIsJvTechSections = false;
  } else {
    jvcCleanerScriptIsJvTechSections = true;
  }

  if ('0' === localStorage.getItem('derniers-test-high-tech')) {
    jvTechSections[1].style.display = 'none';
    jvcCleanerScriptIsJvTechSections = false;
  } else {
    jvcCleanerScriptIsJvTechSections = true;
  }

  if ('0' === localStorage.getItem('derniers-guides-d-achat')) {
    jvTechSections[2].style.display = 'none';
    jvcCleanerScriptIsJvTechSections = false;
  } else {
    jvcCleanerScriptIsJvTechSections = true;
  }

  if ('0' === localStorage.getItem('dernieres-news-hardware')) {
    jvTechSections[3].style.display = 'none';
    jvcCleanerScriptIsJvTechSections = false;
  } else {
    jvcCleanerScriptIsJvTechSections = true;
  }

  if (!jvcCleanerScriptIsJvTechSections) {
      document.querySelector('.layout__contentAfter').style.display = 'none';
  }

  if ('0' === localStorage.getItem('nos-emissions')) {
    document.querySelector('.layout__contextBottom').style.display = 'none';
  }

}
