export default () => {
  const body = document.querySelector(`body`);

  document.addEventListener(`DOMContentLoaded`, function () {
    body.classList.add(`page-loading`);
  });
};
