for(var i = 0; i < 556; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

	SetPanelVisibility('u444','hidden','none',500);

}
else
if (true) {

	SetPanelVisibility('u456','','none',500);

	SetPanelState('u456', 'pd0u456','none','',500,'none','',500);

}

if (true) {

	SetPanelState('u26', 'pd0u26','none','',500,'none','',500);

}

});

widgetIdToPanelStateChangeFunction['u455'] = function() {
var e = windowEvent;

if (((GetGlobalVariableValue('imgitem')) == ('1')) || ((GetGlobalVariableValue('imgitem')) == (''))) {

SetGlobalVariableValue('imgitem', '2');

	SetPanelState('u456', 'pd1u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd1u471','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('imgitem')) == ('2')) {

SetGlobalVariableValue('imgitem', '3');

	SetPanelState('u456', 'pd2u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd2u471','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('imgitem')) == ('3')) {

SetGlobalVariableValue('imgitem', '4');

	SetPanelState('u456', 'pd3u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd3u471','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('imgitem')) == ('4')) {

SetGlobalVariableValue('imgitem', '5');

	SetPanelState('u456', 'pd4u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd4u471','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('imgitem')) == ('5')) {

SetGlobalVariableValue('imgitem', '6');

	SetPanelState('u456', 'pd5u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd5u471','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('imgitem')) == ('6')) {

SetGlobalVariableValue('imgitem', '1');

	SetPanelState('u456', 'pd0u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd0u471','none','',500,'none','',500);

}

}

widgetIdToShowFunction['u456'] = function() {
var e = windowEvent;

if (true) {
function waitue87176a5db4f4ee7b156c4e2d55eb19d1() {

	SetPanelState('u455', 'pd1u455','none','',500,'none','',500);
}
setTimeout(waitue87176a5db4f4ee7b156c4e2d55eb19d1, 4000);

}

}

widgetIdToPanelStateChangeFunction['u456'] = function() {
var e = windowEvent;

if ((GetPanelState('u455')) == ('pd0u455')) {
function waituef8e38b09b0e45059c7d0a3b8af7baa31() {

	SetPanelState('u455', 'pd1u455','none','',500,'none','',500);
}
setTimeout(waituef8e38b09b0e45059c7d0a3b8af7baa31, 4000);

}

if ((GetPanelState('u455')) == ('pd1u455')) {
function waitu09bd162b1c4c4a279546f1880c280b491() {

	SetPanelState('u455', 'pd0u455','none','',500,'none','',500);
}
setTimeout(waitu09bd162b1c4c4a279546f1880c280b491, 4000);

}

}
gv_vAlignTable['u270'] = 'center';gv_vAlignTable['u272'] = 'center';gv_vAlignTable['u274'] = 'center';gv_vAlignTable['u275'] = 'top';gv_vAlignTable['u276'] = 'top';gv_vAlignTable['u278'] = 'top';gv_vAlignTable['u279'] = 'top';gv_vAlignTable['u280'] = 'top';gv_vAlignTable['u281'] = 'top';gv_vAlignTable['u283'] = 'top';gv_vAlignTable['u285'] = 'center';gv_vAlignTable['u287'] = 'center';gv_vAlignTable['u289'] = 'center';document.getElementById('u490_img').tabIndex = 0;

u490.style.cursor = 'pointer';
$axure.eventManager.click('u490', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '2');

	SetPanelState('u456', 'pd1u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd1u471','none','',500,'none','',500);

}
});
gv_vAlignTable['u491'] = 'center';document.getElementById('u492_img').tabIndex = 0;

u492.style.cursor = 'pointer';
$axure.eventManager.click('u492', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '3');

	SetPanelState('u456', 'pd2u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd2u471','none','',500,'none','',500);

}
});
gv_vAlignTable['u493'] = 'center';document.getElementById('u494_img').tabIndex = 0;

u494.style.cursor = 'pointer';
$axure.eventManager.click('u494', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '4');

	SetPanelState('u456', 'pd3u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd3u471','none','',500,'none','',500);

}
});
gv_vAlignTable['u495'] = 'center';document.getElementById('u496_img').tabIndex = 0;

u496.style.cursor = 'pointer';
$axure.eventManager.click('u496', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '5');

	SetPanelState('u456', 'pd4u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd4u471','none','',500,'none','',500);

}
});
gv_vAlignTable['u100'] = 'top';gv_vAlignTable['u101'] = 'top';gv_vAlignTable['u102'] = 'top';gv_vAlignTable['u103'] = 'top';gv_vAlignTable['u104'] = 'top';gv_vAlignTable['u105'] = 'top';gv_vAlignTable['u106'] = 'top';gv_vAlignTable['u107'] = 'top';gv_vAlignTable['u108'] = 'top';gv_vAlignTable['u109'] = 'top';gv_vAlignTable['u297'] = 'top';gv_vAlignTable['u298'] = 'top';gv_vAlignTable['u299'] = 'top';gv_vAlignTable['u110'] = 'top';gv_vAlignTable['u111'] = 'top';gv_vAlignTable['u112'] = 'top';gv_vAlignTable['u113'] = 'top';gv_vAlignTable['u114'] = 'top';gv_vAlignTable['u115'] = 'top';gv_vAlignTable['u116'] = 'top';gv_vAlignTable['u117'] = 'top';gv_vAlignTable['u118'] = 'top';gv_vAlignTable['u119'] = 'top';document.getElementById('u510_img').tabIndex = 0;

