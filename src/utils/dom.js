function getClassName (dom, className) {
  let _className = dom.className;
  if (_className === 'win10') {
    return false;
  } else if (className === _className) {
    return true;
  } else {
    return getClassName(dom.parentNode, className);
  }
}

export default getClassName;
