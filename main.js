(()=>{"use strict";function e(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",t),e.addEventListener("click",n)}function t(e){"Escape"===e.key&&r(document.querySelector(".popup_is-opened"))}function n(e){(e.currentTarget===e.target||e.target.classList.contains("popup__close"))&&r(e.currentTarget)}function r(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",t),e.removeEventListener("click",n)}function o(e,t,n,r){var o=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),c=o.querySelector(".card__image");c.src=e.link,c.alt=e.name,c.addEventListener("click",(function(){r(e)})),o.querySelector(".card__delete-button").addEventListener("click",t);var a=o.querySelector(".card__description");a.querySelector(".card__title").textContent=e.name;var u=a.querySelector(".card__like-container");return u.querySelector(".card__counter").textContent=e.likes.length,u.querySelector(".card__like-button").addEventListener("click",n),o}function c(e){e.target.closest(".card").remove()}function a(e){e.target.closest(".card__like-button").classList.toggle("card__like-button_is-active")}var u=function(e,t){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove("popup__button_disabled")):(t.disabled=!0,t.classList.add("popup__button_disabled"))},i={baseUrl:"https://nomoreparties.co/v1/wff-cohort-2",headers:{authorization:"bb1fee31-957c-4b3e-9d5c-e5a39df6a8a4","Content-Type":"application/json"}};function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s=document.querySelector(".popup_type_edit");s.classList.add("popup_is-animated");var d=document.querySelector(".popup_type_new-card");d.classList.add("popup_is-animated");var p=document.querySelector(".popup_type_image");p.classList.add("popup_is-animated"),document.querySelector(".card__like-button");var _=document.querySelector(".profile__title"),f=document.querySelector(".profile__description"),m=document.querySelector(".profile__edit-button"),y=document.querySelector(".profile__add-button"),v=document.querySelector(".popup__image"),h=document.querySelector(".popup__caption"),b=document.forms["edit-profile"],S=document.querySelector(".popup__input_type_name"),g=document.querySelector(".popup__input_type_description"),q=document.forms["new-place"],k=document.querySelector(".popup__input_type_card-name"),L=document.querySelector(".popup__input_type_url"),E=document.querySelector(".places__list");function C(t){v.src=t.link,v.alt=t.name,h.textContent=t.name,e(p)}b.addEventListener("submit",(function(e){e.preventDefault(),j({name:S.value,about:g.value}),e.target.reset(),r(s)})),q.addEventListener("submit",(function(e){var t;e.preventDefault(),t={name:k.value,link:L.value},fetch("".concat(i.baseUrl,"/cards"),{method:"POST",headers:i.headers,body:JSON.stringify(t)}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){console.log(e)})).catch((function(e){console.log(e)}));var n=o({name:k.value,link:L.value},c,a,C);E.prepend(n),e.target.reset(),r(d)})),m.addEventListener("click",(function(){S.value=_.textContent,g.value=f.textContent,e(s)})),y.addEventListener("click",(function(){e(d)})),Array.from(document.querySelectorAll(".popup__form")).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e){var t=Array.from(e.querySelectorAll(".popup__input")),n=e.querySelector(".popup__button");u(t,n),t.forEach((function(r){r.addEventListener("input",(function(){!function(e,t){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?function(e,t){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove("popup__input_type_error"),n.classList.remove("popup__error_visible"),n.textContent=""}(e,t):function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add("popup__input_type_error"),r.textContent=n,r.classList.add("popup__error_visible")}(e,t,t.validationMessage)}(e,r),u(t,n)}))}))}(e)})),Promise.all([fetch("".concat(i.baseUrl,"/cards"),{method:"GET",headers:i.headers}).then((function(e){return e.json()})),fetch("".concat(i.baseUrl,"/users/me"),{method:"GET",headers:i.headers}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=r[0];r[1],u.forEach((function(e){E.append(o(e,c,a,C))}))})).catch((function(e){console.log(e)}));var j=function(e){fetch("".concat(i.baseUrl,"/users/me"),{method:"PATCH",headers:i.headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){_.textContent=e.name,f.textContent=e.about,console.log(e)})).catch((function(e){console.log(e)}))};fetch("".concat(i.baseUrl,"/cards/likes/657de88f0083b561d572b851"),{method:"PUT",headers:i.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){var t=document.querySelector(".card__like-button"),n=document.querySelector(".card__counter");t.classList.add("card__like-button_is-active"),n.textContent=e.likes.length})).catch((function(e){console.log(e)}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxTQUFDQyxHQUNOSCxRQUFRQyxJQUFJRSxFQUNkLEdBQ0YsRUFHSWhCLE1BQU0sR0FBREMsT0FBSTdCLEVBQU9DLFFBQU8seUNBQXlDLENBQ2hFNkIsT0FBUSxNQUNSNUIsUUFBU0YsRUFBT0UsVUFHakJnQyxNQUFLLFNBQUNDLEdBQ0wsT0FBSUEsRUFBT0MsR0FDRkQsRUFBT0UsT0FFUEMsUUFBUUMsT0FBTyxXQUFEVixPQUFZTSxFQUFPSyxRQUU1QyxJQUNDTixNQUFLLFNBQUNrQyxHQUNMLElBQU1DLEVBQWFqSCxTQUFTTyxjQUFjLHNCQUNwQzJHLEVBQWNsSCxTQUFTTyxjQUFjLGtCQUMzQzBHLEVBQVduSCxVQUFVQyxJQUFJLCtCQUN6Qm1ILEVBQVl4RixZQUFjc0YsRUFBSXBGLE1BQU1DLE1BQ3RDLElBQ0MwRCxPQUFNLFNBQUNDLEdBQ05ILFFBQVFDLElBQUlFLEVBQ2QsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3lhbmRleC1wcmFrdGlrdW0vLi9zcmMvY29tcG9uZW50cy9tb2RhbHMuanMiLCJ3ZWJwYWNrOi8veWFuZGV4LXByYWt0aWt1bS8uL3NyYy9jb21wb25lbnRzL2NhcmQuanMiLCJ3ZWJwYWNrOi8veWFuZGV4LXByYWt0aWt1bS8uL3NyYy9jb21wb25lbnRzL3ZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8veWFuZGV4LXByYWt0aWt1bS8uL3NyYy9jb21wb25lbnRzL2FwaS5qcyIsIndlYnBhY2s6Ly95YW5kZXgtcHJha3Rpa3VtLy4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gb3BlblBvcHVwKHBvcHVwKSB7XHJcbiAgcG9wdXAuY2xhc3NMaXN0LmFkZChcInBvcHVwX2lzLW9wZW5lZFwiKTtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBjbG9zZUVzY1BvcHVwKTtcclxuICBwb3B1cC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xvc2VNb2RhbFdpbmRvd092ZXJsYXlDbGljayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlRXNjUG9wdXAoZXZlbnQpIHtcclxuICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICBjbG9zZVBvcHVwKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9pcy1vcGVuZWQnKSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDbG9zZU1vZGFsV2luZG93T3ZlcmxheUNsaWNrKGV2ZW50KSB7XHJcbiAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQgPT09IGV2ZW50LnRhcmdldCB8fCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3B1cF9fY2xvc2UnKSkge1xyXG4gICAgY2xvc2VQb3B1cChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlUG9wdXAocG9wdXApIHtcclxuICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdwb3B1cF9pcy1vcGVuZWQnKTtcclxuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBjbG9zZUVzY1BvcHVwKTtcclxuICBwb3B1cC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xvc2VNb2RhbFdpbmRvd092ZXJsYXlDbGljayk7XHJcbn1cclxuXHJcbmV4cG9ydCB7b3BlblBvcHVwLCBjbG9zZVBvcHVwfTsiLCIvLyDQpNGD0L3QutGG0LjRjyDRgdC+0LfQtNCw0L3QuNGPINC60LDRgNGC0L7Rh9C60LggLy9cclxuZnVuY3Rpb24gY3JlYXRlQ2FyZChpdGVtLCByZW1vdmUsIGxpa2UsIHNob3cpIHtcclxuICAvLyDQotC10LzQv9C70LXQudGCINC60LDRgNGC0L7Rh9C60LggLy9cclxuICBjb25zdCBjYXJkVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FyZC10ZW1wbGF0ZScpLmNvbnRlbnQ7XHJcblxyXG4gIGNvbnN0IGNhcmQgPSBjYXJkVGVtcGxhdGUucXVlcnlTZWxlY3RvcignLmNhcmQnKS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgXHJcbiAgY29uc3QgY2FyZEltYWdlID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9faW1hZ2UnKTtcclxuXHJcbiAgY2FyZEltYWdlLnNyYyA9IGl0ZW0ubGluaztcclxuICBjYXJkSW1hZ2UuYWx0ID0gaXRlbS5uYW1lO1xyXG4gIGNhcmRJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgc2hvdyAoaXRlbSkgfSk7XHJcbiAgXHJcbiAgY29uc3QgY2FyZERlbGV0ZSA9IGNhcmQucXVlcnlTZWxlY3RvcignLmNhcmRfX2RlbGV0ZS1idXR0b24nKTtcclxuICBjYXJkRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlKTtcclxuICBcclxuICBjb25zdCBjYXJkRm9vdGVyQ29udGFpbmVyID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fZGVzY3JpcHRpb24nKTtcclxuICBcclxuICBjb25zdCBjYXJkVGl0bGUgPSBjYXJkRm9vdGVyQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX190aXRsZScpO1xyXG4gIGNhcmRUaXRsZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcclxuICBcclxuICBjb25zdCBjYXJkTGlrZUNvbnRhaW5lciA9IGNhcmRGb290ZXJDb250YWluZXIucXVlcnlTZWxlY3RvcignLmNhcmRfX2xpa2UtY29udGFpbmVyJyk7XHJcblxyXG4gIGNvbnN0IGNhcmRDb3VudGVyID0gY2FyZExpa2VDb250YWluZXIucXVlcnlTZWxlY3RvcignLmNhcmRfX2NvdW50ZXInKTtcclxuICBjYXJkQ291bnRlci50ZXh0Q29udGVudCA9IGl0ZW0ubGlrZXMubGVuZ3RoO1xyXG5cclxuICBjb25zdCBjYXJkTGlrZSA9IGNhcmRMaWtlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19saWtlLWJ1dHRvbicpO1xyXG4gIGNhcmRMaWtlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlrZSk7XHJcbiAgXHJcbiAgcmV0dXJuIGNhcmQ7XHJcbn1cclxuLy8g0KTRg9C90LrRhtC40Y8g0YPQtNCw0LvQtdC90LjRjyDQutCw0YDRgtC+0YfQutC4IC8vXHJcbmZ1bmN0aW9uIGRlbGV0ZUNhcmQgKGV2dCkge1xyXG4gIGNvbnN0IHRyYXNoID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcuY2FyZCcpO1xyXG4gIHRyYXNoLnJlbW92ZSgpO1xyXG59XHJcbi8vINCk0YPQvdC60YbQuNGPINC90LDQttCw0YLQuNGPINC90LAg0LvQsNC50LogLy9cclxuZnVuY3Rpb24gcHJlc3NMaWtlIChldnQpIHtcclxuICBjb25zdCBoZWFsdGggPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5jYXJkX19saWtlLWJ1dHRvbicpO1xyXG4gIGhlYWx0aC5jbGFzc0xpc3QudG9nZ2xlKCdjYXJkX19saWtlLWJ1dHRvbl9pcy1hY3RpdmUnKTtcclxufVxyXG5cclxuZXhwb3J0IHtjcmVhdGVDYXJkLCBkZWxldGVDYXJkLCBwcmVzc0xpa2V9OyIsImNvbnN0IHNob3dJbnB1dEVycm9yID0gKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQsIGVycm9yTWVzc2FnZSkgPT4ge1xyXG4gIGNvbnN0IGVycm9yRWxlbWVudCA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgKTtcclxuICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncG9wdXBfX2lucHV0X3R5cGVfZXJyb3InKTtcclxuICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBlcnJvck1lc3NhZ2U7XHJcbiAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3BvcHVwX19lcnJvcl92aXNpYmxlJyk7XHJcbn07XHJcbiAgXHJcbmNvbnN0IGhpZGVJbnB1dEVycm9yID0gKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQpID0+IHtcclxuICBjb25zdCBlcnJvckVsZW1lbnQgPSBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYCk7XHJcbiAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHVwX19pbnB1dF90eXBlX2Vycm9yJyk7XHJcbiAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHVwX19lcnJvcl92aXNpYmxlJyk7XHJcbiAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gJyc7XHJcbn07XHJcbiAgXHJcbmNvbnN0IGNoZWNrSW5wdXRWYWxpZGl0eSA9IChmb3JtRWxlbWVudCwgaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgaWYgKGlucHV0RWxlbWVudC52YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2gpIHtcclxuICAgIGlucHV0RWxlbWVudC5zZXRDdXN0b21WYWxpZGl0eShpbnB1dEVsZW1lbnQuZGF0YXNldC5lcnJvck1lc3NhZ2UpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpbnB1dEVsZW1lbnQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XHJcbiAgfVxyXG5cclxuICBpZiAoIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgc2hvd0lucHV0RXJyb3IoZm9ybUVsZW1lbnQsIGlucHV0RWxlbWVudCwgaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgaGlkZUlucHV0RXJyb3IoZm9ybUVsZW1lbnQsIGlucHV0RWxlbWVudCk7XHJcbiAgfVxyXG59O1xyXG4gIFxyXG5jb25zdCBzZXRFdmVudExpc3RlbmVycyA9IChmb3JtRWxlbWVudCkgPT4ge1xyXG4gIGNvbnN0IGlucHV0TGlzdCA9IEFycmF5LmZyb20oZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwX19pbnB1dCcpKTtcclxuICBjb25zdCBidXR0b25FbGVtZW50ID0gZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19idXR0b24nKTtcclxuICB0b2dnbGVCdXR0b25TdGF0ZShpbnB1dExpc3QsIGJ1dHRvbkVsZW1lbnQpO1xyXG4gIGlucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgY2hlY2tJbnB1dFZhbGlkaXR5KGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQpO1xyXG4gICAgICB0b2dnbGVCdXR0b25TdGF0ZShpbnB1dExpc3QsIGJ1dHRvbkVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcbiAgXHJcbmNvbnN0IGhhc0ludmFsaWRJbnB1dCA9IChpbnB1dExpc3QpID0+IHtcclxuICByZXR1cm4gaW5wdXRMaXN0LnNvbWUoKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgcmV0dXJuICFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQ7XHJcbiAgfSk7XHJcbn1cclxuICBcclxuY29uc3QgdG9nZ2xlQnV0dG9uU3RhdGUgPSAoaW5wdXRMaXN0LCBidXR0b25FbGVtZW50KSA9PiB7XHJcbiAgaWYgKGhhc0ludmFsaWRJbnB1dChpbnB1dExpc3QpKSB7XHJcbiAgICBidXR0b25FbGVtZW50LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIGJ1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncG9wdXBfX2J1dHRvbl9kaXNhYmxlZCcpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBidXR0b25FbGVtZW50LmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICBidXR0b25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHVwX19idXR0b25fZGlzYWJsZWQnKTtcclxuICB9XHJcbn1cclxuICBcclxuY29uc3QgZW5hYmxlVmFsaWRhdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCBmb3JtTGlzdCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwX19mb3JtJykpO1xyXG4gIGZvcm1MaXN0LmZvckVhY2goKGZvcm1FbGVtZW50KSA9PiB7XHJcbiAgICBmb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSlcclxuICAgIHNldEV2ZW50TGlzdGVuZXJzKGZvcm1FbGVtZW50KTtcclxuICB9KVxyXG59XHJcbiAgXHJcbi8vIGNvbnN0IGNsZWFyVmFsaWRhdGlvbiA9ICgpID0+IHtcclxuLy8gICBjb25zdCBmb3JtTGlzdCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwX19mb3JtJykpO1xyXG4vLyAgIGZvcm1MaXN0LmZvckVhY2goKGZvcm1FbGVtZW50KSA9PiB7XHJcbi8vICAgICBmb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbi8vICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgICAgfSk7XHJcbi8vICAgfSk7XHJcbi8vIH07XHJcbiAgXHJcbmV4cG9ydCB7ZW5hYmxlVmFsaWRhdGlvbn07IiwiZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICBiYXNlVXJsOiAnaHR0cHM6Ly9ub21vcmVwYXJ0aWVzLmNvL3YxL3dmZi1jb2hvcnQtMicsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgYXV0aG9yaXphdGlvbjogJ2JiMWZlZTMxLTk1N2MtNGIzZS05ZDVjLWU1YTM5ZGY2YThhNCcsXHJcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlckRhdGEgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKGAke2NvbmZpZy5iYXNlVXJsfS91c2Vycy9tZWAsIHtcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICBoZWFkZXJzOiBjb25maWcuaGVhZGVyc1xyXG4gIH0pXHJcbiAgXHJcbiAgLnRoZW4ocmVzdWx0ID0+IHJlc3VsdC5qc29uKCkpXHJcbiAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbENhcmRzID0gKCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtjb25maWcuYmFzZVVybH0vY2FyZHNgLCB7XHJcbiAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgaGVhZGVyczogY29uZmlnLmhlYWRlcnNcclxuICB9KVxyXG4gIC50aGVuKHJlc3VsdCA9PiByZXN1bHQuanNvbigpKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlQ2FyZE5ldyA9IChkYXRhKSA9PiB7XHJcbiAgZmV0Y2goYCR7Y29uZmlnLmJhc2VVcmx9L2NhcmRzYCwge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBoZWFkZXJzOiBjb25maWcuaGVhZGVycyxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXHJcbiAgfSlcclxuXHJcbiAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgaWYgKHJlc3VsdC5vaykge1xyXG4gICAgICByZXR1cm4gcmVzdWx0Lmpzb24oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChg0J7RiNC40LHQutCwOiAke3Jlc3VsdC5zdGF0dXN9YCk7XHJcbiAgICB9XHJcbiAgfSlcclxuICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gIH0pXHJcbiAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH0pXHJcbn0iLCJpbXBvcnQgJy4uL3BhZ2VzL2luZGV4LmNzcyc7XHJcbi8vaW1wb3J0IHtpbml0aWFsQ2FyZHN9IGZyb20gJy4vY2FyZHMnO1xyXG5pbXBvcnQge29wZW5Qb3B1cCwgY2xvc2VQb3B1cH0gZnJvbSAnLi9tb2RhbHMnO1xyXG5pbXBvcnQge2NyZWF0ZUNhcmQsIGRlbGV0ZUNhcmQsIHByZXNzTGlrZX0gZnJvbSAnLi9jYXJkJztcclxuaW1wb3J0IHtlbmFibGVWYWxpZGF0aW9ufSBmcm9tICcuL3ZhbGlkYXRpb24nO1xyXG5pbXBvcnQge2NvbmZpZywgY3JlYXRlQ2FyZE5ldywgaW5pdGlhbENhcmRzLCBnZXRVc2VyRGF0YX0gZnJvbSAnLi9hcGknO1xyXG5cclxuY29uc3QgcG9wdXBUeXBlRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF90eXBlX2VkaXQnKTtcclxucG9wdXBUeXBlRWRpdC5jbGFzc0xpc3QuYWRkKFwicG9wdXBfaXMtYW5pbWF0ZWRcIik7XHJcbmNvbnN0IHBvcHVwVHlwZU5ld0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfdHlwZV9uZXctY2FyZCcpO1xyXG5wb3B1cFR5cGVOZXdDYXJkLmNsYXNzTGlzdC5hZGQoXCJwb3B1cF9pcy1hbmltYXRlZFwiKTtcclxuY29uc3QgcG9wdXBUeXBlSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfdHlwZV9pbWFnZScpO1xyXG5wb3B1cFR5cGVJbWFnZS5jbGFzc0xpc3QuYWRkKFwicG9wdXBfaXMtYW5pbWF0ZWRcIik7XHJcbmNvbnN0IGNhcmRMaWtlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2xpa2UtYnV0dG9uJyk7XHJcbmNvbnN0IHByb2ZpbGVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX190aXRsZScpO1xyXG5jb25zdCBwcm9maWxlRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fZGVzY3JpcHRpb24nKTtcclxuY29uc3QgcHJvZmlsZUVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fZWRpdC1idXR0b24nKTtcclxuY29uc3QgcHJvZmlsZUFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19hZGQtYnV0dG9uJyk7XHJcbmNvbnN0IHBvcHVwSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2ltYWdlJyk7XHJcbmNvbnN0IHBvcHVwSW1hZ2VDYXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19jYXB0aW9uJyk7XHJcbi8vINCd0LDRhdC+0LTQuNC8IDEg0YTQvtGA0LzRgyDQsiBET00gLy9cclxuY29uc3QgZm9ybUFkZE5ld1Byb2ZpbGUgPSBkb2N1bWVudC5mb3Jtc1tcImVkaXQtcHJvZmlsZVwiXTtcclxuLy8g0J3QsNGF0L7QtNC40LwgMSDQv9C+0LvRjyDRhNC+0YDQvNGLINCyIERPTSAvL1xyXG5jb25zdCBuYW1lSW5wdXRQcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19pbnB1dF90eXBlX25hbWUnKTtcclxuY29uc3QgZGVzY3JpcHRpb25JbnB1dFByb2ZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2lucHV0X3R5cGVfZGVzY3JpcHRpb24nKTtcclxuLy8g0J3QsNGF0L7QtNC40LwgMiDRhNC+0YDQvNGDINCyIERPTSAvL1xyXG5jb25zdCBmb3JtQWRkTmV3Q2FyZCA9IGRvY3VtZW50LmZvcm1zW1wibmV3LXBsYWNlXCJdO1xyXG4vLyDQndCw0YXQvtC00LjQvCAyINC/0L7Qu9GPINGE0L7RgNC80Ysg0LIgRE9NIC8vXHJcbmNvbnN0IG5hbWVJbnB1dFBsdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2lucHV0X3R5cGVfY2FyZC1uYW1lJyk7XHJcbmNvbnN0IGRlc2NyaXB0aW9uSW5wdXRQbHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19pbnB1dF90eXBlX3VybCcpO1xyXG4vLyBET00g0YPQt9C70YsgLy9cclxuY29uc3QgY2FyZFBsYWNlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFjZXNfX2xpc3QnKTtcclxuLy8g0JLRi9Cy0L7QtNC40Lwg0LrQsNGA0YLQvtGH0LrQuCDQvdCwINGB0YLRgNCw0L3QuNGG0YMgLy9cclxuLy8gaW5pdGlhbENhcmRzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuLy8gICBjYXJkUGxhY2VMaXN0LmFwcGVuZChjcmVhdGVDYXJkKGl0ZW0sIGRlbGV0ZUNhcmQsIHByZXNzTGlrZSwgc2hvd0NhcmQpKTtcclxuLy8gfSk7XHJcblxyXG5mdW5jdGlvbiBzaG93Q2FyZCAoaXRlbSkge1xyXG4gIHBvcHVwSW1hZ2Uuc3JjID0gaXRlbS5saW5rO1xyXG4gIHBvcHVwSW1hZ2UuYWx0ID0gaXRlbS5uYW1lO1xyXG4gIHBvcHVwSW1hZ2VDYXB0aW9uLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xyXG4gIG9wZW5Qb3B1cChwb3B1cFR5cGVJbWFnZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUZvcm1TdWJtaXRQcm9maWxlKGV2dCkge1xyXG4gICAgXHJcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgXHJcbiAgZWRpdE15UHJvZmlsZSh7XHJcbiAgICBuYW1lOiBuYW1lSW5wdXRQcm9maWxlLnZhbHVlLFxyXG4gICAgYWJvdXQ6IGRlc2NyaXB0aW9uSW5wdXRQcm9maWxlLnZhbHVlXHJcbiAgfSk7XHJcbiAgXHJcbiAgZXZ0LnRhcmdldC5yZXNldCgpO1xyXG4gIGNsb3NlUG9wdXAocG9wdXBUeXBlRWRpdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVN1Ym1pdEFkZE5ld0NhcmQoZXZ0KSB7XHJcblxyXG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIFxyXG4gIGNyZWF0ZUNhcmROZXcoe1xyXG4gICAgbmFtZTogbmFtZUlucHV0UGx1cy52YWx1ZSxcclxuICAgIGxpbms6IGRlc2NyaXB0aW9uSW5wdXRQbHVzLnZhbHVlLFxyXG4gIH0pXHJcbiAgY29uc3QgbmV3Q2FyZCA9IHtcclxuICAgIG5hbWU6IG5hbWVJbnB1dFBsdXMudmFsdWUsXHJcbiAgICBsaW5rOiBkZXNjcmlwdGlvbklucHV0UGx1cy52YWx1ZVxyXG4gIH07XHJcbiAgXHJcbiAgY29uc3QgbmV3QWRkQ2FyZCA9IGNyZWF0ZUNhcmQobmV3Q2FyZCwgZGVsZXRlQ2FyZCwgcHJlc3NMaWtlLCBzaG93Q2FyZCk7XHJcbiAgY2FyZFBsYWNlTGlzdC5wcmVwZW5kKG5ld0FkZENhcmQpO1xyXG5cclxuICBldnQudGFyZ2V0LnJlc2V0KCk7XHJcbiAgY2xvc2VQb3B1cChwb3B1cFR5cGVOZXdDYXJkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb3BlblBvcHVwUHJvZmlsZSgpIHtcclxuICBuYW1lSW5wdXRQcm9maWxlLnZhbHVlID0gcHJvZmlsZVRpdGxlLnRleHRDb250ZW50XHJcbiAgZGVzY3JpcHRpb25JbnB1dFByb2ZpbGUudmFsdWUgPSAgcHJvZmlsZURlc2NyaXB0aW9uLnRleHRDb250ZW50O1xyXG4gIG9wZW5Qb3B1cChwb3B1cFR5cGVFZGl0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gb3BlblBvcHVwQWRkTmV3Q2FyZCgpIHtcclxuICBvcGVuUG9wdXAocG9wdXBUeXBlTmV3Q2FyZCk7XHJcbn1cclxuXHJcbmZvcm1BZGROZXdQcm9maWxlLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZUZvcm1TdWJtaXRQcm9maWxlKTtcclxuZm9ybUFkZE5ld0NhcmQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlU3VibWl0QWRkTmV3Q2FyZCk7XHJcblxyXG5wcm9maWxlRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Qb3B1cFByb2ZpbGUpO1xyXG5wcm9maWxlQWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlblBvcHVwQWRkTmV3Q2FyZCk7XHJcblxyXG5lbmFibGVWYWxpZGF0aW9uKHtcclxuICBmb3JtU2VsZWN0b3I6ICcucG9wdXBfX2Zvcm0nLFxyXG4gIGlucHV0U2VsZWN0b3I6ICcucG9wdXBfX2lucHV0JyxcclxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogJy5wb3B1cF9fYnV0dG9uJyxcclxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiAncG9wdXBfX2J1dHRvbl9kaXNhYmxlZCcsXHJcbiAgaW5wdXRFcnJvckNsYXNzOiAncG9wdXBfX2lucHV0X3R5cGVfZXJyb3InLFxyXG4gIGVycm9yQ2xhc3M6ICdwb3B1cF9fZXJyb3JfdmlzaWJsZSdcclxufSk7XHJcblxyXG4vLyBjbGVhclZhbGlkYXRpb24oKTtcclxuXHJcblxyXG5cclxuUHJvbWlzZS5hbGwoW2luaXRpYWxDYXJkcygpLCBnZXRVc2VyRGF0YSgpXSkudGhlbigoW2NhcmRzLCB1c2VyRGF0YV0pID0+IHtcclxuICBjYXJkcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBjYXJkUGxhY2VMaXN0LmFwcGVuZChjcmVhdGVDYXJkKGl0ZW0sIGRlbGV0ZUNhcmQsIHByZXNzTGlrZSwgc2hvd0NhcmQpKTtcclxuICB9KTtcclxufSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgY29uc29sZS5sb2coZXJyb3IpO1xyXG59KVxyXG5cclxuY29uc3QgZWRpdE15UHJvZmlsZSA9IChkYXRhKSA9PiB7XHJcbiAgZmV0Y2goYCR7Y29uZmlnLmJhc2VVcmx9L3VzZXJzL21lYCwge1xyXG4gICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgaGVhZGVyczogY29uZmlnLmhlYWRlcnMsXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgYWJvdXQ6IGRhdGEuYWJvdXRcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgaWYgKHJlc3VsdC5vaykge1xyXG4gICAgICByZXR1cm4gcmVzdWx0Lmpzb24oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChg0J7RiNC40LHQutCwOiAke3Jlc3VsdC5zdGF0dXN9YCk7XHJcbiAgICB9XHJcbiAgfSlcclxuICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICBwcm9maWxlVGl0bGUudGV4dENvbnRlbnQgPSByZXN1bHQubmFtZSxcclxuICAgIHByb2ZpbGVEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHJlc3VsdC5hYm91dCxcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgfSlcclxuICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfSlcclxufVxyXG5cclxuY29uc3QgY2xpY2tPbkxpa2UgPSAoKSA9PiB7XHJcbiAgICBmZXRjaChgJHtjb25maWcuYmFzZVVybH0vY2FyZHMvbGlrZXMvNjU3ZGU4OGYwMDgzYjU2MWQ1NzJiODUxYCwge1xyXG4gICAgbWV0aG9kOiAnUFVUJyxcclxuICAgIGhlYWRlcnM6IGNvbmZpZy5oZWFkZXJzXHJcbiAgfSlcclxuXHJcbiAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgaWYgKHJlc3VsdC5vaykge1xyXG4gICAgICByZXR1cm4gcmVzdWx0Lmpzb24oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChg0J7RiNC40LHQutCwOiAke3Jlc3VsdC5zdGF0dXN9YCk7XHJcbiAgICB9XHJcbiAgfSlcclxuICAudGhlbigocmVzKSA9PiB7XHJcbiAgICBjb25zdCBsaWtlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2xpa2UtYnV0dG9uJyk7XHJcbiAgICBjb25zdCBjYXJkQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19jb3VudGVyJyk7XHJcbiAgICBsaWtlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2xpa2UtYnV0dG9uX2lzLWFjdGl2ZScpO1xyXG4gICAgY2FyZENvdW50ZXIudGV4dENvbnRlbnQgPSByZXMubGlrZXMubGVuZ3RoO1xyXG4gIH0pXHJcbiAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH0pXHJcbn1cclxuY2xpY2tPbkxpa2UoKTtcclxuXHJcbmNvbnN0IGRlbGV0ZU15Q2FyZCA9IChkYXRhKSA9PiB7XHJcbiAgZmV0Y2goYCR7Y29uZmlnLmJhc2VVcmx9L2NhcmRzL2NhcmRJZGAsIHtcclxuICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICBoZWFkZXJzOiBjb25maWcuaGVhZGVycyxcclxuICAgIFxyXG4gIH0pXHJcblxyXG4gIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgIGlmIChyZXN1bHQub2spIHtcclxuICAgICAgcmV0dXJuIHJlc3VsdC5qc29uKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYNCe0YjQuNCx0LrQsDogJHtyZXN1bHQuc3RhdHVzfWApO1xyXG4gICAgfVxyXG4gIH0pXHJcbiAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgXHJcbiAgfSlcclxuICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfSlcclxufVxyXG5cclxuY29uc3QgcHV0TGlrZSA9IChkYXRhKSA9PiB7XHJcbiAgZmV0Y2goYCR7Y29uZmlnLmJhc2VVcmx9L2xpa2VzL2NhcmRJZGAsIHtcclxuICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICBoZWFkZXJzOiBjb25maWcuaGVhZGVycyxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgbmFtZTogZGF0YS5uYW1lLFxyXG4gICAgICBhYm91dDogZGF0YS5hYm91dFxyXG4gICAgfSkgXHJcbiAgfSlcclxuXHJcbiAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgaWYgKHJlc3VsdC5vaykge1xyXG4gICAgICByZXR1cm4gcmVzdWx0Lmpzb24oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChg0J7RiNC40LHQutCwOiAke3Jlc3VsdC5zdGF0dXN9YCk7XHJcbiAgICB9XHJcbiAgfSlcclxuICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICBcclxuICB9KVxyXG4gIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICB9KVxyXG59XHJcblxyXG4vLyBjb25zdCBkZWxldGVMaWtlID0gKGRhdGEpID0+IHtcclxuLy8gICBmZXRjaChgJHtjb25maWcuYmFzZVVybH0vbGlrZXMvY2FyZElkYCwge1xyXG4vLyAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuLy8gICAgIGhlYWRlcnM6IGNvbmZpZy5oZWFkZXJzLFxyXG4vLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4vLyAgICAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbi8vICAgICAgIGFib3V0OiBkYXRhLmFib3V0XHJcbi8vICAgICB9KSBcclxuLy8gICB9KVxyXG5cclxuLy8gICAudGhlbigocmVzdWx0KSA9PiB7XHJcbi8vICAgICBpZiAocmVzdWx0Lm9rKSB7XHJcbi8vICAgICAgIHJldHVybiByZXN1bHQuanNvbigpO1xyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGDQntGI0LjQsdC60LA6ICR7cmVzdWx0LnN0YXR1c31gKTtcclxuLy8gICAgIH1cclxuLy8gICB9KVxyXG4vLyAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgIFxyXG4vLyAgIH0pXHJcbi8vICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4vLyAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4vLyAgIH0pXHJcbi8vIH0iXSwibmFtZXMiOlsib3BlblBvcHVwIiwicG9wdXAiLCJjbGFzc0xpc3QiLCJhZGQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbG9zZUVzY1BvcHVwIiwiaGFuZGxlQ2xvc2VNb2RhbFdpbmRvd092ZXJsYXlDbGljayIsImV2ZW50Iiwia2V5IiwiY2xvc2VQb3B1cCIsInF1ZXJ5U2VsZWN0b3IiLCJjdXJyZW50VGFyZ2V0IiwidGFyZ2V0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY3JlYXRlQ2FyZCIsIml0ZW0iLCJsaWtlIiwic2hvdyIsImNhcmQiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiY2FyZEltYWdlIiwic3JjIiwibGluayIsImFsdCIsIm5hbWUiLCJjYXJkRm9vdGVyQ29udGFpbmVyIiwidGV4dENvbnRlbnQiLCJjYXJkTGlrZUNvbnRhaW5lciIsImxpa2VzIiwibGVuZ3RoIiwiZGVsZXRlQ2FyZCIsImV2dCIsImNsb3Nlc3QiLCJwcmVzc0xpa2UiLCJ0b2dnbGUiLCJ0b2dnbGVCdXR0b25TdGF0ZSIsImlucHV0TGlzdCIsImJ1dHRvbkVsZW1lbnQiLCJzb21lIiwiaW5wdXRFbGVtZW50IiwidmFsaWRpdHkiLCJ2YWxpZCIsImhhc0ludmFsaWRJbnB1dCIsImRpc2FibGVkIiwiY29uZmlnIiwiYmFzZVVybCIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwicG9wdXBUeXBlRWRpdCIsInBvcHVwVHlwZU5ld0NhcmQiLCJwb3B1cFR5cGVJbWFnZSIsInByb2ZpbGVUaXRsZSIsInByb2ZpbGVEZXNjcmlwdGlvbiIsInByb2ZpbGVFZGl0QnV0dG9uIiwicHJvZmlsZUFkZEJ1dHRvbiIsInBvcHVwSW1hZ2UiLCJwb3B1cEltYWdlQ2FwdGlvbiIsImZvcm1BZGROZXdQcm9maWxlIiwiZm9ybXMiLCJuYW1lSW5wdXRQcm9maWxlIiwiZGVzY3JpcHRpb25JbnB1dFByb2ZpbGUiLCJmb3JtQWRkTmV3Q2FyZCIsIm5hbWVJbnB1dFBsdXMiLCJkZXNjcmlwdGlvbklucHV0UGx1cyIsImNhcmRQbGFjZUxpc3QiLCJzaG93Q2FyZCIsInByZXZlbnREZWZhdWx0IiwiZWRpdE15UHJvZmlsZSIsInZhbHVlIiwiYWJvdXQiLCJyZXNldCIsImRhdGEiLCJmZXRjaCIsImNvbmNhdCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3VsdCIsIm9rIiwianNvbiIsIlByb21pc2UiLCJyZWplY3QiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsIm5ld0FkZENhcmQiLCJwcmVwZW5kIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJmb3JtRWxlbWVudCIsInBhdHRlcm5NaXNtYXRjaCIsInNldEN1c3RvbVZhbGlkaXR5IiwiZGF0YXNldCIsImVycm9yTWVzc2FnZSIsImVycm9yRWxlbWVudCIsImlkIiwiaGlkZUlucHV0RXJyb3IiLCJzaG93SW5wdXRFcnJvciIsInZhbGlkYXRpb25NZXNzYWdlIiwiY2hlY2tJbnB1dFZhbGlkaXR5Iiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJhbGwiLCJfcmVmIiwiX3JlZjIiLCJjYXJkcyIsImFwcGVuZCIsInJlcyIsImxpa2VCdXR0b24iLCJjYXJkQ291bnRlciJdLCJzb3VyY2VSb290IjoiIn0=