u510.style.cursor = 'pointer';
$axure.eventManager.click('u510', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '5');

	SetPanelState('u456', 'pd4u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd4u471','none','',500,'none','',500);

}
});
gv_vAlignTable['u30'] = 'top';gv_vAlignTable['u31'] = 'top';gv_vAlignTable['u32'] = 'top';gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u120'] = 'top';gv_vAlignTable['u121'] = 'top';gv_vAlignTable['u122'] = 'top';gv_vAlignTable['u124'] = 'center';gv_vAlignTable['u126'] = 'center';gv_vAlignTable['u127'] = 'top';gv_vAlignTable['u128'] = 'top';gv_vAlignTable['u130'] = 'top';gv_vAlignTable['u131'] = 'top';gv_vAlignTable['u132'] = 'top';gv_vAlignTable['u133'] = 'top';gv_vAlignTable['u134'] = 'top';gv_vAlignTable['u135'] = 'top';gv_vAlignTable['u136'] = 'top';gv_vAlignTable['u137'] = 'top';gv_vAlignTable['u138'] = 'top';gv_vAlignTable['u139'] = 'top';gv_vAlignTable['u140'] = 'top';gv_vAlignTable['u142'] = 'center';gv_vAlignTable['u143'] = 'top';gv_vAlignTable['u144'] = 'top';gv_vAlignTable['u145'] = 'top';gv_vAlignTable['u146'] = 'top';gv_vAlignTable['u147'] = 'top';gv_vAlignTable['u148'] = 'top';gv_vAlignTable['u149'] = 'top';gv_vAlignTable['u501'] = 'center';document.getElementById('u502_img').tabIndex = 0;

u502.style.cursor = 'pointer';
$axure.eventManager.click('u502', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '1');

	SetPanelState('u456', 'pd0u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd0u471','none','',500,'none','',500);

}
});
gv_vAlignTable['u503'] = 'center';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u150'] = 'top';gv_vAlignTable['u151'] = 'top';gv_vAlignTable['u152'] = 'top';gv_vAlignTable['u153'] = 'top';gv_vAlignTable['u154'] = 'top';gv_vAlignTable['u155'] = 'top';gv_vAlignTable['u156'] = 'top';gv_vAlignTable['u157'] = 'top';gv_vAlignTable['u158'] = 'top';gv_vAlignTable['u159'] = 'top';gv_vAlignTable['u511'] = 'center';document.getElementById('u512_img').tabIndex = 0;

u512.style.cursor = 'pointer';
$axure.eventManager.click('u512', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '6');

	SetPanelState('u456', 'pd5u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd5u471','none','',500,'none','',500);

}
});
gv_vAlignTable['u513'] = 'center';gv_vAlignTable['u21'] = 'center';
$axure.eventManager.mouseover('u22', function(e) {
if (!IsTrueMouseOver('u22',e)) return;
if (true) {

SetGlobalVariableValue('kuan', '' + (GetWidgetText('u1')) + '');

}

if ((GetGlobalVariableValue('lianjiexuhao')) == ('')) {

SetGlobalVariableValue('lianjiexuhao', '1');

}

if ((GetGlobalVariableValue('lianjiexuhao')) > Number('1')) {

	MoveWidgetBy('u19', GetNum('' + ( - (GetGlobalVariableValue('lianjiexuhao') - 1) * GetGlobalVariableValue('kuan')) + ''), GetNum(''),'easeOutCubic',500);

}
else
if ((GetGlobalVariableValue('lianjiexuhao')) < Number('1')) {

	MoveWidgetBy('u19', GetNum('' + ((1 - GetGlobalVariableValue('lianjiexuhao')) * GetGlobalVariableValue('kuan')) + ''), GetNum(''),'easeInCubic',500);

}

if (true) {

SetGlobalVariableValue('lianjiexuhao', '1');

}

if (true) {

	SetPanelState('u26', 'pd1u26','none','',500,'fade','',500);

}
});

