//jshint esversion : 6
 let ultasks = $('#ultasks');
 let btnAdd = $('#btnAdd');
 let btnClear = $('#btnClear');
 let inpNewTask = $('#inpNewTask');
 let btnCleanup = $('#btnCleanup');
let btnSort= $('#btnSort');
function toggleInputButtons(taskISEmpty){
  btnAdd.prop('disabled',inpNewTask.val()=='');
  btnClear.prop('disabled',inpNewTask.val()=='');
  btnSort.prop('disabled',ultasks.children().length<1);
  btnCleanup.prop('disabled',ultasks.children().length<1);
}
inpNewTask.on('input',()=>{
toggleInputButtons();
});

inpNewTask.keypress(function(e){
if(e.which==13)
addtask();
});

function addtask(){
  let listitem = $('<li>',{
    'class':"list-group-item",
    text:inpNewTask.val()
  });
  listitem.click(function(){
    listitem.toggleClass('done');
  });
  ultasks.append(listitem);
  inpNewTask.val("");
}

btnAdd.click(addtask);

btnClear.click(function(){
  inpNewTask.val('');
  toggleInputButtons();
});

function clearDone(){
$('#ultasks .done').remove();
toggleInputButtons();
}

btnCleanup.click(clearDone);

function sortTask(){
$('#ultasks .done').appendTo(ultasks);
toggleInputButtons();
}
btnSort.click(sortTask);
