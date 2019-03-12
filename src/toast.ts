export type Position =
| 'tl'
| 'tr'
| 'bl'
| 'br';

export type Type =
| 'alert'
| 'info'
| 'warning';

type TypeIcons = {
  [key in Type]: string;
}

const typeIcons: TypeIcons = {
  'alert': "🚨",
  'info': "📢",
  'warning': "⚠️"
};

function addToast(_message?: string, _position?: Position, _type?: Type) {
  let message = _message || "[empty message]";
  let li = document.createElement("li");
  let id = Math.floor(Math.random() * 100);
  while (document.getElementById(`toast${id}`) != null) {
    id = Math.floor(Math.random() * 100);
  }
  li.id = `toast${id}`;

  let type: Type = _type || ([
    'alert',
    'info',
    'warning'
  ] as Type[])[Math.floor(Math.random() * 3)];

  li.textContent = typeIcons[type] + " " + message;
  li.classList.add("toast", "animated", "flip", type);
  let position = _position || [
    "tl",
    "tr",
    "bl",
    "br"
  ][Math.floor(Math.random() * 4)];
  let toaster = getToaster(position);
  toaster.appendChild(li);
  let timeoutId = setTimeout(() => fadeToast(id, position), 4000);
  li.addEventListener("mouseover", () => {
    clearTimeout(timeoutId);
  });
  li.addEventListener("mouseout", () => {
    timeoutId = setTimeout(() => fadeToast(id, position), 1000);
  });
}

function getToaster(position: string) {
  let toaster = document.getElementById(`toaster-${position}`);
  if (!toaster) {
    toaster = document.createElement('ul');
    toaster.id = `toaster-${position}`;
    toaster.classList.add("toaster", position[0] == 't' ? "top" : "bottom", position[1] == 'l' ? "left" : "right");
    document.body.appendChild(toaster);
  }
  
  return toaster;
}

function fadeToast(id: number, position: string) {
  let li = document.getElementById(`toast${id}`)!;
  if (li != null) {
    li.classList.add("fadeOut");
    let removeToast = () => {
      li.classList.add("hidden");
      let toaster = document.getElementById(`toaster-${position}`);
      while (toaster != null
          && toaster.lastChild != null
          && (toaster.lastChild as Element).classList.contains("hidden"))
        toaster.removeChild(toaster.lastChild);
    };
    let timeoutId = setTimeout(removeToast, 1000);
    li.addEventListener("mouseover", () => {
      li.classList.remove("flip", "fadeOut", "hidden");
      clearTimeout(timeoutId);
    });
    li.addEventListener("mouseout", () => {
      li.classList.add("fadeOut");
      timeoutId = setTimeout(removeToast, 1000);
    });
  }
}

export default addToast;