$axure.eventManager.mouseout('u22', function(e) {
if (!IsTrueMouseOut('u22',e)) return;
if (true) {

	SetPanelState('u26', 'pd0u26','none','',500,'none','',500);

}
});
gv_vAlignTable['u22'] = 'top';
$axure.eventManager.mouseover('u23', function(e) {
if (!IsTrueMouseOver('u23',e)) return;
if (true) {

SetGlobalVariableValue('kuan', '' + (GetWidgetText('u1')) + '');

}

if ((GetGlobalVariableValue('lianjiexuhao')) == ('')) {

SetGlobalVariableValue('lianjiexuhao', '1');

}

if ((GetGlobalVariableValue('lianjiexuhao')) > Number('2')) {

	MoveWidgetBy('u19', GetNum('' + ( - (GetGlobalVariableValue('lianjiexuhao') - 2) * GetGlobalVariableValue('kuan')) + ''), GetNum(''),'easeOutCubic',500);

}
else
if ((GetGlobalVariableValue('lianjiexuhao')) < Number('2')) {

	MoveWidgetBy('u19', GetNum('' + ((2 - GetGlobalVariableValue('lianjiexuhao')) * GetGlobalVariableValue('kuan')) + ''), GetNum(''),'easeInCubic',500);

}

if (true) {

SetGlobalVariableValue('lianjiexuhao', '2');

}

if (true) {

	SetPanelState('u26', 'pd2u26','none','',500,'fade','',500);

}
});

$axure.eventManager.mouseout('u23', function(e) {
if (!IsTrueMouseOut('u23',e)) return;
if (true) {

	SetPanelState('u26', 'pd0u26','none','',500,'none','',500);

}
});
gv_vAlignTable['u23'] = 'top';
$axure.eventManager.mouseover('u24', function(e) {
if (!IsTrueMouseOver('u24',e)) return;
if (true) {

SetGlobalVariableValue('kuan', '' + (GetWidgetText('u1')) + '');

}

if ((GetGlobalVariableValue('lianjiexuhao')) == ('')) {

SetGlobalVariableValue('lianjiexuhao', '1');

}

if ((GetGlobalVariableValue('lianjiexuhao')) > Number('3')) {

	MoveWidgetBy('u19', GetNum('' + ( - (GetGlobalVariableValue('lianjiexuhao') - 3) * GetGlobalVariableValue('kuan')) + ''), GetNum(''),'easeOutCubic',500);

}
else
if ((GetGlobalVariableValue('lianjiexuhao')) < Number('3')) {

	MoveWidgetBy('u19', GetNum('' + ((3 - GetGlobalVariableValue('lianjiexuhao')) * GetGlobalVariableValue('kuan')) + ''), GetNum(''),'easeInCubic',500);

}

if (true) {

SetGlobalVariableValue('lianjiexuhao', '3');

}

if (true) {

	SetPanelState('u26', 'pd3u26','none','',500,'fade','',500);

}
});

$axure.eventManager.mouseout('u24', function(e) {
if (!IsTrueMouseOut('u24',e)) return;
if (true) {

	SetPanelState('u26', 'pd0u26','none','',500,'none','',500);

}
});
gv_vAlignTable['u24'] = 'top';
$axure.eventManager.mouseover('u25', function(e) {
if (!IsTrueMouseOver('u25',e)) return;
if (true) {

SetGlobalVariableValue('kuan', '' + (GetWidgetText('u1')) + '');

}

if ((GetGlobalVariableValue('lianjiexuhao')) == ('')) {

SetGlobalVariableValue('lianjiexuhao', '1');

}

if ((GetGlobalVariableValue('lianjiexuhao')) > Number('4')) {

	MoveWidgetBy('u19', GetNum('' + ( - (GetGlobalVariableValue('lianjiexuhao') - 4) * GetGlobalVariableValue('kuan')) + ''), GetNum(''),'easeOutCubic',500);

}
else
if ((GetGlobalVariableValue('lianjiexuhao')) < Number('4')) {

	MoveWidgetBy('u19', GetNum('' + ((4 - GetGlobalVariableValue('lianjiexuhao')) * GetGlobalVariableValue('kuan')) + ''), GetNum(''),'easeInCubic',500);

}

if (true) {

SetGlobalVariableValue('lianjiexuhao', '4');

}

if (true) {

	SetPanelState('u26', 'pd4u26','none','',500,'fade','',500);

}
});

$axure.eventManager.mouseout('u25', function(e) {
if (!IsTrueMouseOut('u25',e)) return;
if (true) {

	SetPanelState('u26', 'pd0u26','none','',500,'none','',500);

}
});
gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u28'] = 'center';gv_vAlignTable['u29'] = 'top';gv_vAlignTable['u160'] = 'top';gv_vAlignTable['u161'] = 'top';gv_vAlignTable['u162'] = 'top';gv_vAlignTable['u163'] = 'top';gv_vAlignTable['u164'] = 'top';gv_vAlignTable['u165'] = 'top';gv_vAlignTable['u166'] = 'top';gv_vAlignTable['u167'] = 'top';gv_vAlignTable['u168'] = 'top';gv_vAlignTable['u169'] = 'top';gv_vAlignTable['u521'] = 'center';document.getElementById('u522_img').tabIndex = 0;

