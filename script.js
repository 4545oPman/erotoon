// 動画リストの各アイテムを取得
const videoListItems = document.querySelectorAll("#video-list li");

// メイン動画プレイヤーを取得
const mainVideo = document.getElementById("main-video");

// 動画リストのクリックイベントを設定
videoListItems.forEach(item => {
    item.addEventListener("click", () => {
        // data-video属性から動画ファイルのパスを取得
        const videoSrc = item.getAttribute("data-video");
        // メイン動画プレイヤーのソースを設定
        mainVideo.src = videoSrc;
        // 動画を再生
        mainVideo.play();
    });
});
