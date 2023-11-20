function getFrameOfVideo() {
    const canvas = document.getElementById("canvasFrameVideo");
    const ctx = canvas.getContext("2d");
    const video = document.getElementById("videoSelected");
    ctx.drawImage(video, 1, 1);
};