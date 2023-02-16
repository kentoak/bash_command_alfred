#!/usr/bin/env node
import alfy from 'alfy';

//argはエンターキーを押した時にでるやつ

const before=[
    ["curl \"https:~~~\""],
    ["grep (検索文字列) (file)"]
]
// var obj1 = obj
// console.log("obj1 is ...",obj1)
const keyword = alfy.input;
if (keyword === before[0][0]){
    const tmp2=[
        ["-H, --head","リクエストヘッダーを指定、e.g.) -H \"Authorization: Bearer\""],
        ["-L, --location","要求したページにリダイレクトが掛かっていた場合に追従する"],
        ["-X {メソッド名}, --request {メソッド名}","HTTPメソッドの指定"],
        ["-I, --head","レスポンスヘッダのみ取得"],
        ["-i, –-include","レスポンスヘッダとレスポンスボディを出力"],
        ["-v, --verbose","リクエストヘッダとレスポンスヘッダとレスポンスボディを出力"],
        ["-f, --fail","403, 404, 500 などエラーの時に標準出力にエラー文字を出さない"],
        ["403, 404, 500 などエラーの時に標準出力にエラー文字を出さない","進捗の表示をしない"],
        ["-sS, --show-error","進捗の表示をしないけれどエラーがあったら表示をしたいとき"],
        ["-#","プログレスバーで進捗率を表示"],
        ["-O, --remote-name","現在のディレクトリにダウンロード"],
        ["-o (file), —output (file)","ファイル名を(file)に変更"],
        ["-x プロキシサーバ:ポート番号 --proxy-user ユーザ名:パスワード","プロキシ経由でアクセスする"],
        ["-d <data>, --data <data>","データ送信"]
    ]
    var obj2=[]
    for(var i=0;i<tmp2.length;i++){
        obj2.push({
            title: tmp2[i][0],
            subtitle: tmp2[i][1],
            icon: {path: './img/main02.jpg'},
            arg: keyword});
        };
    alfy.output(obj2);
}else if (keyword == before[1][0]){
    const tmp2=[
        ["-c, --context","マッチした行数を表示"],
        ["-v, --invert-match","マッチしない行を表示"],
        ["-A (数), --after-context=(数)", "マッチした行の後ろの行(指定した分)も表示"],
        ["-B (数), --before-context=(数)","マッチした行の前の行(指定した分)も表示"]
    ]
    var obj2=[]
    for(var i=0;i<tmp2.length;i++){
    obj2.push({
        title: tmp2[i][0],
        subtitle: tmp2[i][1],
        icon: {path: './img/main02.jpg'},
        arg: keyword});
    };
    alfy.output(obj2);
}

