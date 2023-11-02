export const ProcesoReducer = (state=[],action)=>{
    switch (action.type) {
        case 'listaProceso':
            return action.payload;
            case 'addProceso':
                return [
                    ...state,
                    {
                        ...action.payload,//el payload es el valor
                    }
                ];     
            case 'updateProceso':
                return state.map(p => {
                    if (p.id === action.payload.id) {
                        return {
                            ...action.payload
                        };
                    }
                    return p;
                })    
        default:
            break;
    }

}