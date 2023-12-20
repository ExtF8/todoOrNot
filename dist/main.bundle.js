"use strict";(self.webpackChunktodoornot=self.webpackChunktodoornot||[]).push([[179],{368:()=>{const e=document.querySelector("body"),t=document.querySelector("#cs-navigation"),o=document.querySelector("#cs-navigation .cs-toggle");!function(){function e(){document.body.classList.add("dark-mode"),localStorage.setItem("theme","dark")}function t(){document.body.classList.remove("dark-mode"),localStorage.setItem("theme","light")}!function(){let o="light";localStorage.getItem("theme")?o=localStorage.getItem("theme"):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(o="dark"),"dark"===o?e():t()}(),document.getElementById("dark-mode-toggle").addEventListener("click",(()=>{"light"===localStorage.getItem("theme")?e():t()}))}(),function(){o.addEventListener("click",(function(){o.classList.toggle("cs-active"),t.classList.toggle("cs-active"),e.classList.toggle("cs-open"),function(){const e=document.querySelector("#cs-expanded");"false"===e.getAttribute("aria-expanded")?e.setAttribute("aria-expanded","true"):e.setAttribute("aria-expanded","false")}()}));const c=Array.from(document.querySelectorAll("#cs-navigation .cs-dropdown"));for(const e of c){const t=()=>{e.classList.toggle("cs-active")};e.addEventListener("click",t)}}();let c=document.querySelector("#main-container");homePageLoader(c),["home","menu","contacts"].forEach((e=>{const t=document.getElementById(e);t.addEventListener("click",(()=>{"home"==t.id?homePageLoader(c):"menu"==t.id?menuPageLoader(c):contactsPageLoader(c),function(e){const t=document.querySelector("body"),o=document.querySelector("#cs-navigation"),c=document.querySelector("#cs-navigation .cs-toggle");["home","menu","contacts"].forEach((a=>{const n=document.getElementById(a);n&&(a===e?(n.classList.add("cs-active"),c.classList.remove("cs-active"),o.classList.remove("cs-active"),t.classList.remove("cs-open")):n.classList.remove("cs-active"))}))}(e)}))}))}},e=>{e(e.s=368)}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6IitGQUNBLE1BQU1BLEVBQVNDLFNBQVNDLGNBQWMsUUFDaENDLEVBQWVGLFNBQVNDLGNBQWMsa0JBQ3RDRSxFQUFrQkgsU0FBU0MsY0FBYyw4QkNDaEMsV0FFWCxTQUFTRyxJQUNMSixTQUFTSyxLQUFLQyxVQUFVQyxJQUFJLGFBQzVCQyxhQUFhQyxRQUFRLFFBQVMsT0FDbEMsQ0FDQSxTQUFTQyxJQUNMVixTQUFTSyxLQUFLQyxVQUFVSyxPQUFPLGFBQy9CSCxhQUFhQyxRQUFRLFFBQVMsUUFDbEMsRUFHQSxXQUVJLElBQUlHLEVBQVEsUUFHUkosYUFBYUssUUFBUSxTQUNyQkQsRUFBUUosYUFBYUssUUFBUSxTQUk3QkMsT0FBT0MsWUFDUEQsT0FBT0MsV0FBVyxnQ0FBZ0NDLFVBRWxESixFQUFRLFFBSUYsU0FBVkEsRUFBbUJSLElBQW1CTSxHQUMxQyxDQUdBTyxHQUdBakIsU0FDS2tCLGVBQWUsb0JBQ2ZDLGlCQUFpQixTQUFTLEtBRVcsVUFBbENYLGFBQWFLLFFBQVEsU0FDZlQsSUFDQU0sR0FBaUIsR0FFbkMsQ0NuQ0FVLEdGTGUsV0FDWGpCLEVBQWdCZ0IsaUJBQWlCLFNBQVMsV0FDdENoQixFQUFnQkcsVUFBVWUsT0FBTyxhQUNqQ25CLEVBQWFJLFVBQVVlLE9BQU8sYUFDOUJ0QixFQUFPTyxVQUFVZSxPQUFPLFdBUTVCLFdBQ0ksTUFBTUMsRUFBT3RCLFNBQVNDLGNBQWMsZ0JBSWpCLFVBSEFxQixFQUFLQyxhQUFhLGlCQUlqQ0QsRUFBS0UsYUFBYSxnQkFBaUIsUUFFbkNGLEVBQUtFLGFBQWEsZ0JBQWlCLFFBRTNDLENBaEJJQyxFQUNKLElBa0JBLE1BQU1DLEVBQVlDLE1BQU1DLEtBQ3BCNUIsU0FBUzZCLGlCQUFpQixnQ0FFOUIsSUFBSyxNQUFNQyxLQUFRSixFQUFXLENBQzFCLE1BQU1LLEVBQVUsS0FDWkQsRUFBS3hCLFVBQVVlLE9BQU8sWUFBWSxFQUV0Q1MsRUFBS1gsaUJBQWlCLFFBQVNZLEVBQ25DLENBQ0osQ0UxQkFDLEdBR0EsSUFFSUMsRUFBVWpDLFNBQVNDLGNBQWMsbUJBR3JDaUMsZUFBZUQsR0FMQyxDQUFDLE9BQVEsT0FBUSxZQVl2QkUsU0FBU0MsSUFDZixNQUFNQyxFQUFTckMsU0FBU2tCLGVBQWVrQixHQUN2Q0MsRUFBT2xCLGlCQUFpQixTQUFTLEtBQ1osUUFBYmtCLEVBQU9DLEdBQ1BKLGVBQWVELEdBQ0ssUUFBYkksRUFBT0MsR0FDZEMsZUFBZU4sR0FFZk8sbUJBQW1CUCxHQVV4QixTQUFxQ1EsR0FFeEMsTUFHTXBDLEVBQU9MLFNBQVNDLGNBQWMsUUFDOUJ5QyxFQUFhMUMsU0FBU0MsY0FBYyxrQkFDcEMwQyxFQUFnQjNDLFNBQVNDLGNBQWMsNkJBTG5CLENBQUMsT0FBUSxPQUFRLFlBT3pCa0MsU0FBU1MsSUFDdkIsTUFBTUMsRUFBZ0I3QyxTQUFTa0IsZUFBZTBCLEdBQzFDQyxJQUNJRCxJQUFhSCxHQUNiSSxFQUFjdkMsVUFBVUMsSUFBSSxhQUc1Qm9DLEVBQWNyQyxVQUFVSyxPQUFPLGFBQy9CK0IsRUFBV3BDLFVBQVVLLE9BQU8sYUFDNUJOLEVBQUtDLFVBQVVLLE9BQU8sWUFFdEJrQyxFQUFjdkMsVUFBVUssT0FBTyxhQUV2QyxHQUVSLENBaENRbUMsQ0FBNEJWLEVBQVMsR0FDdkMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9vcm5vdC8uL3NyYy9tb2R1bGVzL3V0aWxpdHkvbW9iaWxlTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly90b2Rvb3Jub3QvLi9zcmMvbW9kdWxlcy91dGlsaXR5L2RhcmtNb2RlLmpzIiwid2VicGFjazovL3RvZG9vcm5vdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTZWxlY3QgRE9NIGVsZW1lbnRzIGZvciBtb2JpbGUgbmF2aWdhdGlvblxuY29uc3QgQ1Nib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuY29uc3QgQ1NuYXZiYXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NzLW5hdmlnYXRpb24nKTtcbmNvbnN0IENTaGFtYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcy1uYXZpZ2F0aW9uIC5jcy10b2dnbGUnKTtcblxuLyoqXG4gKiBTZXRzIHVwIGV2ZW50IGxpc3RlbmVycyBmb3IgbW9iaWxlIG5hdmlnYXRpb24gdG9nZ2xpbmdcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9iaWxlTmF2aWdhdGlvblRvZ2dsaW5nKCkge1xuICAgIENTaGFtYnVyZ2VyTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgQ1NoYW1idXJnZXJNZW51LmNsYXNzTGlzdC50b2dnbGUoJ2NzLWFjdGl2ZScpO1xuICAgICAgICBDU25hdmJhck1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnY3MtYWN0aXZlJyk7XG4gICAgICAgIENTYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdjcy1vcGVuJyk7XG4gICAgICAgIC8vIHJ1biB0aGUgZnVuY3Rpb24gdG8gY2hlY2sgdGhlIGFyaWEtZXhwYW5kZWQgdmFsdWVcbiAgICAgICAgYXJpYUV4cGFuZGVkKCk7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgYW5kIHRvZ2dsZXMgdGhlICdhcmlhLWV4cGFuZGVkJyBhdHRyaWJ1dGUgb24gdGhlIG5hdmlnYXRpb24gbGlzdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFyaWFFeHBhbmRlZCgpIHtcbiAgICAgICAgY29uc3QgY3NVTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcy1leHBhbmRlZCcpO1xuICAgICAgICBjb25zdCBjc0V4cGFuZGVkID0gY3NVTC5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKTtcblxuICAgICAgICAvLyBUb2dnbGUgdGhlICdhcmlhLWV4cGFuZGVkJyBhdHRyaWJ1dGUgYmFzZWQgb24gaXRzIGN1cnJlbnQgc3RhdGUuXG4gICAgICAgIGlmIChjc0V4cGFuZGVkID09PSAnZmFsc2UnKSB7XG4gICAgICAgICAgICBjc1VMLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjc1VMLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2V0IHVwIGNsaWNrIGV2ZW50IGxpc3RlbmVycyBmb3IgZHJvcGRvd24gaXRlbXMgaW4gdGhlIG1vYmlsZSBuYXZpZ2F0aW9uXG4gICAgY29uc3QgZHJvcERvd25zID0gQXJyYXkuZnJvbShcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NzLW5hdmlnYXRpb24gLmNzLWRyb3Bkb3duJylcbiAgICApO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBkcm9wRG93bnMpIHtcbiAgICAgICAgY29uc3Qgb25DbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnY3MtYWN0aXZlJyk7XG4gICAgICAgIH07XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrKTtcbiAgICB9XG59XG4iLCIvL1xuLy8gICAgVGhlIERhcmsgTW9kZSBTeXN0ZW1cbi8vXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRhcmtNb2RlVG9nZ2xlcigpIHtcbiAgICAvLyBoZWxwZXIgZnVuY3Rpb25zIHRvIHRvZ2dsZSBkYXJrIG1vZGVcbiAgICBmdW5jdGlvbiBlbmFibGVEYXJrTW9kZSgpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdkYXJrLW1vZGUnKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgJ2RhcmsnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGlzYWJsZURhcmtNb2RlKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmstbW9kZScpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnbGlnaHQnKTtcbiAgICB9XG5cbiAgICAvLyBkZXRlcm1pbmVzIGEgbmV3IHVzZXJzIGRhcmsgbW9kZSBwcmVmZXJlbmNlc1xuICAgIGZ1bmN0aW9uIGRldGVjdENvbG9yU2NoZW1lKCkge1xuICAgICAgICAvLyBkZWZhdWx0IHRvIHRoZSBsaWdodCB0aGVtZVxuICAgICAgICBsZXQgdGhlbWUgPSAnbGlnaHQnO1xuXG4gICAgICAgIC8vIGNoZWNrIGxvY2FsU3RvcmFnZSBmb3IgYSBzYXZlZCAndGhlbWUnIHZhcmlhYmxlLiBpZiBpdCdzIHRoZXJlLCB0aGUgdXNlciBoYXMgdmlzaXRlZCBiZWZvcmUsIHNvIGFwcGx5IHRoZSBuZWNlc3NhcnkgdGhlbWUgY2hvaWNlc1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykpIHtcbiAgICAgICAgICAgIHRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgaXQncyBub3QgdGhlcmUsIGNoZWNrIHRvIHNlZSBpZiB0aGUgdXNlciBoYXMgYXBwbGllZCBkYXJrIG1vZGUgcHJlZmVyZW5jZXMgdGhlbXNlbHZlcyBpbiB0aGUgYnJvd3NlclxuICAgICAgICBlbHNlIGlmIChcbiAgICAgICAgICAgIHdpbmRvdy5tYXRjaE1lZGlhICYmXG4gICAgICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXNcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGVtZSA9ICdkYXJrJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIHByZWZlcmVuY2Ugc2V0LCB0aGUgZGVmYXVsdCBvZiBsaWdodCB3aWxsIGJlIHVzZWQuIGFwcGx5IGFjY29yZGluZ2x5XG4gICAgICAgIHRoZW1lID09PSAnZGFyaycgPyBlbmFibGVEYXJrTW9kZSgpIDogZGlzYWJsZURhcmtNb2RlKCk7XG4gICAgfVxuXG4gICAgLy8gcnVuIG9uIHBhZ2UgbG9hZFxuICAgIGRldGVjdENvbG9yU2NoZW1lKCk7XG5cbiAgICAvLyBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGRhcmsgbW9kZSBidXR0b24gdG9nZ2xlXG4gICAgZG9jdW1lbnRcbiAgICAgICAgLmdldEVsZW1lbnRCeUlkKCdkYXJrLW1vZGUtdG9nZ2xlJylcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gb24gY2xpY2ssIGNoZWNrIGxvY2FsU3RvcmFnZSBmb3IgdGhlIGRhcmsgbW9kZSB2YWx1ZSwgdXNlIHRvIGFwcGx5IHRoZSBvcHBvc2l0ZSBvZiB3aGF0J3Mgc2F2ZWRcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpID09PSAnbGlnaHQnXG4gICAgICAgICAgICAgICAgPyBlbmFibGVEYXJrTW9kZSgpXG4gICAgICAgICAgICAgICAgOiBkaXNhYmxlRGFya01vZGUoKTtcbiAgICAgICAgfSk7XG59XG4iLCIvLyBJbXBvcnRpbmcgZ2xvYmFsLCBtYWluLCBhbmQgZGFyayBtb2RlIENTUyBzdHlsZXNoZWV0c1xuaW1wb3J0ICcuL3N0eWxlcy9nbG9iYWwuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvbWFpbi5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9kYXJrLmNzcyc7XG5cbi8vIEltcG9ydGluZyBmdW5jdGlvbmFsaXR5IG1vZHVsZXNcbmltcG9ydCBkYXJrTW9kZVRvZ2dsZXIgZnJvbSAnLi9tb2R1bGVzL3V0aWxpdHkvZGFya01vZGUuanMnO1xuaW1wb3J0IG1vYmlsZU5hdmlnYXRpb25Ub2dnbGluZyBmcm9tICcuL21vZHVsZXMvdXRpbGl0eS9tb2JpbGVOYXZpZ2F0aW9uLmpzJztcblxuLy8gSW1wb3J0aW5nIHBhZ2UgbG9hZGVyIGZ1bmN0aW9uc1xuXG5cbi8vIEFjdGl2YXRlIGRhcmsgbW9kZSB0b2dnbGUgZnVuY3Rpb25hbGl0eVxuZGFya01vZGVUb2dnbGVyKCk7XG5cbi8vIFNldCB1cCBtb2JpbGUgbmF2aWdhdGlvbiB0b2dnbGUgZnVuY3Rpb25hbGl0eVxubW9iaWxlTmF2aWdhdGlvblRvZ2dsaW5nKCk7XG5cbi8vIEdsb2JhbCB2YXJpYWJsZXMgc2V0dXBcbmxldCBwYWdlTmFtZXMgPSBbJ2hvbWUnLCAnbWVudScsICdjb250YWN0cyddO1xuLy8gbGV0IGN1cnJlbnRUYWIgPSBwYWdlTmFtZXNbMF07XG5sZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRhaW5lcicpO1xuXG4vLyBMb2FkIHRoZSBpbml0aWFsIGhvbWUgcGFnZSBjb250ZW50XG5ob21lUGFnZUxvYWRlcihjb250ZW50KTtcblxuLyoqXG4gKiBTZXQgdXAgY2xpY2sgZXZlbnQgbGlzdGVuZXJzIGZvciB0YWIgbmF2aWdhdGlvbiBpbiB0aGUgaGVhZGVyXG4gKiBUaGlzIGFsbG93cyBzd2l0Y2hpbmcgYmV0d2VlbiBkaWZmZXJlbnQgcGFnZXMgKGhvbWUsIG1lbnUsIGNvbnRhY3RzKSBhbmRcbiAqIGVuc3VyZXMgdGhlIGFwcHJvcHJpYXRlIGNvbnRlbnQgaXMgbG9hZGVkIGFuZCBkaXNwbGF5ZWRcbiAqL1xucGFnZU5hbWVzLmZvckVhY2goKHBhZ2VOYW1lKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFnZU5hbWUpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKGJ1dHRvbi5pZCA9PSAnaG9tZScpIHtcbiAgICAgICAgICAgIGhvbWVQYWdlTG9hZGVyKGNvbnRlbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKGJ1dHRvbi5pZCA9PSAnbWVudScpIHtcbiAgICAgICAgICAgIG1lbnVQYWdlTG9hZGVyKGNvbnRlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGFjdHNQYWdlTG9hZGVyKGNvbnRlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZU5hdmlnYXRpb25BY3RpdmVTdGF0ZShwYWdlTmFtZSk7XG4gICAgfSk7XG59KTtcblxuLyoqXG4gKiBVcGRhdGVzIHRoZSBhY3RpdmUgc3RhdGUgb2YgbmF2aWdhdGlvbiBidXR0b25zIGFuZCByZW1vdmVzIGFjdGl2ZSBzdGF0ZSBpbiBtb2JpbGUgbmF2aWdhdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IGFjdGl2ZUJ1dHRvbklkIC0gVGhlIElEIG9mIHRoZSBuYXZpZ2F0aW9uIGJ1dHRvbiB0byBiZSBtYXJrZWQgYXMgYWN0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVOYXZpZ2F0aW9uQWN0aXZlU3RhdGUoYWN0aXZlQnV0dG9uSWQpIHtcbiAgICAvLyBOYXZpZ2F0aW9uIGJ1dHRvbiBJRHNcbiAgICBjb25zdCBuYXZpZ2F0aW9uQnV0dG9ucyA9IFsnaG9tZScsICdtZW51JywgJ2NvbnRhY3RzJ107XG5cbiAgICAvLyBTZWxlY3RpbmcgZWxlbWVudHMgcmVsYXRlZCB0byBtb2JpbGUgbmF2aWdhdGlvblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgbmF2YmFyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcy1uYXZpZ2F0aW9uJyk7XG4gICAgY29uc3QgaGFtYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcy1uYXZpZ2F0aW9uIC5jcy10b2dnbGUnKTtcblxuICAgIG5hdmlnYXRpb25CdXR0b25zLmZvckVhY2goKGJ1dHRvbklkKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChidXR0b25JZCk7XG4gICAgICAgIGlmIChidXR0b25FbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoYnV0dG9uSWQgPT09IGFjdGl2ZUJ1dHRvbklkKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjcy1hY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgIC8vIENsb3NlIG1vYmlsZSBuYXZpZ2F0aW9uIG1lbnUgd2hlbiBhIG5hdmlnYXRpb24gYnV0dG9uIGlzIGFjdGl2YXRlZFxuICAgICAgICAgICAgICAgIGhhbWJ1cmdlck1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnY3MtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdjcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2NzLW9wZW4nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjcy1hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbIkNTYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkNTbmF2YmFyTWVudSIsIkNTaGFtYnVyZ2VyTWVudSIsImVuYWJsZURhcmtNb2RlIiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJkaXNhYmxlRGFya01vZGUiLCJyZW1vdmUiLCJ0aGVtZSIsImdldEl0ZW0iLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImRldGVjdENvbG9yU2NoZW1lIiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZGFya01vZGVUb2dnbGVyIiwidG9nZ2xlIiwiY3NVTCIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImFyaWFFeHBhbmRlZCIsImRyb3BEb3ducyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpdGVtIiwib25DbGljayIsIm1vYmlsZU5hdmlnYXRpb25Ub2dnbGluZyIsImNvbnRlbnQiLCJob21lUGFnZUxvYWRlciIsImZvckVhY2giLCJwYWdlTmFtZSIsImJ1dHRvbiIsImlkIiwibWVudVBhZ2VMb2FkZXIiLCJjb250YWN0c1BhZ2VMb2FkZXIiLCJhY3RpdmVCdXR0b25JZCIsIm5hdmJhck1lbnUiLCJoYW1idXJnZXJNZW51IiwiYnV0dG9uSWQiLCJidXR0b25FbGVtZW50IiwidXBkYXRlTmF2aWdhdGlvbkFjdGl2ZVN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==