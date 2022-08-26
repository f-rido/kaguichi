//ヘッダーの共通化
fetch("header.html") //ヘッダーのファイル名を入れる
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  }); //index.htmlの<header>部分に読み込む