#!/usr/bin/env node
import alfy from 'alfy';

//argはエンターキーを押した時にでるやつ

const tmp=[
    ["grep (検索文字列) (file)","検索文字列がある行だけを表示"],
    ["mv (fileA) (fileB)","ファイルAの名前をファイルBに変更"],
    ["touch (file)","空のファイルを作成"],
    ["curl \"https:~~~\"","curlコマンド"],
    ["awk -F'[フィールド区切り文字(複数可能)]' -v '変数=xx' '{awkコマンド}' file","awkは入力として受け取った文字列に対して、フィールド区切り文字やレコード区切り文字を指定して、「列」に対する処理を行うためのコマンド"],
    ["traceroute https:~~~","IPネットワークにおいてノードまでの経路情報を取得する"],
    ["type (cmd)","コマンドの保存先を調べる"],
    ["whois (AS番号)","インターネット上でのドメイン名やIPアドレスの所有者を検索し、ドメイン情報を表示する"],
    ["whoami","ユーザー名を出力"],
    ["dig https:~~~","DNSサーバに問い合わせることで、ドメイン名からIPアドレスを調べるコマンド"],
    ["find . -iname '*.txt' -print0 | xargs -0 grep -ni {調べたい文字}","指定ディレクトリ以下のファイルを列挙。ヌル文字を区切り文字として出力"],
    ["airport -s","RSSI強度を調べる"],
    ["1> (file)","標準出力を(file)に書き出す。"],
    ["2> (file)","標準エラー出力を(file)に書き出す"],
    ["1>&2","標準出力を標準エラー出力に書き出す。"],
    ["<","標準入力をファイルにリダイレクトする"],
    ["(cmd1) | (cmd2)","前のコマンドの標準出力を次のコマンドに標準入力として渡す操作"],
    ["(cmd1) | xargs (cmd2)","cmd1の結果(標準出力)をcmd2の引数にする"],
    ["(cmd) > /dev/null 2>&1","標準エラー出力の結果を標準出力にマージして、/dev/nullに捨てる"],
    ["for e in (cmd) ; echo $e; done","bashのfor文"],
    ["mkdir {ディレクトリ名}","ディレクトリを作成"],
    ["rmdir {ディレクトリ名}","ディレクトリを削除"]
]

var obj=[]

for(var i=0;i<tmp.length;i++){
  obj.push({
    title: tmp[i][0],
    subtitle: tmp[i][1],
    icon: {path: './img/main01.jpg'},
    arg: tmp[i][0]});
};

// const itemss = alfy.inputMatches(obj,'title');
// alfy.output(itemss);

const keyword = alfy.input;
if (process.argv.length==0){
  alfy.output(obj);
}else if (process.argv.length==3){
  const itemss = alfy.inputMatches(obj,'title');
  alfy.output(itemss);
}else{
  console.log("bashcom {query}")
}

export {obj as obj};
