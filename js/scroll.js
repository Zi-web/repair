$(".btn--scroll").on("click",function(t){$("html,body").stop().animate({scrollTop:$(this.hash).offset().top},1e3),t.preventDefault()});