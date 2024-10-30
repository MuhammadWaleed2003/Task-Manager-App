
function makeSortable(){
    console.log("hey")

    const sortableList = document.querySelectorAll(".bars");
    const items = document.querySelectorAll(".item");
    console.log("hey")
    console.log(items)
items.forEach(item => {
        item.addEventListener("dragstart", () =>{
            setTimeout(() =>   item.classList.add("dragging") , 0 );
          
        });
        item.addEventListener("dragend", () => item.classList.remove("dragging"));

    });

const initSortableList = (e) => {
        const siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];

        let nextSibling =siblings.find(sibling =>{
return e.clientY <= sibling.offsetTop + sibling.offsetHeight /2;
        });
        console.log(nextSibling)
    }
}

    $("#add").on("click", function () {

        let title = $("#title").val()
        $("#main").append("<div class='col-auto'><div class='card mb-3 mt-3'><div class='card-title p-2'>" + title + "</div> <ul class='bars'></ul>   <div class='list m-3'></div> <div class='d-flex justify-content-evenly'><p> Add task</p><button class='btn btn-warning tasks' >Add</button></div> </div></div>")
        $("#title").val("")

    })

$(document).on("click", ".tasks", function () {
 

    if ($(this).closest(".card").find(".list").html() == "") {

        $(this).closest(".card").find(".list").prepend('<div class="block"><i class="fa-solid fa-xmark d-flex justify-content-end" "></i><div class="d-flex  justify-content-evenly inputAdd"><input type="text" placeholder="Enter task" class="listText"><button class="btn btn-warning listMaker" >Add task</button></div></div>')

    }
})

$(document).on("click",".listMaker", function () {
    let cardList = $(this).siblings(".listText").val()
    console.log("cardList ::" + cardList)
    $(this).closest(".list").siblings(".bars").prepend(" <li class='item' draggable='true'><div class='details'>" + cardList + "</div></li>");
    $(".listText").val("")
    makeSortable()


})

$(document).on("click",".fa-xmark", function () {
console.log(this)
// console.log($(this).siblings("inputAdd"))
$(this).closest(".card").find(".block").remove()
})