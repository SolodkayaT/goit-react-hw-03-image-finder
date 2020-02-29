(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2AxMb",Modal:"Modal_Modal__2WBTT"}},23:function(e,t,a){e.exports={App:"App_App__aOmNj"}},25:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__DncjJ"}},26:function(e,t,a){e.exports={Button:"Button_Button__3R1xi"}},27:function(e,t,a){e.exports=a(72)},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),c=a.n(o),l=a(11),i=a(3),s=a(4),m=a(6),u=a(5),g=a(7),h=(a(32),a(22)),p=a.n(h),f=a(23),d=a.n(f),y=a(24),b=a.n(y),S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return b.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=14836280-095028a335045ad546bd82bf5&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},I=a(1),v=a.n(I),_=a(9),w=a.n(_),E=function(e){var t=e.webformatURL,a=e.tags,n=e.largeImageURL,o=e.showImage;return r.a.createElement("li",{className:w.a.ImageGalleryItem},r.a.createElement("img",{className:w.a.ImageGalleryItemImage,src:t,alt:a,"data-src":n,onClick:function(e){return o(e.target.dataset.src)}}))},L=E;E.propType={webformatURL:v.a.string,tags:v.a.string,largeImageURL:v.a.string},E.defaultProps={webformatURL:"",tags:"picture",largeImageURL:""};var B=a(25),O=a.n(B),j=function(e){var t=e.images,a=e.showLargeImage;return r.a.createElement("ul",{className:O.a.ImageGallery},t.map((function(e){var t=e.id,n=e.webformatURL,o=e.tags,c=e.largeImageURL;return r.a.createElement(L,{key:t,id:t,webformatURL:n,tags:o,largeImageURL:c,showImage:function(e){return a(e)}})})))},k=j;j.PropType={images:v.a.array},j.defaultProps={images:[]};var F=a(8),U=a.n(F),x=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={inputValue:""},a.handleChange=function(e){return a.setState({inputValue:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.onSubmit(a.state.inputValue),a.setState({inputValue:""})},a}return Object(g.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:U.a.Searchbar},r.a.createElement("form",{onSubmit:this.handleSubmit,className:U.a.SearchForm},r.a.createElement("button",{type:"submit",className:U.a.SearchFormButton},r.a.createElement("span",{className:U.a.SearchFormButtonLabel},"Search")),r.a.createElement("input",{className:U.a.SearchFormInput,value:this.state.inputValue,onChange:this.handleChange,type:"text",placeholder:"Search images and photos"})))}}]),t}(n.Component);x.propType={onSubmit:v.a.func};var C=function(e){return r.a.createElement("p",null,"Somthing went wrong: ",e.message)},N=C;C.propType={error:v.a.string},C.defaultProps={error:"Somthing went wrong :("};var G=a(26),R=a.n(G),M=function(e){var t=e.text,a=e.onClickButton;return r.a.createElement("button",{className:R.a.Button,type:"button",onClick:a},t)},A=M;M.propType={text:v.a.string,onClickButton:v.a.func},M.defaultProps={text:"Click me"};var T=a(10),D=a.n(T),P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleKeyDown=function(e){"Escape"===e.code&&a.props.onClose()},a}return Object(g.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return r.a.createElement("div",{className:D.a.Overlay},r.a.createElement("div",{className:D.a.Modal},this.props.children))}}]),t}(n.Component),J=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={images:[],isLoading:!1,error:null,searchQuery:"",page:1,showModal:!1,largeImageUrl:null},a.imagesScroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},a.fetchImages=function(){a.setState({isLoading:!0}),S(a.state.searchQuery,a.state.page).then((function(e){return a.setState((function(t){return{images:[].concat(Object(l.a)(t.images),Object(l.a)(e)),page:t.page+1}}))})).catch((function(e){return a.setState({error:e})})).finally((function(){return a.setState({isLoading:!1})}))},a.handleSearchFormSubmit=function(e){a.setState({searchQuery:e,page:1,images:[]})},a.toggleModal=function(){a.setState({largeImageUrl:null})},a.handleShowImage=function(e){a.setState({largeImageUrl:e})},a}return Object(g.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=t.searchQuery,n=this.state.searchQuery;a!==n&&this.fetchImages(n),t.images.length!==this.state.images.length&&this.imagesScroll()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,n=e.error,o=e.largeImageUrl;return r.a.createElement("section",{className:d.a.App},r.a.createElement(x,{onSubmit:this.handleSearchFormSubmit}),n&&r.a.createElement(N,{message:n.message}),t.length>0&&r.a.createElement(k,{images:t,showLargeImage:this.handleShowImage}),a&&r.a.createElement(p.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3}),t.length>0&&!a&&r.a.createElement(A,{text:"Load more",onClickButton:this.fetchImages}),o&&r.a.createElement(P,{onClose:this.toggleModal},r.a.createElement("img",{src:o,alt:""})))}}]),t}(n.Component);a(71);c.a.render(r.a.createElement(J,null),document.getElementById("root"))},8:function(e,t,a){e.exports={SearchForm:"SearchBar_SearchForm__1k1JW",SearchFormButton:"SearchBar_SearchFormButton__3W9N5",SearchFormButtonLabel:"SearchBar_SearchFormButtonLabel__2bY4N",SearchFormInput:"SearchBar_SearchFormInput__17jtp",Searchbar:"SearchBar_Searchbar__19WMJ"}},9:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3CvRl",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2bkPr"}}},[[27,1,2]]]);
//# sourceMappingURL=main.a974c78e.chunk.js.map