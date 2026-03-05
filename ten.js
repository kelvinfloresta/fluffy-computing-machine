for (var i = 0; i < 5; i++) { 
    setTimeout(() => {
        var a = i
        console.log(a)
    }, 1000);
}

function cartReducer(state = { items: [] }, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            state.items.push(action.payload);
            return state;
        default:
            return state;
    }
}