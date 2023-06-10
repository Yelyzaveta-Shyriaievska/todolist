$(document).ready(function(){
  let value=0
  let items=$(".task_check").length
  let change=100/items

  $("#btn").click(function(){
    let text=$("#text").val()
    let item=`<div class="task_item">
    <input type="checkbox" name="" class="task_check">
    <p>${text}</p>
    </div>`
  
    $(".bottom").append(item)
    items=$(".task_check").length
    change=100/items
    let checked=$(".task_check:checked").length
    value=change*checked
    $("#progress").progressbar('option','value',value)
  })
  
  $("#progress").progressbar({
    complete:function(event,ui){
      let player=new Audio
      player.src="sound-effects-library-crowd-of-adults-saying-wow-.mp3"
      player.play()

      $(".task_item").remove()
    }
  })
  
  $('body').on('change','.task_check', function(){

    if(this.checked){
      value+=change
      $("#progress").progressbar('option','value',value)
      let player=new Audio
      player.src="40fa2d325b96b1b.mp3"
      player.play()
    }
    else{
      value-=change
      $("#progress").progressbar('option','value',value)
    }
    /*let value=$(".task_check").length
    value=100/value
    $("#progress").progressbar('option','value',value)*/
  })
})