u522.style.cursor = 'pointer';
$axure.eventManager.click('u522', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '4');

	SetPanelState('u456', 'pd3u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd3u471','none','',500,'none','',500);

}
});
gv_vAlignTable['u203'] = 'top';gv_vAlignTable['u204'] = 'top';gv_vAlignTable['u205'] = 'top';gv_vAlignTable['u206'] = 'top';gv_vAlignTable['u207'] = 'top';gv_vAlignTable['u34'] = 'top';gv_vAlignTable['u35'] = 'top';gv_vAlignTable['u36'] = 'top';gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u38'] = 'top';gv_vAlignTable['u39'] = 'top';gv_vAlignTable['u170'] = 'top';gv_vAlignTable['u171'] = 'top';gv_vAlignTable['u172'] = 'top';gv_vAlignTable['u173'] = 'top';gv_vAlignTable['u174'] = 'top';gv_vAlignTable['u175'] = 'top';gv_vAlignTable['u176'] = 'top';gv_vAlignTable['u177'] = 'top';gv_vAlignTable['u178'] = 'top';gv_vAlignTable['u179'] = 'top';gv_vAlignTable['u531'] = 'center';document.getElementById('u532_img').tabIndex = 0;

u532.style.cursor = 'pointer';
$axure.eventManager.click('u532', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '2');

	SetPanelState('u456', 'pd1u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd1u471','none','',500,'none','',500);

}
});
gv_vAlignTable['u533'] = 'center';gv_vAlignTable['u40'] = 'top';gv_vAlignTable['u41'] = 'top';gv_vAlignTable['u42'] = 'top';gv_vAlignTable['u43'] = 'top';gv_vAlignTable['u44'] = 'top';gv_vAlignTable['u45'] = 'top';gv_vAlignTable['u46'] = 'top';gv_vAlignTable['u47'] = 'top';gv_vAlignTable['u48'] = 'top';gv_vAlignTable['u49'] = 'top';gv_vAlignTable['u181'] = 'center';gv_vAlignTable['u183'] = 'center';gv_vAlignTable['u184'] = 'top';gv_vAlignTable['u185'] = 'top';gv_vAlignTable['u187'] = 'top';gv_vAlignTable['u188'] = 'top';gv_vAlignTable['u189'] = 'top';gv_vAlignTable['u541'] = 'center';gv_vAlignTable['u543'] = 'center';gv_vAlignTable['u50'] = 'top';gv_vAlignTable['u51'] = 'top';gv_vAlignTable['u52'] = 'top';gv_vAlignTable['u53'] = 'top';gv_vAlignTable['u54'] = 'top';gv_vAlignTable['u55'] = 'top';gv_vAlignTable['u56'] = 'top';gv_vAlignTable['u57'] = 'top';gv_vAlignTable['u58'] = 'top';gv_vAlignTable['u59'] = 'top';gv_vAlignTable['u190'] = 'top';gv_vAlignTable['u191'] = 'top';gv_vAlignTable['u192'] = 'top';gv_vAlignTable['u193'] = 'top';gv_vAlignTable['u194'] = 'top';gv_vAlignTable['u195'] = 'top';gv_vAlignTable['u196'] = 'top';gv_vAlignTable['u197'] = 'top';gv_vAlignTable['u199'] = 'center';gv_vAlignTable['u551'] = 'center';document.getElementById('u552_img').tabIndex = 0;

u552.style.cursor = 'pointer';
$axure.eventManager.click('u552', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '5');

	SetPanelState('u456', 'pd4u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd4u471','none','',500,'none','',500);

}
});
gv_vAlignTable['u553'] = 'center';gv_vAlignTable['u60'] = 'top';gv_vAlignTable['u61'] = 'top';gv_vAlignTable['u62'] = 'top';gv_vAlignTable['u63'] = 'top';gv_vAlignTable['u64'] = 'top';gv_vAlignTable['u65'] = 'top';gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u69'] = 'center';gv_vAlignTable['u70'] = 'top';gv_vAlignTable['u71'] = 'top';gv_vAlignTable['u73'] = 'top';gv_vAlignTable['u74'] = 'top';gv_vAlignTable['u75'] = 'top';gv_vAlignTable['u76'] = 'top';gv_vAlignTable['u77'] = 'top';gv_vAlignTable['u78'] = 'top';gv_vAlignTable['u79'] = 'top';gv_vAlignTable['u80'] = 'top';gv_vAlignTable['u81'] = 'top';gv_vAlignTable['u82'] = 'top';gv_vAlignTable['u83'] = 'top';gv_vAlignTable['u85'] = 'center';gv_vAlignTable['u86'] = 'top';gv_vAlignTable['u87'] = 'top';gv_vAlignTable['u88'] = 'top';gv_vAlignTable['u89'] = 'top';gv_vAlignTable['u90'] = 'top';gv_vAlignTable['u91'] = 'top';gv_vAlignTable['u92'] = 'top';gv_vAlignTable['u93'] = 'top';gv_vAlignTable['u94'] = 'top';gv_vAlignTable['u95'] = 'top';gv_vAlignTable['u96'] = 'top';gv_vAlignTable['u97'] = 'top';gv_vAlignTable['u98'] = 'top';gv_vAlignTable['u99'] = 'top';gv_vAlignTable['u401'] = 'center';gv_vAlignTable['u404'] = 'center';gv_vAlignTable['u406'] = 'center';gv_vAlignTable['u409'] = 'center';gv_vAlignTable['u412'] = 'center';gv_vAlignTable['u415'] = 'center';gv_vAlignTable['u417'] = 'center';gv_vAlignTable['u420'] = 'center';gv_vAlignTable['u423'] = 'center';gv_vAlignTable['u426'] = 'center';gv_vAlignTable['u428'] = 'center';gv_vAlignTable['u290'] = 'top';gv_vAlignTable['u293'] = 'center';gv_vAlignTable['u294'] = 'top';gv_vAlignTable['u295'] = 'top';gv_vAlignTable['u296'] = 'top';gv_vAlignTable['u431'] = 'center';gv_vAlignTable['u434'] = 'center';gv_vAlignTable['u435'] = 'top';gv_vAlignTable['u436'] = 'top';gv_vAlignTable['u438'] = 'center';gv_vAlignTable['u440'] = 'top';gv_vAlignTable['u441'] = 'top';gv_vAlignTable['u442'] = 'top';
$axure.eventManager.mouseover('u443', function(e) {
if (!IsTrueMouseOver('u443',e)) return;
if (true) {

	SetPanelVisibility('u444','','none',500);

}
});

