const jvcCleanerTopComments = document.location.href.replace('https://www.jeuxvideo.com', '').slice(1).split('/');

/** **************************************************************************************************************
 *  REMOVE SECTION ON HOMEPAGE
 ************************************************************************************************************** */
if (null === localStorage.getItem('input-score-show')) {
  localStorage.setItem('input-score-show', '1');
}
else if (jvcCleanerTopComments[0] === 'news' && '1' === localStorage.getItem('input-score-show')) {
  const interval = setInterval(() => {
    var linkPlusDeComm = document.querySelector('.link-plus-de-comm');

    if (null !== linkPlusDeComm) {
      linkPlusDeComm.click();
    } else {
      clearInterval(interval);
      jvcCleanerScriptTopComment();
    }
  }, 100);
}

/** **************************************************************************************************************
 *  FUNCTION
 ************************************************************************************************************** */
function jvcCleanerScriptTopComment() {
  const commentList = document.querySelectorAll('.commentaire-liste .bloc-message-forum');
  const topCommentElement = document.querySelector('.titre-head-bloc');
  let commentsList = [];
  let html = '';

  commentList.forEach(el => {
    let up = parseInt(el.querySelector('.plus-commentaire').innerHTML);
    let down = parseInt(el.querySelector('.moins-commentaire').innerHTML);
    let score = up - down;

    if (score > 0 && score > localStorage.getItem('input-score-up')) {
      el.setAttribute('style', 'border-color: green; background-color: rgb(54, 88, 54)');
    }
    else if (score < 0 && score < localStorage.getItem('input-score-down')) {
      el.setAttribute('style', 'border-color: red; background-color: rgb(113, 63, 63)');
    }

    commentsList.push({
      html: '<div class="bloc-message-forum commentaire-parent" data-id-auteur="' + el.getAttribute('data-id-auteur') + '" data-id="' + el.getAttribute('data-id') + '">' + el.innerHTML + '</div>',
      score: score
    });

    commentsList = commentsList.sort((a, b) => {
        return b.score - a.score;
    });
  });

  html += commentsList[0].html;
  html += commentsList[1].html;

  topCommentElement.innerHTML = '<h3>Top commentaire</h3><br />' + html + topCommentElement.innerHTML;
}
