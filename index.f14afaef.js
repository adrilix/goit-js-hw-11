!function(){function e(e){return e&&e.__esModule?e.default:e}var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var n={};function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t,n){t&&r(e.prototype,t);n&&r(e,n);return e};var o=function(){"use strict";function r(){e(t)(this,r),this.searchWord="",this.page=1,console.log(this.page)}return e(n)(r,[{key:"fetchArticles",value:function(){var e=this,t="https://pixabay.com/api/?key=29627858-41c1c6901e5456b7eb4365fd8&q=".concat(this.searchWord,"&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=").concat(this.page);return fetch(t).then((function(e){return e.json()})).then((function(t){return e.incrementPage(),t.hits}))}},{key:"incrementPage",value:function(){this.page+=1}},{key:"resetPage",value:function(){this.page=1}},{key:"word",get:function(){return this.searchWord},set:function(e){this.searchWord=e}}]),r}(),c={searchForm:document.querySelector(".search-form"),articlesContainer:document.querySelector(".gallery"),moreBtn:document.querySelector(".load-more")},a=new o;c.searchForm.addEventListener("submit",(function(e){e.preventDefault(),a.word=e.currentTarget.elements.searchQuery.value,a.resetPage(),a.fetchArticles().then((function(e){return console.log(e)}))})),c.moreBtn.addEventListener("click",(function(e){a.fetchArticles().then((function(e){return console.log(e)}))}))}();
//# sourceMappingURL=index.f14afaef.js.map