let fileInput = document.getElementById("file-input");
let fileList = document.getElementById("files-list");
let numOfFiles = document.getElementById("num-of-files");

fileInput.addEventListener("change", function () {
  fileList.innerHTML = "";
  numOfFiles.textContent = `${fileInput.files.length}個檔案`;

  for (i of fileInput.files) {
    console.log(i);
    let reader = new FileReader();
    let lisItem = document.createElement("li");
    let fileName = i.name;
    let fileSize = (i.size / 1024).toFixed(1);
    lisItem.innerHTML = `<h5>${fileName}</h5><h5>${fileSize}KB</h5>`;
    if (fileSize >= 1024) {
      fileSize = (fileSize / 1024).toFixed(1);
      lisItem.innerHTML = `<h5>${fileName}</h5><h5>${fileSize}MB</h5>`;
    }

    fileList.appendChild(lisItem);
  }
});
