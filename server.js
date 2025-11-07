const kv = await Deno.openKv();

await kv.set(['pokemon', 'ブラッキー'], { type: '悪', level: 35 });
let pkmn = await kv.get(['pokemon', 'ブラッキー']);
// console.log(pkmn.key, pkmn.value);

// レコードの削除
await kv.delete(['pokemon', 'ブラッキー']);

// 確認
pkmn = await kv.get(['pokemon', 'ブラッキー']);
console.log(pkmn.value); // → null
