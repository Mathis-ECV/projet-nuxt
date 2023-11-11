import{n as i,c as t,F as n,q as o,u,s as _,o as a,a as m,t as p}from"./entry.412f58ea.js";import{g as y}from"./index.1ce261a9.js";const d=y`
query Articles{
    article {
        articleTitle
    }
    allArticles {
        articleTitle
    }     
}`,k={__name:"article",async setup(A){let e,l;const{data:r}=([e,l]=i(()=>_(d)),e=await e,l(),e);return console.log(r),(s,f)=>(a(),t("div",null,[(a(!0),t(n,null,o(u(r).allArticles,c=>(a(),t("div",{key:s.allArticles.id},[m("h2",null,p(c.articleTitle),1)]))),128))]))}};export{k as default};
