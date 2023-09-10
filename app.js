// じゃんけんの手を入力してもらうプロンプト欄を生成
let user_hand = prompt("じゃんけんの手をグー、チョキ、パーから選んでください。");

// じゃんけんの手をランダムに作成する関数を呼び出す
let js_hand = getJShand();

// ユーザーの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
let judge = winLose(user_hand, js_hand);

// 結果を表示する
alert("あなたの選んだ手は" + user_hand + "です。\nJavaScriptの選んだ手は" + js_hand + "です。\n結果は" + judge + "です。");

// ランダムでじゃんけんの手を作成する関数
function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3 );
  let hand_name;

  if(js_hand_num == 0){
    js_hand = "グー";
  } else if(js_hand_num == 1){
    js_hand = "チョキ";
  } else if(js_hand_num == 2){
    js_hand = "パー";
  }

  return js_hand;
}

// ユーザーの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js){
  let winLoseStr;

  if(user == "グー"){

  }
}






// let user_hand = prompt("じゃんけんの手をグー、チョキ、パーから選んでください。");
// alert("あなたの選んだ手は" + user_hand + "です。");



// let promptStr = prompt("何か好きな文字を入力してください。");

// alert(promptStr);



// メイン部分
// let alertString;

// 作成した関数を呼び出し、変数を格納
// alertString = addString("WebCamp");

// 変数の中身をアラートで表示する
// alert(alertString);

// 作成した関数
// function addString(strA){
//   let addStr = "Hello " + strA;
//   return addStr;
// }



// let i;
// let num = 0;

// for(i = 1; i < 11; i++){ 　//i++はi=i+1と同じ
//   num = num + i;
// }
// alert("1から10まで足し算した結果は" + num + "です");



// let max = 100;
// let num = 1;
// let count = 0;

// while(num < max){
//   num = num * 2;
//   count = count + 1;
// }

// alert("2をかけ続けて" + max + "を超えるのに必要だった回数は" + count + "回です");

// let orange = 200;
// let apple = 120;

// if(orange < apple){
//   alert("みかんの値段がリンゴより安い");
// } else if(orange == apple){
//   alert("みかんとリンゴが同じ値段");
// } else{
//   alert("みかんの値段がリンゴより高い");
// }