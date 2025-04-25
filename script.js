document.getElementById('successBtn').addEventListener('click', () => {
  Toastify({
    text: "Well done!",
    duration: 3000,
    close: true,
    gravity: "top",
    position: "right",
    style: {
      background: "linear-gradient(to right, #00b09b, #4CAF50)",
    }
  }).showToast();
});

document.getElementById('failBtn').addEventListener('click', () => {
  Toastify({
    text: "Oh snap! Change a few things up and try submitting again.",
    duration: 3000,
    close: true,
    gravity: "top",
    position: "right",
    style: {
      background: "linear-gradient(to right, #f85032, #e73827)",
    }
  }).showToast();
});

document.getElementById('warningBtn').addEventListener('click', () => {
  Toastify({
    text: "Warning!",
    duration: 3000,
    close: true,
    gravity: "top",
    position: "right",
    style: {
      background: "linear-gradient(to right, #f7971e, #ffd200)",
    }
  }).showToast();
});