$axure.eventManager.mouseout('u443', function(e) {
if (!IsTrueMouseOut('u443',e)) return;
if (true) {

	SetPanelVisibility('u444','hidden','none',500);

}
});
gv_vAlignTable['u443'] = 'top';gv_vAlignTable['u446'] = 'center';gv_vAlignTable['u448'] = 'center';gv_vAlignTable['u449'] = 'top';gv_vAlignTable['u450'] = 'top';gv_vAlignTable['u451'] = 'top';gv_vAlignTable['u453'] = 'top';
$axure.eventManager.mouseover('u457', function(e) {
if (!IsTrueMouseOver('u457',e)) return;
if (true) {

SetGlobalVariableValue('imgitem', '7');

}
});

$axure.eventManager.mouseout('u457', function(e) {
if (!IsTrueMouseOut('u457',e)) return;
if (true) {

SetGlobalVariableValue('imgitem', '1');
function waitu485a026ac4bb47678bf8c6a22c228fc61() {

	SetPanelState('u456', 'pd0u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd0u471','none','',500,'none','',500);
}
setTimeout(waitu485a026ac4bb47678bf8c6a22c228fc61, 1000);

}
});
gv_vAlignTable['u458'] = 'center';
$axure.eventManager.mouseover('u459', function(e) {
if (!IsTrueMouseOver('u459',e)) return;
if (true) {

SetGlobalVariableValue('imgitem', '7');

}
});

$axure.eventManager.mouseout('u459', function(e) {
if (!IsTrueMouseOut('u459',e)) return;
if (true) {

SetGlobalVariableValue('imgitem', '6');
function waituc02d7f98ca7e4e159a62d574f4d0d6e81() {

	SetPanelState('u456', 'pd5u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd5u471','none','',500,'none','',500);
}
setTimeout(waituc02d7f98ca7e4e159a62d574f4d0d6e81, 1000);

}
});
gv_vAlignTable['u460'] = 'center';
$axure.eventManager.mouseover('u461', function(e) {
if (!IsTrueMouseOver('u461',e)) return;
if (true) {

SetGlobalVariableValue('imgitem', '7');

}
});

$axure.eventManager.mouseout('u461', function(e) {
if (!IsTrueMouseOut('u461',e)) return;
if (true) {

SetGlobalVariableValue('imgitem', '5');
function waitu1fee7983e12744c0a0cf73f5cb4810e01() {

	SetPanelState('u456', 'pd4u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd4u471','none','',500,'none','',500);
}
setTimeout(waitu1fee7983e12744c0a0cf73f5cb4810e01, 1000);

}
});
gv_vAlignTable['u462'] = 'center';
$axure.eventManager.mouseover('u463', function(e) {
if (!IsTrueMouseOver('u463',e)) return;
if (true) {

SetGlobalVariableValue('imgitem', '7');

}
});

$axure.eventManager.mouseout('u463', function(e) {
if (!IsTrueMouseOut('u463',e)) return;
if (true) {

SetGlobalVariableValue('imgitem', '4');
function waitubbc83904da344beaa739e25a6bcb93d21() {

	SetPanelState('u456', 'pd3u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd3u471','none','',500,'none','',500);
}
setTimeout(waitubbc83904da344beaa739e25a6bcb93d21, 1000);

}
});
gv_vAlignTable['u464'] = 'center';gv_vAlignTable['u466'] = 'center';
$axure.eventManager.mouseover('u467', function(e) {
if (!IsTrueMouseOver('u467',e)) return;
if (true) {

SetGlobalVariableValue('imgitem', '7');

}
});

