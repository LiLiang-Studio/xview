(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cca23"],{"4f83":function(e,c,t){"use strict";t.r(c);var o=function(){var e=this,c=e.$createElement,t=e._self._c||c;return t("div",{staticStyle:{padding:"30px 15px"}},[t("x-checkbox",{model:{value:e.checked,callback:function(c){e.checked=c},expression:"checked"}},[e._v("备选项")]),t("br"),t("br"),t("div",[t("x-checkbox",{attrs:{disabled:""},model:{value:e.checked1,callback:function(c){e.checked1=c},expression:"checked1"}},[e._v("备选项1")]),t("x-checkbox",{attrs:{disabled:""},model:{value:e.checked2,callback:function(c){e.checked2=c},expression:"checked2"}},[e._v("备选项")])],1),t("br"),t("br"),t("x-checkbox-group",{model:{value:e.checkList,callback:function(c){e.checkList=c},expression:"checkList"}},[t("x-checkbox",{attrs:{label:"复选框 A"}}),t("x-checkbox",{attrs:{label:"复选框 B"}}),t("x-checkbox",{attrs:{label:"复选框 C"}}),t("x-checkbox",{attrs:{label:"禁用",disabled:""}}),t("x-checkbox",{attrs:{label:"选中且禁用",disabled:""}})],1),t("br"),t("br"),t("div",[t("x-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(c){e.checkAll=c},expression:"checkAll"}},[e._v("全选")]),t("div",{staticStyle:{margin:"15px 0"}}),t("x-checkbox-group",{on:{change:e.handleCheckedCitiesChange},model:{value:e.checkedCities,callback:function(c){e.checkedCities=c},expression:"checkedCities"}},e._l(e.cities,(function(c){return t("x-checkbox",{key:c,attrs:{label:c}},[e._v(e._s(c))])})),1)],1),t("br"),t("br"),t("x-checkbox-group",{attrs:{min:1,max:2},model:{value:e.checkedCities,callback:function(c){e.checkedCities=c},expression:"checkedCities"}},e._l(e.cities,(function(c){return t("x-checkbox",{key:c,attrs:{label:c}},[e._v(e._s(c))])})),1),t("br"),t("br"),t("div",[t("x-checkbox-group",{model:{value:e.checkboxGroup1,callback:function(c){e.checkboxGroup1=c},expression:"checkboxGroup1"}},e._l(e.cities,(function(c){return t("x-checkbox-button",{key:c,attrs:{label:c}},[e._v(e._s(c))])})),1)],1),t("br"),t("br"),t("div",{staticStyle:{"margin-top":"20px"}},[t("x-checkbox-group",{attrs:{size:"medium"},model:{value:e.checkboxGroup2,callback:function(c){e.checkboxGroup2=c},expression:"checkboxGroup2"}},e._l(e.cities,(function(c){return t("x-checkbox-button",{key:c,attrs:{label:c}},[e._v(e._s(c))])})),1)],1),t("br"),t("br"),t("div",{staticStyle:{"margin-top":"20px"}},[t("x-checkbox-group",{attrs:{size:"small"},model:{value:e.checkboxGroup3,callback:function(c){e.checkboxGroup3=c},expression:"checkboxGroup3"}},e._l(e.cities,(function(c){return t("x-checkbox-button",{key:c,attrs:{label:c,disabled:"北京"===c}},[e._v(e._s(c))])})),1)],1),t("br"),t("br"),t("div",{staticStyle:{"margin-top":"20px"}},[t("x-checkbox-group",{attrs:{size:"mini",disabled:""},model:{value:e.checkboxGroup4,callback:function(c){e.checkboxGroup4=c},expression:"checkboxGroup4"}},e._l(e.cities,(function(c){return t("x-checkbox-button",{key:c,attrs:{label:c}},[e._v(e._s(c))])})),1)],1),t("br"),t("br"),t("div",[t("x-checkbox",{attrs:{label:"备选项1",border:""},model:{value:e.checked3,callback:function(c){e.checked3=c},expression:"checked3"}}),t("x-checkbox",{attrs:{label:"备选项2",border:""},model:{value:e.checked4,callback:function(c){e.checked4=c},expression:"checked4"}})],1),t("br"),t("br"),t("div",{staticStyle:{"margin-top":"20px"}},[t("x-checkbox",{attrs:{label:"备选项1",border:"",size:"medium"},model:{value:e.checked5,callback:function(c){e.checked5=c},expression:"checked5"}}),t("x-checkbox",{attrs:{label:"备选项2",border:"",size:"medium"},model:{value:e.checked6,callback:function(c){e.checked6=c},expression:"checked6"}})],1),t("br"),t("br"),t("div",{staticStyle:{"margin-top":"20px"}},[t("x-checkbox-group",{attrs:{size:"small"},model:{value:e.checkboxGroup5,callback:function(c){e.checkboxGroup5=c},expression:"checkboxGroup5"}},[t("x-checkbox",{attrs:{label:"备选项1",border:""}}),t("x-checkbox",{attrs:{label:"备选项2",border:"",disabled:""}})],1)],1),t("br"),t("br"),t("div",{staticStyle:{"margin-top":"20px"}},[t("x-checkbox-group",{attrs:{size:"mini",disabled:""},model:{value:e.checkboxGroup6,callback:function(c){e.checkboxGroup6=c},expression:"checkboxGroup6"}},[t("x-checkbox",{attrs:{label:"备选项1",border:""}}),t("x-checkbox",{attrs:{label:"备选项2",border:""}})],1)],1)],1)},l=[],i=["上海","北京","广州","深圳"],r={data:function(){return{checked:!0,checked1:!1,checked2:!0,checkList:["选中且禁用","复选框 A"],checkAll:!1,checkedCities:["上海","北京"],cities:i,isIndeterminate:!0,checkboxGroup1:["上海"],checkboxGroup2:["上海"],checkboxGroup3:["上海"],checkboxGroup4:["上海"],checked3:!0,checked4:!1,checked5:!1,checked6:!0,checkboxGroup5:[],checkboxGroup6:[]}},methods:{handleCheckAllChange:function(e){this.checkedCities=e?i:[],this.isIndeterminate=!1},handleCheckedCitiesChange:function(e){var c=e.length;this.checkAll=c===this.cities.length,this.isIndeterminate=c>0&&c<this.cities.length}}},a=r,b=t("2be6"),s=Object(b["a"])(a,o,l,!1,null,null,null);c["default"]=s.exports}}]);