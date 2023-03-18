try {
    (() => {
        var e = __$$hmAppManager$$__.currentApp;
        var t = e.current,
            {
                px: o
            } = (new DeviceRuntimeCore.WidgetFactory(
            new DeviceRuntimeCore.HmDomApi(e, t)),
            e.app.__globals__);
        try {
            (() => {
                var e = __$$hmAppManager$$__.currentApp,
                    t = e.current;
                new DeviceRuntimeCore.WidgetFactory(
                new DeviceRuntimeCore.HmDomApi(e, t),
                    "drink");
                DeviceRuntimeCore.HmLogger.getLogger("sanjiao");
                t.module = DeviceRuntimeCore.Page({
                    init_view() {
                        hmUI.setLayerScrolling(false); //禁用页面上下滑动
                        function splitStringByCount(str, count) {
                              const arr = [];
                              for (let i = 0; i < str.length; i += count) {
                                arr.push(str.substr(i, count));
                              }
                              return arr;
                            }
                        var sn=0
                        var word={}
                        word.raw_word='abacus|n.算盘\n' +
  'abandon|vt.放弃,遗弃n.放任,狂热\n' +
  'abandonment|n.放弃\n' +
  'abase|v.降低\n' +
  'abasement|n.降低\n' +
  'abash|vt.使局促不安,使困窘\n' +
  'abashed|adj.不安的,窘迫的\n' +
  'abate|vt.使(数量、程度等)减少,减轻,除去,缓和,打折扣vi.(数量、程度等)减少,减轻,失效,缓和,(法令等)被废除\n' +
  'abattoir|n.<法>屠宰场,(拳击,摔跤,斗牛等的)角斗场\n' +
  'abbess|n.女修道院院长,女庵主持\n' +
  'abbey|n.修道院,修道士（总称）\n' +
  'abbot|n.修道院,修道士的总称\n' +
  'abbreviate|v.缩写,缩短,简化,简写成,缩写为\n' +
  'abbreviation|n.缩写,缩写词\n' +
  'abdicate|v.退位,放弃(职位,权力等)\n' +
  'abdication|n.退位,让位\n' +
  'abdomen|n.腹,腹部\n' +
  'abdominal|adj.腹部的'
                        word=word.raw_word.split('\n')
                        var text1 = hmUI.createWidget(hmUI.widget.TEXT, {
                            x: 20,
                            y: 300 / 2,
                            w: 160,
                            h: 100,
                            color: 0xeab007,
                            text_size: 50,
                            align_h: hmUI.align.CENTER_H,
                            align_v: hmUI.align.CENTER_V,
                            text_style: hmUI.text_style.NONE,
                            text: ''+word[sn].split('|')[0]
                        })
                        text1.addEventListener(hmUI.event.CLICK_DOWN, ()=>{
                            sn += 1;
                                text1.setProperty(hmUI.prop.TEXT, word[sn].split('|')[0]);
                                text2.setProperty(hmUI.prop.TEXT, splitStringByCount(''+word[sn].split('|')[1], 5).join('\n'));
                        
                        })
                        var text2 = hmUI.createWidget(hmUI.widget.TEXT, {
                            x: 20,
                            y: 490 / 2,
                            w: 160,
                            h: 100,
                            color: 0xffffff,
                            text_size: 30,
                            align_h: hmUI.align.CENTER_H,
                            align_v: hmUI.align.CENTER_V,
                            text_style: hmUI.text_style.NONE,
                            text: splitStringByCount(''+word[sn].split('|')[1], 5).join('\n')
                        })
                        text2.addEventListener(hmUI.event.CLICK_DOWN, ()=>{
                            sn += 1;
                                text1.setProperty(hmUI.prop.TEXT, word[sn].split('|')[0]);
                                text2.setProperty(hmUI.prop.TEXT, splitStringByCount(''+word[sn].split('|')[1], 5).join('\n'));
                        
                        })
                    },
                    onInit() {
                        console.log("index page.js on init invoke"), this.init_view();
                    },
                    onReady() {
                        console.log("index page.js on ready invoke");
                    },
                    onShow() {
                        console.log("index page.js on show invoke");
                    },
                    onHide() {
                        console.log("index page.js on hide invoke");
                    },
                    onDestory() {
                        console.log("index page.js on destory invoke");
                    }
                });
            })();
        } catch (e) {
            console.log(e);
        }
    })();
} catch (e) {
    console.log(e);
}