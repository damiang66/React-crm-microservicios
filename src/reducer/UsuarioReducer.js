export const UsuarioReducer = (state=[],action)=>{
    switch (action.type) {
        case 'listarUsuarios':
            return action.payload;
            case 'addUsuario':
                return [
                    ...state,
                    {
                        ...action.payload,//el payload es el valor
                    }
                ];     
            case 'updateUsuario':
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