Vue.component('searchbar', {
  template: '<div class="topnav-searchbar"><div class="search-form"><form><input type="text" class="searchTerm" placeholder="Search FESC"><button type="submit" class="searchButton"><i class="fa fa-search"></i></button></form></div></div>'
})

document.addEventListener("DOMContentLoaded", function(){
  let searchbarApp = new Vue({
    el: '#searchbarApp'
  })
})
