"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[419],{419:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var a=n(434),r=n(791),s=function(e){return e.contacts.items||[]},c=function(e){return e.contacts.loading},i=function(e){var t=e.contacts,n=e.filter;if(!n)return t.items;var a=n.toLowerCase();return t.items.filter((function(e){return e.name.toLowerCase().includes(a)}))},o=n(650),l="myContacts_phonebookContainer__IvmHx",u="myContacts_titlePhonebook__rduxK",m="myContacts_titleContacts__ocmem myContacts_titlePhonebook__rduxK",d="myContacts_allContacts__ryfdg",_=n(439),f=n(686),h="ContactForm_form__wDWPz",b="ContactForm_label__ZUV0d",v="ContactForm_inputName__r-48-",x="ContactForm_inputNumber__fa7KQ ContactForm_inputName__r-48-",p="ContactForm_buttonAdd__+rjKu",C=n(184),j=function(){var e=(0,r.useState)(""),t=(0,_.Z)(e,2),n=t[0],c=t[1],i=(0,r.useState)(""),l=(0,_.Z)(i,2),u=l[0],m=l[1],d=(0,a.v9)(s),j=(0,a.I0)(),N=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":c(a);break;case"number":m(a);break;default:return}},y=function(e){var t=e.name,n=e.number,a=(0,o.uK)({name:t,number:n});j(a)};return(0,C.jsxs)("form",{className:h,onSubmit:function(e){e.preventDefault();var t=d.some((function(e){return e.name.toLowerCase()===n.toLowerCase()})),a=d.some((function(e){return e.number===u}));t?f.Notify.failure("".concat(n," is alredy in contacts")):a?f.Notify.failure("".concat(u," is alredy in contacts")):(y({name:n,number:u}),c(""),m(""))},children:[(0,C.jsxs)("label",{className:b,children:["Name",(0,C.jsx)("input",{className:v,value:n,onChange:N,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,C.jsxs)("label",{className:b,children:["Number",(0,C.jsx)("input",{className:x,value:u,onChange:N,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,C.jsx)("button",{className:p,type:"submit",children:"Add contact"})]})},N="ContactList_list__PZmSu",y="ContactListItem_item__IktUt",g="ContactListItem_contact__NLz0u",k="ContactListItem_buttonDelete__-vd30",w=function(e){var t=e.id,n=e.name,r=e.number,s=(0,a.I0)();return(0,C.jsxs)("li",{className:y,children:[(0,C.jsxs)("p",{className:g,children:[n," ",r]}),(0,C.jsx)("button",{className:k,type:"submit",onClick:function(){return e=t,void s((0,o.GK)(e));var e},children:"Delete"})]})},F=function(){var e=(0,a.v9)(i);return(0,C.jsx)("ul",{className:N,children:e.map((function(e){var t=e.id,n=e.name,a=e.number;return(0,C.jsx)(w,{name:n,number:a,id:t},t)}))})},I=n(653),L=function(e){return e.filter},A={filter:"Filter_filter__9XhGP",filterInput:"Filter_filterInput__cXwzH"},Z=function(){var e=(0,a.v9)(L),t=(0,a.I0)();return(0,C.jsx)("div",{className:A.filter,children:(0,C.jsxs)("label",{className:A.labelFilter,children:["Find contacts by name",(0,C.jsx)("input",{className:A.filterInput,type:"text",name:"filter",value:e,onChange:function(e){t((0,I.T)(e.currentTarget.value.trim()))}})]})})},z="Notification_title__VBwHl",P=function(e){var t=e.message;return(0,C.jsx)("p",{className:z,children:t})},K=n(447);var D=function(){var e=(0,a.v9)(s),t=Boolean(e.length),n=(0,a.v9)(c),i=(0,a.I0)();return(0,r.useEffect)((function(){i((0,o.yF)())}),[i]),(0,C.jsxs)("div",{children:[n&&(0,C.jsx)(K.Z,{}),(0,C.jsxs)("div",{className:l,children:[(0,C.jsx)("h1",{className:u,children:"Phonebook"}),(0,C.jsx)(j,{}),(0,C.jsx)("h2",{className:m,children:"Contacts"}),(0,C.jsxs)("div",{className:d,children:["All contacts: ",e.length]}),t?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Z,{}),(0,C.jsx)(F,{})]}):(0,C.jsx)(P,{message:"Contact list is empty"})]})]})},S=function(){return(0,C.jsx)("div",{children:(0,C.jsx)(D,{})})}}}]);
//# sourceMappingURL=419.4bbb537a.chunk.js.map