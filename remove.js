document.querySelector('.remove-todo').addEventListener('click', function(){
    
    removeIndex = document.querySelector('.index-input').value
    list = document.querySelectorAll('ul>li')
    for (let i = 0; i <list.length; i++){
        console.log(list[i])
        if( i === Number(removeIndex)){
            list.splice(i,1)
            console.log(list)
            
        }
        }


    });