$axure.eventManager.mouseout('u467', function(e) {
if (!IsTrueMouseOut('u467',e)) return;
if (true) {

SetGlobalVariableValue('imgitem', '3');
function waitu41248eee6c704953adb63a976a3b907b1() {

	SetPanelState('u456', 'pd2u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd2u471','none','',500,'none','',500);
}
setTimeout(waitu41248eee6c704953adb63a976a3b907b1, 1000);

}
});
gv_vAlignTable['u468'] = 'center';
$axure.eventManager.mouseover('u469', function(e) {
if (!IsTrueMouseOver('u469',e)) return;
if (true) {

SetGlobalVariableValue('imgitem', '7');

}
});

$axure.eventManager.mouseout('u469', function(e) {
if (!IsTrueMouseOut('u469',e)) return;
if (true) {

SetGlobalVariableValue('imgitem', '2');
function waitu4052264f278847a380eab2db6a709a871() {

	SetPanelState('u456', 'pd1u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd1u471','none','',500,'none','',500);
}
setTimeout(waitu4052264f278847a380eab2db6a709a871, 1000);

}
});
gv_vAlignTable['u470'] = 'center';gv_vAlignTable['u473'] = 'center';document.getElementById('u474_img').tabIndex = 0;

u474.style.cursor = 'pointer';
$axure.eventManager.click('u474', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '1');

	SetPanelState('u456', 'pd0u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd0u471','none','',500,'none','',500);

}
});
gv_vAlignTable['u475'] = 'center';document.getElementById('u476_img').tabIndex = 0;

u476.style.cursor = 'pointer';
$axure.eventManager.click('u476', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '2');

	SetPanelState('u456', 'pd1u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd1u471','none','',500,'none','',500);

}
});
gv_vAlignTable['u477'] = 'center';document.getElementById('u478_img').tabIndex = 0;

u478.style.cursor = 'pointer';
$axure.eventManager.click('u478', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '3');

	SetPanelState('u456', 'pd2u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd2u471','none','',500,'none','',500);

}
});
gv_vAlignTable['u479'] = 'center';document.getElementById('u480_img').tabIndex = 0;

u480.style.cursor = 'pointer';
$axure.eventManager.click('u480', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '4');

	SetPanelState('u456', 'pd3u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd3u471','none','',500,'none','',500);

}
});
gv_vAlignTable['u481'] = 'center';document.getElementById('u482_img').tabIndex = 0;

u482.style.cursor = 'pointer';
$axure.eventManager.click('u482', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '5');

	SetPanelState('u456', 'pd4u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd4u471','none','',500,'none','',500);

}
});
gv_vAlignTable['u483'] = 'center';document.getElementById('u484_img').tabIndex = 0;

u484.style.cursor = 'pointer';
$axure.eventManager.click('u484', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '6');

	SetPanelState('u456', 'pd5u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd5u471','none','',500,'none','',500);

}
});
gv_vAlignTable['u485'] = 'center';gv_vAlignTable['u487'] = 'center';document.getElementById('u488_img').tabIndex = 0;

u488.style.cursor = 'pointer';
$axure.eventManager.click('u488', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '1');

	SetPanelState('u456', 'pd0u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd0u471','none','',500,'none','',500);

}
});
gv_vAlignTable['u489'] = 'center';gv_vAlignTable['u208'] = 'top';gv_vAlignTable['u209'] = 'top';gv_vAlignTable['u300'] = 'top';gv_vAlignTable['u301'] = 'top';gv_vAlignTable['u304'] = 'center';gv_vAlignTable['u305'] = 'top';gv_vAlignTable['u306'] = 'top';gv_vAlignTable['u307'] = 'top';gv_vAlignTable['u308'] = 'top';gv_vAlignTable['u309'] = 'top';gv_vAlignTable['u497'] = 'center';document.getElementById('u498_img').tabIndex = 0;

u498.style.cursor = 'pointer';
$axure.eventManager.click('u498', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '6');

	SetPanelState('u456', 'pd5u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd5u471','none','',500,'none','',500);

}
});
gv_vAlignTable['u499'] = 'center';document.getElementById('u504_img').tabIndex = 0;

u504.style.cursor = 'pointer';
$axure.eventManager.click('u504', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '2');

	SetPanelState('u456', 'pd1u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd1u471','none','',500,'none','',500);

}
});
gv_vAlignTable['u505'] = 'center';document.getElementById('u506_img').tabIndex = 0;

u506.style.cursor = 'pointer';
$axure.eventManager.click('u506', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '3');

	SetPanelState('u456', 'pd2u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd2u471','none','',500,'none','',500);

}
});
gv_vAlignTable['u507'] = 'center';document.getElementById('u508_img').tabIndex = 0;

