function findS(element, swap) {
  let divS = element.parentNode;
  while (divS.className != "selector_block") {
    divS = divS.parentNode;
  }

  let leftS = null;
  let rightS = null;

  for (let j in divS.children) {
    child = divS.children[j];
    switch (child.id) {
      case "left_select":
        leftS = child;
        break;
      case "right_select":
        rightS = child;
        break;
    }
  }

  if (swap) {
    tmp = leftS;
    leftS = rightS;
    rightS = tmp;
  }
  return [leftS, rightS]
}

function move(element, swap) {
  selectors = findS(element, swap)
  leftS = selectors[0]
  rightS = selectors[1]

  options = [];
  for (let i = 0; i < leftS.options.length; i++) {
    if (leftS.options[i].selected) {
      options.push(leftS.options[i])
    }
  }
  if (options.length == 0) {
    alert("Nothing to move!")
  }

  for (let j in options) {
    rightS.options.add(options[j])
  }
}

function moveAll(element, swap) {
  selectors = findS(element, swap)
  leftS = selectors[0]
  rightS = selectors[1]

  leftLen = leftS.options.length
  if (leftLen == 0) {
    alert("Nothing to move!");
    return
  }

  while (leftS.options.length > 0) {
    rightS.options.add(leftS.options[0])
  }
}
