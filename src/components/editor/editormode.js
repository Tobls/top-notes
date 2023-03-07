import "codemirror/addon/mode/simple"
import Codemirror from "codemirror/lib/codemirror";

Codemirror.defineSimpleMode("tn", {
    start: [
        {regex: /\[ ]/, token: "todoOpen"},
        {regex: /\[x]/, token: "todoDone"},
        {regex: /# .*/, token: "header-1 header", sol: true},
        {regex: /## .*/, token: "header-2 header", sol: true},
        {regex: /### .*/, token: "header-3 header", sol: true},
        {regex: /#### .*/, token: "header-4 header", sol: true},
        {regex: /##### .*/, token: "header-5 header", sol: true},
        {regex: /###### .*/, token: "header-6 header", sol: true},
        {regex: /_.*_/, token: "cursive"},
        {regex: /\*.*\*/, token: "bold"},
        {regex: /~.*~/, token: "strike"},
        {regex: /(0[0-9]|[12][0-9]|3[12])\.(0[0-9]|1[12])\.([12][0-9]{3})/, token: "date"},
        {regex: /(http(s?):\/\/|www\.).*\.\w+/, token: "link"}
    ]
})