u508.style.cursor = 'pointer';
$axure.eventManager.click('u508', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '4');

	SetPanelState('u456', 'pd3u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd3u471','none','',500,'none','',500);

}
});
gv_vAlignTable['u509'] = 'center';gv_vAlignTable['u310'] = 'top';gv_vAlignTable['u311'] = 'top';gv_vAlignTable['u312'] = 'top';gv_vAlignTable['u314'] = 'top';gv_vAlignTable['u315'] = 'top';gv_vAlignTable['u316'] = 'top';gv_vAlignTable['u318'] = 'center';gv_vAlignTable['u515'] = 'center';document.getElementById('u516_img').tabIndex = 0;

u516.style.cursor = 'pointer';
$axure.eventManager.click('u516', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '1');

	SetPanelState('u456', 'pd0u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd0u471','none','',500,'none','',500);

}
});
gv_vAlignTable['u517'] = 'center';document.getElementById('u518_img').tabIndex = 0;

u518.style.cursor = 'pointer';
$axure.eventManager.click('u518', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '2');

	SetPanelState('u456', 'pd1u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd1u471','none','',500,'none','',500);

}
});
gv_vAlignTable['u519'] = 'center';gv_vAlignTable['u320'] = 'center';gv_vAlignTable['u321'] = 'top';gv_vAlignTable['u322'] = 'top';gv_vAlignTable['u323'] = 'top';gv_vAlignTable['u325'] = 'center';gv_vAlignTable['u327'] = 'center';gv_vAlignTable['u329'] = 'center';document.getElementById('u520_img').tabIndex = 0;

u520.style.cursor = 'pointer';
$axure.eventManager.click('u520', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '3');

	SetPanelState('u456', 'pd2u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd2u471','none','',500,'none','',500);

}
});
gv_vAlignTable['u523'] = 'center';document.getElementById('u524_img').tabIndex = 0;

u524.style.cursor = 'pointer';
$axure.eventManager.click('u524', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '5');

	SetPanelState('u456', 'pd4u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd4u471','none','',500,'none','',500);

}
});
gv_vAlignTable['u525'] = 'center';document.getElementById('u526_img').tabIndex = 0;

u526.style.cursor = 'pointer';
$axure.eventManager.click('u526', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '6');

	SetPanelState('u456', 'pd5u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd5u471','none','',500,'none','',500);

}
});
gv_vAlignTable['u527'] = 'center';gv_vAlignTable['u529'] = 'center';gv_vAlignTable['u331'] = 'center';gv_vAlignTable['u332'] = 'top';gv_vAlignTable['u334'] = 'center';gv_vAlignTable['u336'] = 'center';gv_vAlignTable['u338'] = 'center';gv_vAlignTable['u339'] = 'top';document.getElementById('u530_img').tabIndex = 0;

u530.style.cursor = 'pointer';
$axure.eventManager.click('u530', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '1');

	SetPanelState('u456', 'pd0u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd0u471','none','',500,'none','',500);

}
});
document.getElementById('u534_img').tabIndex = 0;

u534.style.cursor = 'pointer';
$axure.eventManager.click('u534', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '3');

	SetPanelState('u456', 'pd2u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd2u471','none','',500,'none','',500);

}
});
gv_vAlignTable['u535'] = 'center';document.getElementById('u536_img').tabIndex = 0;

u536.style.cursor = 'pointer';
$axure.eventManager.click('u536', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '4');

	SetPanelState('u456', 'pd3u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd3u471','none','',500,'none','',500);

}
});
gv_vAlignTable['u537'] = 'center';document.getElementById('u538_img').tabIndex = 0;

u538.style.cursor = 'pointer';
$axure.eventManager.click('u538', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '5');

	SetPanelState('u456', 'pd4u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd4u471','none','',500,'none','',500);

}
});
gv_vAlignTable['u539'] = 'center';gv_vAlignTable['u341'] = 'center';gv_vAlignTable['u342'] = 'top';gv_vAlignTable['u345'] = 'top';gv_vAlignTable['u347'] = 'center';gv_vAlignTable['u349'] = 'center';document.getElementById('u540_img').tabIndex = 0;

u540.style.cursor = 'pointer';
$axure.eventManager.click('u540', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '6');

	SetPanelState('u456', 'pd5u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd5u471','none','',500,'none','',500);

}
});
document.getElementById('u544_img').tabIndex = 0;

u544.style.cursor = 'pointer';
$axure.eventManager.click('u544', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '1');

	SetPanelState('u456', 'pd0u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd0u471','none','',500,'none','',500);

}
});
gv_vAlignTable['u545'] = 'center';document.getElementById('u546_img').tabIndex = 0;

u546.style.cursor = 'pointer';
$axure.eventManager.click('u546', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '2');

	SetPanelState('u456', 'pd1u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd1u471','none','',500,'none','',500);

}
});
gv_vAlignTable['u547'] = 'center';document.getElementById('u548_img').tabIndex = 0;

