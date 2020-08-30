let search_btn=document.getElementById("btn-search");

search_btn.addEventListener("click",()=>{
            let e=document.getElementById("select-type");
            let search_option=e[e.selectedIndex].value;
            let input=document.getElementById("input-search").value;
            location.href=`/search?page=0&size=9&search=${input}&search_type=${search_option}`;
        })