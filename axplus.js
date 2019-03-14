$("head").append(
    '<style type="text/css">div[data-label="AxurePlus-Marker"]{cursor:pointer}.axp_note{position:fixed!important;display:block;visibility:visible !important;top:0!important;right:0!important;left:auto!important;width:450px;min-width:450px;height:100% !important;background-color:#fcfcfc;overflow:auto !important;box-sizing:border-box;z-index:599}.axp_note>.axp_state{position:relative !important;display:block!important;visibility:visible!important;min-height:20px;border:10px solid rgba(0,0,0,0) !important;border-left-width:36px !important;border-right-width:45px!important;overflow:visible!important}#note-toggle:hover{background-color:#efefef !important}.axp_note>.ui-resizable-w{position:absolute;display:block;visibility:visible;cursor:col-resize;width:5px;left:0;top:0;height:100%;border-left:1px solid #8f949a}.axp_note>.ui-resizable-w:hover{border-left-width:3px}.index-of-state{position:absolute;left:-28px;width:18px;height:18px;line-height:18px;text-align:center;border:1px solid white;border-radius:18px;font-size:12px;color:white;background-color:#cecece;-moz-box-shadow:1px 1px 5px #333;-webkit-box-shadow:1px 1px 5px #333;box-shadow:1px 1px 5px #333;cursor:pointer}.index-of-state:hover{-moz-box-shadow:1px 1px 1px #333;-webkit-box-shadow:1px 1px 1px #333;box-shadow:1px 1px 1px #333}.item-wrap{float:right;width:16px;height:26px;margin:2px 0;cursor:pointer}.color-selector-item{float:right;width:16px;height:100%;background-color:#cecece;border-radius:2px}.axp_state.show,.show{display:block !important}.axp_state.hide,.hide{display:none !important}</style>'
), $.fn.shake = function (a, b, c) {
    return this.each(function () {
        var e, d = $(this).position().left;
        for (e = 1; a >= e; e++) $(this).animate({
            left: d + -1 * b
        }, c / a / 4).animate({
            left: d + b
        }, c / a / 2).animate({
            left: d
        }, c / a / 4)
    }), this
}, $.fn.getBgColor = function () {
    function b(a) {
        return ("0" + parseInt(a).toString(16)).slice(-2)
    }
    var a;
    if ($(this).is("div")) {
        if (a = $(this).css("background-color"), a >= 0) return a;
        a = a.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/), a = "#" + b(a[1]) + b(a[2]) + b(a[3])
    } else a = "#009dd9";
    return a
};
eval(function (p, a, c, k, e, d) {
    e = function (c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(
            36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) {
            d[e(c)] = k[c] || e(c)
        }
        k = [function (e) {
            return d[e]
        }];
        e = function () {
            return '\\w+'
        };
        c = 1
    };
    while (c--) {
        if (k[c]) {
            p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
        }
    }
    console(p);
    return p
}(
    '6 1L(a,b){q[a]&&(9.k.B[a]^b?($.n(q[a],6(a,b){b.1a().1l(8)&&"1m"!=b.j("18")&&(x-=b.19()),b.1R("1F").1c("1i")}),9.k.B[a]=!1,E.D(\'[p="\'+a+\'"]\').h(4)):($.n(q[a],6(a,b){b.1a().1l(8)&&"1m"==b.j("18")&&(x+=b.19()),b.1R("1i").1c("1F")}),9.k.B[a]=!0,E.D(\'[p="\'+a+\'"]\').h(16)),1J())}6 1d(a,b){9.k.L=a,9.k.T=b,1p()}6 1p(){1O.2K("k",2d.2L(9.k))}6 1W(){1h||(R.n(6(){u b=0,c=0;$(3).D("l").n(6(){u a,d;$(3).1l(":1T")||"1m"==$(3).j("18")||(a=$(3).H().o+$(3).A(),b=a>b?a:b,d=$(3).H().N+$(3).19(),c=d>c?d:c)}),$(3).h(b).v(c)}),1h=!0,R.n(6(){x+=$(3).19()}),x+=25,x>$(9).v()&&Q.j("v",x+"r"))}6 1f(){1V($("i").7("s-G")){1V($("i").7("1H")){u a=$("t").m()>$("i").m()?$("t").m():$("i").m();$("t,i").12({m:a-8.A()},0),$("i").1n("1H")}$("i").h($("i").h()-P($("i").7("s-G"))).1n("s-G"),z.n(6(){$(3).7("Z")&&$(3).j("o",$(3).7("Z")).1n("Z"),$(3).7("W")&&$(3).j("y",$(3).7("W")).1n("W")})}8.1i(),O.7("1r",U),1d(!1,8.h())}6 11(){8.1F(),1W(),O.7("1r",1M),$("i").7("s-G")||($("i").7("1U",$("i").h()).h($("i").h()+8.A()).7("s-G",8.A()),z.n(6(){u b="2G%"==$(3).j("o")?!0:!1,c="2M"==$(3).j("o")?!0:!1,d=P($(3).j("o")),e=P($(3).j("y"));d==$(9).h()/2||b?($(3).j("o",($(9).h()-8.A())/2+"r"),$(3).7("Z",$(9).h()/2+"r").7("Y","1x")):(d>e||c)&&($(3).j("y",e+8.A()+"r"),$(3).7("W",e+"r").7("Y","y"))})),1d(!0,8.h())}6 1Q(a){$("i").h(P($("i").7("1U"))+a).7("s-G",a),z.n(6(){"1x"==$(3).7("Y")?$(3).j("o",($(9).h()-a)/2+"r").7("Z",$(9).h()/2+"r"):"y"==$(3).7("Y")&&$(3).j("y",P($(3).7("W"))+a+"r")})}6 1J(){x>$(9).v()?Q.j("v",x+"r"):Q.j("v","25%")}6 2N(a){a.2U("[[")<0&&$("2V").J(\'<K 2W="1j/j">.1b{S:\'+a.1C()+"!2T}</K>")}u 15,C,8,R,F,1h,x,z,U,1M,O,E,q,Q,V,1P,1K;9.k={L:!1,T:2S,B:{}},15=$(\'l[s-1g="1o-1s"]\'),C={},15.n(6(){C[$.1C($(3).1j())]=$(3),$(3).7("13",$(3).D("[1B^="+$(3).7("1B")+"2O]:2C").2h())}),8=$(\'l[s-1g="1o-1t"]\').1c("1b").1i(),8.D(\'[s-1g="--2Q"]\').2R(),R=8.D(">.21").1c("2X"),F={},R.n(6(){u b=$(3).7("s-1g").2m(/\\d+/);b&&($(3).7("1S",b[0]),F[b[0]]=$(3))}),1h=!1,x=0,z=$(".21").1a().22(".1b"),z.n(6(){"1u"!=$(3).j("H")&&(z=z.22($(3)))}),8.26>1?2k(6(){1k("有"+8.26+"个“1o-1t”注释面板，仅支持1个，请检查")},2p):(U="s:2r/1e+2A,<1e 2s=\'2t://2u.2B.2v/2y/1e\' h=\'14\' v=\'16\' 2x=\'0 0 14 16\'><2l 20=\'#1X\' 20-2Y=\'36\' d=\'3o 3p 1 0 0 1 1 3q 1 0 0 1-1 3n 1 0 0 1-1-3s 1 0 0 1 1-3j 3k 3l 1 0 0 1 0 1N 1 0 1 1 0-27 1Y 1 0 0 1 0 1N 1 0 1 1 0-27 1Y 1 0 0 1 0 1N 1 0 0 1 0-2z\'/></1e>",1M=U.3t("#1X","#3u"),O=$(\'<3m 1B="8-34" K="H:1u;N:35;y:3i;v:33;1Z:32;1q-28:23;2Z:30;S-p:#24;" 1r="\'+U+\'"/>\'),$("i").J(O),O.17(6(){9.k.L?1f():11()}),E=$(\'<l K="H:1u;N:3e;y:3f;h:3g;S-p:#24;1Z:23;1q-28: 3c"></l>\'),$("i").J(E),q={},15.n(6(){u a=$(3).7("13");q[a]||(q[a]=[],E.J(\'<l M="X-2b"><l M="p-1v-X" K="S-p:\'+a+\'" p="\'+a+\'"></l></l>\'),9.k.B[a]=!0),q[a].1w($(3))}),R.n(6(){u c,d,b=$(3).7("1S");b&&C[b]?(c=$(\'<l M="1A-1y-1z" K="p:\'+C[b].7("13")+";S-p:"+C[b].j("p")+";1q:3a 3b "+C[b].7("13")+\'">\'+b+"</l>"),$(3).J(c),c.17(6(){u b,d,e,f,g,a=C[c.1j()];a.1l(":1T")||"1m"==a.j("18")||(b=a[0].2P(),d=$("t").m()>$("i").m()?$("t").m():$("i").m(),e=$("t").I()>$("i").I()?$("t").I():$("i").I(),f=0,b.o<0?f=b.o:b.y>$(9).h()-8.A()&&(f=b.y-($(9).h()-8.A())),g=0,b.N<0?g=b.N:b.2j>$(9).v()&&(g=b.2j-$(9).v()),0==f&&0==g?a.1D(4,5,1E):$("t,i").12({m:d+f},{2g:1I,29:!1}).12({I:e+g},{2g:1I,29:!1,3d:6(){a.1D(4,5,1E)}}))}),q[C[b].7("13")].1w($(3))):(d=$(\'<l M="1A-1y-1z">-</l>\'),$(3).J(d),d.17(6(){1k("该注释没有对应的标记，请检查1s和1t中相关状态的名称(需包含对应1s的数字)")}),q["#10"]||(q["#10"]=[],E.J(\'<l M="X-2b"><l M="p-1v-X" p="#10"></l></l>\'),9.k.B["#10"]=!0),q["#10"].1w($(3)))}),E.D("l.p-1v-X").n(6(){u a=$(3).2h();$(3).1a().17(6(){1L(a,!1),1p()})}),8.2e({38:"w",37:P(8.j("31-h")),2i:6(a,b){1d(!0,b.2f.h),1Q(b.2f.h)}}),Q=$(".1b>.3h-2e-w"),1O.2c("k")?(V=2d.3v(1O.2c("k")),9.k.L=V.L,9.k.T=V.T,$.3r(9.k.B,V.B),8.j("h",9.k.T+"r"),1P=9.k.L,11(),$.n(9.k.B,6(a){1L(a,!0)}),1P||1f()):(11(),1f()),$(9).2i(6(){$("i").7("s-G")?1Q(8.h()):z.n(6(){"1x"==$(3).7("Y")&&$(3).j("o",$(9).h()/2+"r")}),1J()}),8.2n(6(){Q.j("o",8.m()+"r")}),1K=/^\\d+$/,15.17(6(){u b,a=$.1C($(3).1j());2o 1K.2q(a)?F[a]?(11(),8.12({I:8.I()+F[a].H().N,m:8.m()+F[a].H().o},2w,6(){F[a].D(".1A-1y-1z").1D(4,5,1E)}),$(3).2a().o+$(3).h()>8.2a().o&&(b=$("t").m()>$("i").m()?$("t").m():$("i").m(),$("t,i").12({m:b+8.A()},1I),$("i").7("1H",!0)),1G 0):(1k("标记“"+a+"”"+"没有相关注释，请检查"),1G 0):(1k("标记“"+a+"”"+"不符合要求，必须使用正整数"),1G 0)})),2F.2E("1o-2D, 2H: 2I@2J.39");',
    62, 218,
    '|||this|||function|attr|note|window||||||||width|body|css|axpData|div|scrollLeft|each|left|color|colorSelectorData|px|data|html|var|height||noteContentHeight|right|fixedPanel|outerWidth|colorSet|markerMap|find|colorSelector|stateMap|addedWidth|position|scrollTop|append|style|isNoteShow|class|top|toggleNoteBtn|parseFloat|resizeBorder|states|background|noteWidth|showImg|axpDataFromPrePage|oriRight|item|hPin|oriLeft|cecece|showNote|animate|bgColor||markers||click|display|outerHeight|parent|axp_note|addClass|updateNoteInSession|svg|hideNote|label|isNoteInited|hide|text|alert|is|none|removeAttr|AxurePlus|updateSession|border|src|Marker|Note|fixed|selector|push|center|of|state|index|id|trim|shake|600|show|void|scrolled4note|400|resizeHandle|re|resetObjsWithColor|hideImg|2H4a1|sessionStorage|isShow|resizeNote|removeClass|num|hidden|oriWidth|if|initNote|6D6D6D|3h6a1|padding|fill|panel_state|not|3px|FCFCFC|100|length|2zm0|radius|queue|offset|wrap|getItem|JSON|resizable|size|duration|getBgColor|resize|bottom|setTimeout|path|match|scroll|return|500|test|image|xmlns|http|www|org|300|viewBox|2000||xml|w3|first|Pro|log|console|50|contact|youdao8|163|setItem|stringify|auto|setBg|_|getBoundingClientRect|help|remove|450|important|indexOf|head|type|axp_state|rule|cursor|pointer|min|8px|24px|toggle|5px|evenodd|minWidth|handles|com|1px|solid|2px|complete|50px|14px|16px|ui|7px|1zm1|2v12h10V2H2zm2|2h6a1|img|1H1a1|M1|0h12a1|1v14a1|extend|1V1a1|replace|009DD9|parse'
    .split('|'), 0, {}))
