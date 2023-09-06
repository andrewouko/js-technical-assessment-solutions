function solution(s, t){
    let count = 0
    for(const c of s.matchAll(/\d/g)){
        console.log(c, c[0], c['index'], s[c['index']])
        console.log('replace', `${s.substr(0, c['index'])}${s.substr(c['index'] + 1)}`)
        if(`${s.substr(0, c['index'])}${s.substr(c['index'] + 1)}` < t) count++
    }
    for(const c of t.matchAll(/\d/g)){
        console.log(c, c[0], c['index'], t[c['index']])
        console.log('replace', `${t.substr(0, c['index'])}${t.substr(c['index'] + 1)}`)
        if(`${t.substr(0, c['index'])}${t.substr(c['index'] + 1)}` > s) count++
    }
    console.log('count', count)
}
s = "ab12c"
t = "1zz456"
solution(s, t)


const names = "Andrew Onyango Ouko"
console.log([...names.matchAll(/^(\w{1,})\s(.{1,})/g)][0])