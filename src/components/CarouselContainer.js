import React, {Component} from 'react';
class MiComponente extends Component{

    render(){
        let receta={
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso','Jamon Cocido'],
            calorias:400
        };

        return (
           // <React.Fragment>
          <div className="mi-componente">
            <Component
              cursor={usedCursor}
              carouselState={carouselState}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              onTouchCancel={onTouchCancel}
            >
            {allYourRenderedCards}
            </Component>
          </div>
           // </React.Fragment>
           

        );   

    }

}

export default MiComponente;