// 상태변경될때마다, LocalStorage에 저장만 하면 됨
// https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage
export function setTaskStorage(tasks){
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function getTaskStorage(){
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  return tasks ?? [];
}
