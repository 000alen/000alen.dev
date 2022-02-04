export const copyText = (e) => {
  const text = e.target.innerText;
  const textArea = document.createElement("textarea");
  textArea.width = "1px";
  textArea.height = "1px";
  textArea.background = "transparents";
  textArea.value = text;
  document.body.append(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
};

export const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut ipsum viverra, lobortis ligula quis, pulvinar massa. Morbi id imperdiet risus, eu scelerisque mauris. Donec et ipsum enim. Proin convallis turpis id mauris finibus condimentum. Vestibulum eleifend lacus ut nunc tempor mollis. Cras convallis scelerisque lectus et tempus. Morbi id facilisis erat. Duis at rutrum sem. Integer at eleifend arcu, sed placerat sem.";