u548.style.cursor = 'pointer';
$axure.eventManager.click('u548', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '3');

	SetPanelState('u456', 'pd2u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd2u471','none','',500,'none','',500);

}
});
gv_vAlignTable['u549'] = 'center';gv_vAlignTable['u351'] = 'center';gv_vAlignTable['u353'] = 'center';gv_vAlignTable['u355'] = 'center';gv_vAlignTable['u357'] = 'center';gv_vAlignTable['u359'] = 'center';document.getElementById('u550_img').tabIndex = 0;

u550.style.cursor = 'pointer';
$axure.eventManager.click('u550', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '4');

	SetPanelState('u456', 'pd3u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd3u471','none','',500,'none','',500);

}
});
document.getElementById('u554_img').tabIndex = 0;

u554.style.cursor = 'pointer';
$axure.eventManager.click('u554', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '6');

	SetPanelState('u456', 'pd5u456','swing','left',500,'swing','left',500);

	SetPanelState('u471', 'pd5u471','none','',500,'none','',500);

}
});
gv_vAlignTable['u555'] = 'center';gv_vAlignTable['u361'] = 'center';gv_vAlignTable['u363'] = 'center';gv_vAlignTable['u365'] = 'center';gv_vAlignTable['u366'] = 'top';gv_vAlignTable['u367'] = 'top';gv_vAlignTable['u371'] = 'center';gv_vAlignTable['u373'] = 'center';gv_vAlignTable['u376'] = 'center';gv_vAlignTable['u379'] = 'center';gv_vAlignTable['u382'] = 'center';gv_vAlignTable['u384'] = 'center';gv_vAlignTable['u387'] = 'center';gv_vAlignTable['u200'] = 'top';gv_vAlignTable['u201'] = 'top';gv_vAlignTable['u202'] = 'top';gv_vAlignTable['u390'] = 'center';gv_vAlignTable['u393'] = 'center';gv_vAlignTable['u395'] = 'center';gv_vAlignTable['u398'] = 'center';gv_vAlignTable['u210'] = 'top';gv_vAlignTable['u211'] = 'top';gv_vAlignTable['u212'] = 'top';gv_vAlignTable['u213'] = 'top';gv_vAlignTable['u214'] = 'top';gv_vAlignTable['u215'] = 'top';gv_vAlignTable['u216'] = 'top';gv_vAlignTable['u217'] = 'top';gv_vAlignTable['u218'] = 'top';gv_vAlignTable['u219'] = 'top';gv_vAlignTable['u220'] = 'top';gv_vAlignTable['u221'] = 'top';gv_vAlignTable['u222'] = 'top';gv_vAlignTable['u223'] = 'top';gv_vAlignTable['u224'] = 'top';gv_vAlignTable['u225'] = 'top';gv_vAlignTable['u226'] = 'top';gv_vAlignTable['u227'] = 'top';gv_vAlignTable['u228'] = 'top';gv_vAlignTable['u229'] = 'top';gv_vAlignTable['u230'] = 'top';gv_vAlignTable['u231'] = 'top';gv_vAlignTable['u232'] = 'top';gv_vAlignTable['u233'] = 'top';gv_vAlignTable['u234'] = 'top';gv_vAlignTable['u235'] = 'top';gv_vAlignTable['u236'] = 'top';gv_vAlignTable['u238'] = 'center';gv_vAlignTable['u240'] = 'center';gv_vAlignTable['u241'] = 'top';gv_vAlignTable['u242'] = 'top';gv_vAlignTable['u244'] = 'top';gv_vAlignTable['u245'] = 'top';gv_vAlignTable['u246'] = 'top';gv_vAlignTable['u247'] = 'top';gv_vAlignTable['u248'] = 'top';gv_vAlignTable['u249'] = 'top';gv_vAlignTable['u250'] = 'top';gv_vAlignTable['u251'] = 'top';gv_vAlignTable['u252'] = 'top';gv_vAlignTable['u253'] = 'top';gv_vAlignTable['u254'] = 'top';gv_vAlignTable['u256'] = 'center';
$axure.eventManager.focus('u257', function(e) {

if ((GetWidgetText('u257')) == ('请输入关键字搜索')) {

SetWidgetFormText('u257', '');

}
});

$axure.eventManager.blur('u257', function(e) {

if ((GetWidgetText('u257')) == ('')) {

SetWidgetFormText('u257', '请输入关键字搜索');

}
});
gv_vAlignTable['u259'] = 'center';gv_vAlignTable['u1'] = 'top';gv_vAlignTable['u2'] = 'top';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u8'] = 'top';u9.tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('宠物百科.html');

}
});
gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u261'] = 'center';gv_vAlignTable['u264'] = 'center';gv_vAlignTable['u265'] = 'top';gv_vAlignTable['u266'] = 'top';gv_vAlignTable['u267'] = 'top';gv_vAlignTable['u268'] = 'top';