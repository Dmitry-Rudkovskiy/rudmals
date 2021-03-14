const initialState = {
    showSiteDevelopForm: true,
    showDevelopDesing: false,
    showImg1: true,
    showImg2: false,
    showImg3: false,
    showMenu: null,
    showMenuBurger: null,
}
export function counterReducer(state = initialState , action) {
    switch (action.type) {
      case 'SHOW_SITE_DEVELOP_FORM':
        return { 
            ...state, showSiteDevelopForm: action.payload
        }

      case 'SHOW_SITE_DEVELOP_DESING':
        return { 
            ...state, showDevelopDesing: action.payload
        }


        case 'SHOW_IMG_1':
            return { 
                ...state, showImg1: action.payload
            }
    
          case 'SHOW_IMG_2':
            return { 
                ...state, showImg2: action.payload
            }

            

            case 'SHOW_IMG_3':
                return { 
                    ...state, showImg3: action.payload
                }
              case 'SHOW_MENU':
                return { 
                    ...state, showMenu: action.payload
                }

                
                case 'SHOW_MENU_BURGER':
                    return { 
                        ...state, showMenuBurger: action.payload
                    }
            
      default:
        return state
    }
  }