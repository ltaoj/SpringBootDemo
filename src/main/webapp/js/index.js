function uploadFile() {
    var json = {};
    $.ajaxFileUpload({
        url: 'importExcel',
        secureuri: false,
        data: json,
        fileElementId: 'excel',
        dataType: 'json',
        success: function (data, status) {
            if (data.result == "success") {
                console.log(data.object);
            } else {
                alert("上传失败")
            }
        },
        error: function (data, status, e) {
            alert("服务器错误")
        }
    })
}