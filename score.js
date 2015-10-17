function $(id) {
  return document.getElementById(id);
}

function getBorderColors(score) {
  var scoreBorder;
  if (score >= 0 && score < 20) {
    scoreBorder = {
      light: '#d18080',
      dark: '#a30000',
      flex: '#d18080'
    };
  } else if (score >= 20 && score < 40) {
    scoreBorder = {
      light: '#fb9',
      dark: '#f72',
      flex: '#fb9'
    };
  } else if (score >= 40 && score <= 50) {
    scoreBorder = {
      light: '#ffe187',
      dark: '#ffc20e',
      flex: '#ffe187'
    };
  } else if (score > 50 && score < 60) {
    scoreBorder = {
      light: '#ffe187',
      dark: '#ffc20e',
      flex: '#ffc20e'
    };
  } else if (score >= 60 && score < 80) {
    scoreBorder = {
      light: '#b6e4a5',
      dark: '#6dc84a',
      flex: '#6dc84a'
    };
  } else if (score >= 80 && score <= 100) {
    scoreBorder = {
      light: '#9c9',
      dark: '#393',
      flex: '#393'
    };
  }
  return scoreBorder;
}

function setBorderColors(score) {
  var scoreBorder = getBorderColors(score),
    brdrMain = $('score-1'),
    brdrFlex = $('scoreFill-1'),
    brdrPassive = $('container-1');

  brdrPassive.style.borderColor = scoreBorder.light;
  brdrMain.style.borderColor = scoreBorder.dark;
  brdrFlex.style.borderColor = scoreBorder.flex;
}

function rotateBorders(score) {
  var brdrFlex = $('scoreFill-1'),
    notchBottom = $('notchBottom-1'),
    angle = getRotationAmount(score),
    notchAngle = getNotchRotationAmount(angle, score);

  rotateBorder(brdrFlex, angle);
  rotateBorder(notchBottom, notchAngle);
}

function rotateBorder(elem, angle) {
  elem.style.webkitTransform = 'rotate(' + angle + 'deg)';
  elem.style.MozTransform = 'rotate(' + angle + 'deg)';
  elem.style.msTransform = 'rotate(' + angle + 'deg)';
}

function getRotationAmount(score) {
  if (score > 50) {
    return (score - 50) * 3.6;
  } else if (score <= 50) {
    return score * 3.6;
  }
}

function getNotchRotationAmount(angle, score) {
  if (score > 50) {
    return angle + 3;
  } else if (score <= 50) {
    return angle - 3;
  }
}

function setScore() {
  var contnrScore = $('container-1'),
    spanScore = contnrScore.getElementsByTagName('span')[0],
    newScore = Math.floor(document.getElementById('updateValue').value);
  spanScore.firstChild.data = newScore;
  setBorderColors(newScore);
  rotateBorders(newScore);
}
