import uuid from 'uuid/v4';


  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD" :
        return {...state, toDos: [...state.toDos, { text: action.payload, id: uuid() }]}
      case "DEL" :
          return {...state, toDos: state.toDos.filter(
            (toDo) => { 
              //true 만 살려둠. 
              //toDo의 id 랑 버튼의 payload의 값이랑 비교해서
              //같지 않은애만 살림 = true
              console.log( "current :", toDo.id, "target :", action.payload )
              return toDo.id !== action.payload
             }
          )}
      case "DEL_COMP" :
        return {...state, completed: state.completed.filter(
            (toDo) => { 
                //true 만 살려둠. 
                //toDo의 id 랑 버튼의 payload의 값이랑 비교해서
                //같지 않은애만 살림 = true
                console.log( "current :", toDo.id, "target :", action.payload )
                return toDo.id !== action.payload
                }
            )}
      case "COMPLETE" :
          const target = state.toDos.find( (toDo) => {
            return toDo.id === action.payload
            //클릭한 거를 가져오니까 같은 것을 가져옴
          } )
          return {...state, toDos: state.toDos.filter(
            (toDo) => { 
              //true 만 살려둠. 
              //toDo의 id 랑 버튼의 payload의 값이랑 비교해서
              //같지 않은애만 살림 = true
              console.log( "current :", toDo.id, "target :", action.payload )
              return toDo.id !== action.payload
             }
          ), completed: [...state.completed, {...target}]}
        case "UNCOMPLETE" :
          const atarget = state.completed.find( (toDo) => {
            return toDo.id === action.payload
            //클릭한 거를 가져오니까 같은 것을 가져옴
          } )
          return {...state, completed: state.completed.filter(
              // filter가 빼기의 기능
            (toDo) => { 
              //true 만 살려둠. 
              //toDo의 id 랑 버튼의 payload의 값이랑 비교해서
              //같지 않은애만 살림 = true
              console.log( "current :", toDo.id, "target :", action.payload )
              return toDo.id !== action.payload
              // 내가 uncomplieted 클릭한 친구가
              // 남은 애들과 다른 값이니까 !== 를 넣으면
              // completed에 다른 값만 남게 되는 것이다.
             }
          ), toDos: [...state.toDos, {...atarget}]}
      default :
        throw new Error();
    } 
  };

export const initialState = {
  //toDos 안에 toDo 가 들어와야 하니까
  //{text: "aaa"} === toDo 라고 볼 수 있음
  toDos: [],
  completed : []
};



export default reducer;